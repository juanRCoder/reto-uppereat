"use client"
import { ReservationInterface } from '@/interfaces/reservation';
import { User } from 'lucide-react';
import { useState } from 'react';
import EditReservation from './EditReservation';
import { bgStatus } from '@/utils/bgStatus';
import { Button } from '@mui/material';
import { textStatus } from '@/utils/status';

interface CardReservationProps {
  rsv: ReservationInterface;
}

export default function CardReservation({ rsv }: CardReservationProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <article
        className="bg-white outline outline-1 outline-slate-200 pt-4 relative overflow-hidden cursor-pointer select-none"
      >
        <span className={`w-24 h-24 pt-10 pr-4 rounded-full absolute -right-7 -top-12 flex items-center justify-center ${bgStatus(rsv.status || "pending")}`}>
          <p className="text-white text-2xl">#{rsv.id}</p>
        </span>
        <header className="flex items-center gap-1 px-5">
          <User />
          <h1 className="font-bold text-3xl">{rsv.name}</h1>
        </header>
        <section className="gap-1 grid grid-cols-2 text-sm text-zinc-500 leading-6 py-3 px-5 pr-32">
          <p className="font-bold text-left">Personas:</p>
          <p>{rsv.persons}</p>
          <p className="font-bold text-left">Fecha:</p>
          <p>{rsv.date}</p>
          <p className="font-bold text-left">Hora:</p>
          <p>{rsv.time} hrs</p>
        </section>
        <div className='absolute right-2 bottom-12 flex flex-col gap-2'>
          <Button
            variant="contained"
            className='border bg-red-500 text-sm'
            onClick={() => alert(`ELIMINADO ${rsv.name}`)}
          >Eliminar</Button>
          <Button
            variant="contained"
            className='border border-red-500 text-sm'
            onClick={handleOpen}
          >Editar</Button>
        </div>
        <footer className={`p-1 px-3 shadow-inner text-white text-center ${bgStatus(rsv.status || "pending")}`}>
          {textStatus(rsv.status || "pending")}
        </footer>
      </article>
      {
        open && (
          <EditReservation
            setStatus={(status) => console.log(status)}
            setOpen={setOpen}
            name={rsv.name}
            date={rsv.date}
            time={rsv.time}
            status={rsv.status || "pending"}
            id={rsv.id || "0"}
          />
        )
      }
    </>
  );
}
