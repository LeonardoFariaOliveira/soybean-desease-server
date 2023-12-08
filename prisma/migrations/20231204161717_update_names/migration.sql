/*
  Warnings:

  - You are about to drop the `Desases` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Desases";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Deseases" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "deseaseName" TEXT,
    "damagedArea" DECIMAL NOT NULL,
    "externalDecay" DECIMAL NOT NULL,
    "cankerLesion" DECIMAL NOT NULL,
    "fruitSpots" DECIMAL NOT NULL,
    "cropHist" DECIMAL NOT NULL,
    "fruitingBodies" DECIMAL NOT NULL,
    "fruitPods" DECIMAL NOT NULL,
    "germination" DECIMAL NOT NULL,
    "hail" DECIMAL NOT NULL,
    "intDiscolor" DECIMAL NOT NULL,
    "leafMalf" DECIMAL NOT NULL,
    "leafMild" DECIMAL NOT NULL,
    "leafShread" DECIMAL NOT NULL,
    "leafSpotsHalo" DECIMAL NOT NULL,
    "leafSpotsSize" DECIMAL NOT NULL,
    "leafSpotsMarg" DECIMAL NOT NULL,
    "leaves" DECIMAL NOT NULL,
    "lodging" DECIMAL NOT NULL,
    "moldGrowth" DECIMAL NOT NULL,
    "mycelium" DECIMAL NOT NULL,
    "plantGrowth" DECIMAL NOT NULL,
    "plantStand" DECIMAL NOT NULL,
    "precip" DECIMAL NOT NULL,
    "roots" DECIMAL NOT NULL,
    "sclerotia" DECIMAL NOT NULL,
    "seedDiscolor" DECIMAL NOT NULL,
    "severity" DECIMAL NOT NULL,
    "seedTmt" DECIMAL NOT NULL,
    "stem" DECIMAL NOT NULL,
    "stemCanker" DECIMAL NOT NULL,
    "months" DECIMAL NOT NULL,
    "temps" DECIMAL NOT NULL
);
