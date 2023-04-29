import { z } from "zod";

export const SchemaMotoboy = z
  .object({
    name: z.string().min(3, "O nome é obrigatório"),
    email: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .email("Forneça um e-mail válido"),

    password: z
      .string()
      .min(8, "A senha precisa de pelo menos 8 caracteres.")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra")
      .regex(/(?=.*[0-9])/, "É necessário pelo menos um número")
      .regex(/(?=.*[$*&@#!])/, "É necessário pelo menos um caracter especial"),

    confirmPassword: z.string().min(1, "Confirme sua senha"),

    CNH: z.string().min(9, "Pelo menos nove dígitos "),
    plate: z.string().min(7, "Pelo menos sete dígitos"),
    userType: z.string().min(1, "Campo obrigatório"),
  })
  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
