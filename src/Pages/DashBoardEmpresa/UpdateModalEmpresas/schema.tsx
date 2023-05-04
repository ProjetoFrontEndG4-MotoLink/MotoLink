import { z } from "zod";

export const UpdateEmpresas = z.object({
  name: z.string().min(3, "O nome é obrigatório"),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Forneça um e-mail válido"),
  telefone: z.string().min(11, "Pelo menos onze dígitos"),
  setor: z.string().min(1, "Campo obrigatório"),
});
