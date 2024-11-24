import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET() {
  try {
    // Listado de todas las reservas
    const reservations = await prisma.reservations.findMany({
      orderBy: [
        { date: 'asc' },
        { time: 'asc' },
      ],
    });
    console.log(reservations[0].date) // "2024-11-24"
    console.log(reservations[0].time) // "18:43"
    return NextResponse.json({
      message: "Obtener Reservaciones",
      data: reservations
    })
  }
  catch(error) {
    console.error("Error al obtener todas las reservaciones: " + error)
  }
}


export async function POST(request: Request) {
  const {name, persons, date, time} = await request.json();
  const quantity  = Number(persons);
  try {
    // Creando una nueva reserva
    const newReservation = await prisma.reservations.create({
      data: {
        name,
        persons: quantity,
        date,
        time
      }
    })
    return NextResponse.json({
      message: "Reservacion creada",
      confirm: true,
      data: newReservation
    })
  }
  catch(error) {
    console.error("Error al crear una nueva reservacion: " + error)
  }
  return NextResponse.json("Creando Reservas");
}
