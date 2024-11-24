"use server"
import CardReservation from "@/components/CardReservation";
import { ReservationInterface } from "@/interfaces/reservation";
import { getReservation } from "@/services/request";
import { Button } from "@mui/material";
import Link from "next/link";

export default async function Home() {
  const reservations: ReservationInterface[] = await getReservation();

  return (
    <>
      <h1 className="pt-4 text-center text-3xl">Reservaciones</h1>
      <div className="max-w-3xl mx-2 sm:mx-auto my-5">
        <Button variant="contained" color="primary" className="w-full py-2">
          <Link href={'/create'}>
            Crear Reservacion
          </Link>
        </Button>
      </div>
      <hr />
      <section className="max-w-3xl mx-2 md:mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {reservations.map((rsv: ReservationInterface) => (
          <CardReservation key={rsv.id} rsv={rsv} /> // Pasamos el objeto rsv como prop
        ))}
      </section>
    </>
  );
}
