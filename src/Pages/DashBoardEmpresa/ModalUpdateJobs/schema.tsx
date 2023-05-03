import { z } from "zod";

export const UpdateJobSchema = z.object({
  local: z.string().nonempty("O endereço é obrigatório"),

  price: z.string().nonempty("A taxa é obrigatória"),
});
