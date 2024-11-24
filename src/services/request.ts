import { ReservationInterface } from "@/interfaces/reservation";

export const getReservation = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/reservations");
    if (!response.ok) {
		  throw new Error ('Error en la solicitud');
	   }
    const reservation = await response.json()
    return reservation.data
    
  } catch(error) {
    console.error("Error al obtener las reservaciones: " + error)
  }
}


export const createReservation = async (data: ReservationInterface) => {
  try {
    const response = await fetch("/api/reservations", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    })
    if (!response.ok) {
		  throw new Error ('Error en la solicitud');
	   }
    const reservation = await response.json()
    return reservation.confirm

  } catch(error) {
    console.error("Error al crear la reservacion: " + error)
  }
}