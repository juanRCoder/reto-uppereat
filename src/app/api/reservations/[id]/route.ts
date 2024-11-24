import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

// PATCH
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await req.json();
    const { id } = params;

    // Asegurarse de que el 'id' sea un número
    const updateReservations = await prisma.reservations.update({
      where: { id: Number(id) },
      data: { status },
    });

    return NextResponse.json({
      message: `Reserva Actualizada: ${id}`,
      confirm: true,
      data: updateReservations,
    });
  } catch (error) {
    console.error("Error al actualizar la reserva: ", error);
    return NextResponse.json({
      message: "Error al actualizar la reserva",
      confirm: false,
    });
  }
}

// DELETE
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    await prisma.reservations.delete({ where: { id: Number(id) } });
    return NextResponse.json({
      message: `Reserva eliminada: ${id}`,
      confirm: true,
    });
  } catch (error) {
    console.error("Error al eliminar la reserva: ", error);
    return NextResponse.json({
      message: "Error al eliminar la reserva",
      confirm: false,
    });
  }
}
