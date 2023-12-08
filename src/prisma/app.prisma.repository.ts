import { prisma } from './prismaModule';

export class AppRepository {
  async create({
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
  }) {
    return await prisma.deseases.create({
      data: {
        damagedArea: damagedArea,
        externalDecay: externalDecay,
        cankerLesion: cankerLesion,
        fruitSpots: fruitSpots,
        cropHist: cropHist,
        fruitingBodies: fruitingBodies,
        fruitPods: fruitPods,
        germination: germination,
        hail: hail,
        intDiscolor: intDiscolor,
        leafMalf: leafMalf,
        leafMild: leafMild,
        leafShread: leafShread,
        leafSpotsHalo: leafSpotsHalo,
        leafSpotsSize: leafSpotsSize,
        leafSpotsMarg: leafSpotsMarg,
        leaves: leaves,
        lodging: lodging,
        moldGrowth: moldGrowth,
        mycelium: mycelium,
        plantGrowth: plantGrowth,
        plantStand: plantStand,
        precip: precip,
        roots: roots,
        sclerotia: sclerotia,
        seedDiscolor: seedDiscolor,
        severity: severity,
        seedTmt: seedTmt,
        stem: stem,
        stemCanker: stemCanker,
        months: months,
        temps: temps,
      },
    });
  }

  async readOne(id: number) {
    return await prisma.deseases.findUnique({
      where: {
        id: id,
      },
    });
  }

  async readOneByName(deseaseName: string) {
    return await prisma.deseases.findFirst({
      where: {
        deseaseName: deseaseName,
      },
    });
  }

  async read(id: number) {
    return await prisma.deseases.findMany({
      where: {
        id: {
          not: id,
        },
      },
    });
  }

  async readMaxValues() {
    return await prisma.deseases.aggregate({
      _max: {
        damagedArea: true,
      },
    });
  }

  async readMinValues() {
    return await prisma.deseases.aggregate({
      _min: {
        damagedArea: true,
      },
    });
  }

  async update({ id, deseaseName }) {
    await prisma.deseases.update({
      where: {
        id: id,
      },
      data: {
        deseaseName: deseaseName,
      },
    });
  }
}
