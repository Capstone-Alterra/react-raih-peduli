import * as z from 'zod';

export const loginSchema = z.object({
    email: z.string().min(1, { message: "Email tidak boleh kosong" }).email({ message: "Penggunaan email tidak valid" }),
    password: z.string().min(1, { message: "Password tidak boleh kosong" })
})