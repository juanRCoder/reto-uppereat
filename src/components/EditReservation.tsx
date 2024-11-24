import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';
import { bgStatus } from '@/utils/bgStatus';

interface EditReservationProps {
  setStatus: (status: string) => void;
  setOpen: (open: boolean) => void;
  name: string;
  date: string;
  time: string;
  id: string
  status: string;
}

export default function EditReservation({ setStatus, setOpen, name, date, time, id, status }: EditReservationProps) {
  const [value, setValue] = useState<string>("");

  // Llamar a setStatus cuando el valor cambie
  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    setStatus(newValue); // Actualizar el estado del status
  };

  // Función para manejar clics fuera del modal
  const handleOutsideClick = (event: React.MouseEvent) => {
    const modal = event.target as HTMLElement;
    if (modal.id === 'modal-container') {
      setOpen(false); // Cierra el modal si se hace clic fuera del contenido
    }
  };

  return (
    <section
      id="modal-container"
      onClick={handleOutsideClick}
      className="min-h-screen w-full fixed top-0 left-0 grid place-items-center bg-black/40 z-50"
    >
      <Box 
        className="bg-slate-50 w-96 relative overflow-hidden pt-5"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className='px-5 text-xl'>Editar estado de: {name}</h1>
        <span className={`w-24 h-24 pt-8 pr-6 rounded-full absolute -right-8 -top-10 flex items-center justify-center ${bgStatus(value || status)}`}>
          <p className="text-white text-2xl">#{id}</p>
        </span>
        <div className='flex gap-5 mt-1 mb-4 text-sm text-zinc-500 px-5'>
          <p>{date}</p>
          <p>{time} hrs</p>
        </div>
        <BottomNavigation
          className='bg-slate-50 w-full'
          showLabels
          value={value}
          onChange={(event, newValue) => handleValueChange(newValue)}
        >
          <BottomNavigationAction className='bg-amber-500 text-white' label="pendiente" value="pending" />
          <BottomNavigationAction className='bg-blue-500 text-white' label="confirmada" value="confirm" />
          <BottomNavigationAction className='bg-red-500 text-white' label="cancelada" value="canceled" />
          <BottomNavigationAction className='bg-emerald-500 text-white' label="completada" value="completed" />
        </BottomNavigation>
      </Box>
    </section>
  );
}
