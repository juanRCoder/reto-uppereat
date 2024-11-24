"use client"
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';
import { updateReservation } from '@/services/request';
import { Button } from '@mui/material';

interface EditReservationProps {
  setStatus: (status: string) => void;
  setOpen: (open: boolean) => void;
  name: string;
  date: string;
  time: string;
  id: string
  status: string;
  onUpdate: () => void;
}

export default function EditReservation({ setStatus, setOpen, name, date, time, id, status, onUpdate }: EditReservationProps) {
  const [value, setValue] = useState<string>(status || "pending");

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    setStatus(newValue);
  };

  // Función para manejar clics fuera del modal
  const handleOutsideClick = (event: React.MouseEvent) => {
    const modal = event.target as HTMLElement;
    if (modal.id === 'modal-container') {
      setOpen(false);
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

  const handleUpdateReservation = async () => {
    const update = await updateReservation(value, id);  // 'value' es el nuevo estado
    if (update) {
      setOpen(false);
      onUpdate();
    }
  };

  return (
    <section
      id="modal-container"
      onClick={handleOutsideClick}
      className="min-h-screen w-full fixed top-0 left-0 grid place-items-center bg-black/40 z-50"
    >
      <Box 
        className="bg-slate-50 w-96 relative overflow-hidden pt-5 px-5"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className='text-xl'>Editar estado de: {name}</h1>
        <span className={`w-24 h-24 pt-8 pr-6 rounded-full absolute -right-8 -top-10 flex items-center justify-center ${bgStatus(value || status)}`}>
          <p className="text-white text-2xl">#{id}</p>
        </span>
        <div className='flex gap-5 mt-1 mb-4 text-sm text-zinc-500'>
          <p>{date}</p>
          <p>{time} hrs</p>
        </div>
        <BottomNavigation
          className='bg-slate-50 w-full pb-5'
          showLabels
          value={value}
          onChange={(event, newValue) => handleValueChange(newValue)}
        >
          <BottomNavigationAction 
           className='bg-amber-500 text-white' label="pendiente" value="pending" />
          <BottomNavigationAction 
           className='bg-blue-500 text-white' label="confirmada" value="confirm" />
          <BottomNavigationAction 
           className='bg-red-500 text-white' label="cancelada" value="canceled" />
          <BottomNavigationAction 
           className='bg-emerald-500 text-white' label="completada" value="completed" />
        </BottomNavigation>
        <Button 
          onClick={handleUpdateReservation}
          variant="contained"
          className='w-full mb-5'
        >
          Guardar
        </Button>
      </Box>
    </section>
  );
}
