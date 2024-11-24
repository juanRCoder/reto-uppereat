import { ReservationInterface } from "@/interfaces/reservation";

export const getReservation = async () => {
  try {
    const response = await fetch("/api/reservations");
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


export const updateReservation = async (status: string, id: string) => {
  try {
    const response = await fetch(`/api/reservations/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({status}),
      headers: {'Content-Type': 'application/json'}
    })
    if (!response.ok) {
		  throw new Error ('Error en la solicitud');
	   }
    const reservation = await response.json()
    return reservation.confirm

  } catch(error) {
    console.error("Error al actualizar la reservacion: " + error)
  }
}


export const deleteReservation = async (id:  string) => {
  try {
    const response = await fetch(`/api/reservations/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
		  throw new Error ('Error en la solicitud');
	   }
    const reservation = await response.json()
    return reservation.confirm

  } catch(error) {
    console.error("Error al eliminar la reservacion: " + error)
  }
}