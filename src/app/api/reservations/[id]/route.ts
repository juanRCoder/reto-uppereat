import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { status } = await req.json();
    const { id } = context.params;

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

export async function DELETE(request: Request, {params}: {params: { id: string }}) {

  try {
    await prisma.reservations.deleteMany({ where: { id: Number(params.id) } });
    return NextResponse.json({
      message: `Reserva eliminada: ${params.id}`,
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
