/*
  Warnings:

  - You are about to drop the column `tipo` on the `projetos` table. All the data in the column will be lost.
  - Added the required column `link` to the `projetos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projetos" DROP COLUMN "tipo",
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "ordem" DECIMAL,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "tecnologias" ADD COLUMN     "cor" TEXT NOT NULL DEFAULT '#2b7fff';
