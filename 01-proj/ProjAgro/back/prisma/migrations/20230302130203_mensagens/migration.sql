/*
  Warnings:

  - Added the required column `estado` to the `Veiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ultimaManutencao` to the `Veiculo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `veiculo` ADD COLUMN `estado` VARCHAR(191) NOT NULL,
    ADD COLUMN `ultimaManutencao` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `Mensagens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mensagem` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
