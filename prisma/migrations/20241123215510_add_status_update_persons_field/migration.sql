/*
  Warnings:

  - Changed the type of `persons` on the `Reservations` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Reservations" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending',
DROP COLUMN "persons",
ADD COLUMN     "persons" INTEGER NOT NULL;
