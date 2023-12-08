/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { AppRepository } from './prisma/app.prisma.repository';

@Injectable()
export class AppService {

  
   private appRepository = new AppRepository()

   
   
   async create(
      {
         damagedArea,
         externalDecay,
         cankerLesion,
         fruitSpots,
         cropHist,
         fruitingBodies,
         fruitPods,
         germination,
         hail,
         intDiscolor,
         leafMalf,
         leafMild,
         leafShread,
         leafSpotsHalo,
         leafSpotsSize,
         leafSpotsMarg,
         leaves,
         lodging,
         moldGrowth,
         mycelium,
         plantGrowth,
         plantStand,
         precip,
         roots,
         sclerotia,
         seedDiscolor,
         severity,
         seedTmt,
         stem,
         stemCanker,
         months,
         temps,
       }
   ){
      return await this.appRepository.create({
         damagedArea,
         externalDecay,
         cankerLesion,
         fruitSpots,
         cropHist,
         fruitingBodies,
         fruitPods,
         germination,
         hail,
         intDiscolor,
         leafMalf,
         leafMild,
         leafShread,
         leafSpotsHalo,
         leafSpotsSize,
         leafSpotsMarg,
         leaves,
         lodging,
         moldGrowth,
         mycelium,
         plantGrowth,
         plantStand,
         precip,
         roots,
         sclerotia,
         seedDiscolor,
         severity,
         seedTmt,
         stem,
         stemCanker,
         months,
         temps,
       })
   }

   async read(id:number){
      return await this.appRepository.read(id)
   }

   async readOne(id:number){
      return await this.appRepository.readOne(id)
   }

   async readOneByName(deseaseName:string){
      return await this.appRepository.readOneByName(deseaseName)
   }

   async readMaxValues(){
      return await this.appRepository.readMaxValues()
   }

   async readMinValues(){
      return await this.appRepository.readMinValues()
   }

   async generateLocalSimilarity(
    newDamagedArea:number, 
    damagedArea:number, 
    maxDamagedArea:number,
    minDamagedArea:number,
    weight: number){
      // console.log(
      // newDamagedArea+" - "+ 
      // damagedArea+ " = "+
      // Math.abs(newDamagedArea - damagedArea), 
         
      // )

      // console.log(
      //    maxDamagedArea+" - "+ 
      //    minDamagedArea+ " = "+
      //    Math.abs(maxDamagedArea - minDamagedArea), 
            
      //    )
   //1-(abs(novo_caso-antigo_caso)/(valor_maximo-valor_minimo))
      return 1 - 
      (Math.abs(newDamagedArea - damagedArea) / 
      maxDamagedArea - minDamagedArea)
      
   }

   async update(id:number, deseaseName:string){
      return await this.appRepository.update({id, deseaseName})
   }

}
