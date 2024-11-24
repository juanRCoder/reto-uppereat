import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, { message: "Campo Obligatorio!"}),
  persons: z.string().min(1, { message: "Campo Obligatorio!"}),
  date: z.string().min(1, { message: "Campo Obligatorio!"}),
  time: z.string().min(1, { message: "Campo Obligatorio!"}),
});

export type schema = z.infer<typeof registerSchema>;