export const bgStatus = (status: string) => {
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
      return "bg-gray-600";
  }
};


export const textStatus = (status: string) => {
  switch (status) {
    case "pending":
      return "pendiente";
    case "confirm":
      return "confirmada";
    case "canceled":
      return "cancelada";
    case "completed":
      return "completada";
  }
};