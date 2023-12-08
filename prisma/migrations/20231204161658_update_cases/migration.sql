/*
  Warnings:

  - You are about to drop the column `desaseName` on the `Desases` table. All the data in the column will be lost.
  - Added the required column `cankerLesion` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cropHist` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `externalDecay` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fruitPods` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fruitSpots` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fruitingBodies` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `germination` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hail` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `intDiscolor` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leafMalf` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leafMild` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leafShread` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leafSpotsHalo` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leafSpotsMarg` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leafSpotsSize` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leaves` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lodging` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moldGrowth` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `months` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mycelium` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plantGrowth` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plantStand` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precip` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roots` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sclerotia` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seedDiscolor` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seedTmt` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `severity` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stem` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stemCanker` to the `Desases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temps` to the `Desases` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Desases" (
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
INSERT INTO "new_Desases" ("damagedArea", "id") SELECT "damagedArea", "id" FROM "Desases";
DROP TABLE "Desases";
ALTER TABLE "new_Desases" RENAME TO "Desases";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
