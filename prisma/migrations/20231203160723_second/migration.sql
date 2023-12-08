/*
  Warnings:

  - You are about to alter the column `damagedArea` on the `Desases` table. The data in that column could be lost. The data in that column will be cast from `String` to `Decimal`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Desases" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desaseName" TEXT,
    "damagedArea" DECIMAL NOT NULL
);
INSERT INTO "new_Desases" ("damagedArea", "desaseName", "id") SELECT "damagedArea", "desaseName", "id" FROM "Desases";
DROP TABLE "Desases";
ALTER TABLE "new_Desases" RENAME TO "Desases";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
