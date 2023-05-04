import { z } from "zod";
export const UpdateMotoboy = z.object({
  name: z.string().min(3, "O nome é obrigatório"),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Forneça um e-mail válido"),
  telefone: z.string().min(11, "Pelo menos onze dígitos"),
  CNH: z.string().min(9, "Pelo menos nove dígitos"),
  plate: z.string().min(7, "Pelo menos sete dígitos"),
});
