import { Controller, FieldError, UseControllerProps } from 'react-hook-form';
import { TextField } from '@mui/material';
import { ReservationInterface } from '@/interfaces/reservation';

interface InputProps extends UseControllerProps<ReservationInterface> {
  error?: FieldError;
  label?: string;
  type?: string;
}

const Input = ({ name, control, error, ...props }: InputProps) => {
  return (
    <div className='relative'>
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          <TextField
            className='w-full'
            {...field}
            {...props}
            error={!!error}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-error fieldset': {
                  borderColor: error ? "#ef4444" : "",
                },
              },
            }}
          />
        }
      />
      {error && <p className='text-red-500 text-sm'>{error.message}</p>}
    </div>
  );
};

export default Input;
