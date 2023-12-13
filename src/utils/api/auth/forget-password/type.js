import * as z from "zod";

export const ForgetPasswordSchema = z.object({
    email: z.string().min(1, { message: "Email tidak boleh kosong" }).email({ message: "Penggunaan email tidak valid" }),
});