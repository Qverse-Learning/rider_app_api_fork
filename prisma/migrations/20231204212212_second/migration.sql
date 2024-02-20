/*
  Warnings:

  - A unique constraint covering the columns `[nin]` on the table `Rider_credentials` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[driver_license]` on the table `Rider_credentials` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[plate_number]` on the table `Rider_credentials` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Rider_credentials_nin_key" ON "Rider_credentials"("nin");

-- CreateIndex
CREATE UNIQUE INDEX "Rider_credentials_driver_license_key" ON "Rider_credentials"("driver_license");

-- CreateIndex
CREATE UNIQUE INDEX "Rider_credentials_plate_number_key" ON "Rider_credentials"("plate_number");
