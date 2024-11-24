"use client"
import { ArrowLeft } from 'lucide-react';
import { Button } from "@mui/material";
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { ReservationInterface } from '@/interfaces/reservation';
import Input from '@/components/Input';
import { registerSchema, schema } from '@/validations/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { createReservation } from '@/services/request';
import { useRouter } from 'next/navigation'

export default function Create() {
  const router = useRouter()

  const { handleSubmit, control, formState: { errors } } = useForm<schema>({
    defaultValues: {
      name: "",
      persons: "",
      date: "",
      time: ""
    },
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  
  const onSubmit = async (data: ReservationInterface) => {
    const create = await createReservation(data);
    if (create) {
      router.push('/')
    }
  };


  return (
    <section className='max-w-3xl mx-2 md:mx-auto'>

      <div className='flex justify-between items-center'>
        <Link href={'/'}>
          <ArrowLeft className='cursor-pointer' />
        </Link>
        <h1 className="py-4 text-center text-3xl">Crear Reserva</h1>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          name='name'
          label='Nombre Cliente'
          control={control}
          error={errors.name}
        />
        <Input
          type='number'
          name='persons'
          label="Número de personas"
          control={control}
          error={errors.persons}
        />
        <Input
          type='date'
          name='date'
          control={control}
          error={errors.date}
        />
        <Input
          type='time'
          name='time'
          control={control}
          error={errors.time}
        />
        <Button type="submit" variant='contained' className='py-2'>
          Reservar
        </Button>
      </form>
    </section>
  )
}
