import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email tidak boleh kosong" }).email({ message: "Format email tidak valid" }),
  password: z.string().min(1, { message: "Password tidak boleh kosong" }).min(8, { message: "Password minimal 8 karakter" }),
});
