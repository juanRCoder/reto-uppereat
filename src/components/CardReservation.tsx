"use client"
import { ReservationInterface } from '@/interfaces/reservation';
import { User } from 'lucide-react';
import { useState } from 'react';
import EditReservation from './EditReservation';
import { Button } from '@mui/material';
import { deleteReservation } from '@/services/request';

const defaultReservation = {
  id: "0",
  name: "Desconocido",
  persons: "0",
  date: "Sin fecha",
  time: "Sin hora",
  status: "pending",
};

interface CardReservationProps {
  reservation: ReservationInterface;
  onUpdate: () => void
}

export default function CardReservation({ reservation = defaultReservation, onUpdate }: CardReservationProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const textStatus = (status: string) => {
    switch (status) {
      case "pending":
        return "pendiente";
      case "confirm":
        return "confirmada";
      case "canceled":
        return "cancelada";
      case "completed":
        return "completada";
      default:
        return "pending"
    }
  };
  const bgStatus = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-amber-600";
      case "confirm":
        return "bg-blue-600";
      case "canceled":
        return "bg-red-600";
      case "completed":
        return "bg-emerald-600";
      default:
        return "bg-amber-600";
    }
  };


  return (
    <>
      <article
        className="bg-white outline outline-1 outline-slate-200 pt-4 relative overflow-hidden select-none"
      >
        <span className={`w-24 h-24 pt-10 pr-4 rounded-full absolute -right-7 -top-12 flex items-center justify-center ${bgStatus(reservation.status || "pending")}`}>
          <p className="text-white text-2xl">#{reservation.id}</p>
        </span>
        <header className="flex items-center gap-1 px-5">
          <User />
          <h1 className="font-bold text-3xl">{reservation.name}</h1>
        </header>
        <section className="gap-1 grid grid-cols-2 text-sm text-zinc-500 leading-6 py-3 px-5 pr-32">
          <p className="font-bold text-left">Personas:</p>
          <p>{reservation.persons}</p>
          <p className="font-bold text-left">Fecha:</p>
          <p>{reservation.date}</p>
          <p className="font-bold text-left">Hora:</p>
          <p>{reservation.time} hrs</p>
        </section>
        <div className='absolute right-2 bottom-12 flex flex-col gap-2'>
          <Button
            variant="contained"
            className='border bg-red-500 text-sm'
            onClick={async ()=>{
              if (reservation.id) {
                await deleteReservation(reservation.id) 
                onUpdate()
              }
            }}
          >
            Eliminar
          </Button>
          <Button
            variant="contained"
            className='border border-red-500 text-sm'
            onClick={handleOpen}
          >Editar</Button>
      </div>
      <footer className={`p-1 px-3 shadow-inner text-white text-center ${bgStatus(reservation.status || "pending")}`}>
        {textStatus(reservation.status || "pending")}
      </footer>
    </article >
    {
      open && (
        <EditReservation
          setStatus={(status) => console.log(status)}
          setOpen={setOpen}
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          status={reservation.status || "pending"}
          id={reservation.id || "0"}
          onUpdate={onUpdate}
        />
      )
}
    </>
  );
}
