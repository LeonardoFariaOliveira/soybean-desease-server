import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { AppService } from './app.service';
import { CaseDeseaseInterface } from './CaseDesease';
import { DeseaseInterface } from './Desease';
import weight from './Weight';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() body) {
    return this.appService.create(body);
  }

  @Patch('desease/:id')
  update(@Param('id') id: string, @Body() body) {
    return this.appService.update(parseInt(id), body.deseaseName);
  }

  @Get('desease/get/:id')
  readOne(@Param('id') id: string) {
    return this.appService.readOne(parseInt(id));
  }

  @Get('desease/get/name/:name')
  readOneByName(@Param('deseaseName') deseaseName: string) {
    return this.appService.readOneByName(deseaseName);
  }

  @Get('desease/:id')
  async readSimilariry(@Param('id') id: string, @Body() body) {
    const newDesease = await this.appService.readOne(parseInt(id));
    const deseases = await this.appService.read(parseInt(id));
    const maxValuesDeseases = await this.appService.readMaxValues();
    const minValuesDeseases = await this.appService.readMinValues();
    const bigDeseases = new Array<CaseDeseaseInterface>();

    const sumSimilarity = new Array<number>();
    for (let i = 0; i < deseases.length; i++) {
      sumSimilarity.push(0);
      // eslint-disable-next-line prefer-const
      for (const property in newDesease) {
        if (property !== 'id' && property != 'deseaseName') {
          const similarity = await this.appService.generateLocalSimilarity(
            parseFloat(newDesease[property]),
            parseFloat(deseases[i].damagedArea.toString()),
            parseFloat(maxValuesDeseases._max.damagedArea.toString()),
            parseFloat(minValuesDeseases._min.damagedArea.toString()),
            weight[i],
          );
          // console.log(i)

          bigDeseases.push({
            id: i,
            name: property,
            value: newDesease[property],
            similarity: similarity,
          });
          // .deseases[property]
          // bigDeseases.deseases[property].similarity = similarity;
          // console.log(newDesease[property]);
        }
      }
    }

    // console.log(bigDeseases.sort());
    bigDeseases.sort();
    const totalWeight = weight.reduce((acumulador, elemento) => {
      return acumulador + elemento;
    }, 0);
    const completeDesease = new Array<DeseaseInterface>();
    for (let j = 0; j < deseases.length; j++) {
      for (const property in deseases[j]) {
        sumSimilarity[j] =
          sumSimilarity[j] + bigDeseases[j].similarity * weight[j];

        completeDesease[j] = {
          deseaseName: deseases[j].deseaseName,
          // eslint-disable-next-line prettier/prettier
          globalSimilarity: sumSimilarity[j] / totalWeight,

          // console.log),
        };
      }

      // console.log(bigDeseases[j]);
      // console.log(sumSimilarity[j]);

      ///206;
      // console.log(bigDeseases[j]);
    }

    return completeDesease.filter((obj) => {
      if (
        obj.globalSimilarity * 100 >= 75 &&
        obj.globalSimilarity * 100 - 65 <= 100
      )
        return obj;
    });
  }
}
