-- CreateTable
CREATE TABLE "Reservations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "persons" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservations_pkey" PRIMARY KEY ("id")
);
