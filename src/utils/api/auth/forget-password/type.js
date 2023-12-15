import * as z from "zod";

export const ForgetPasswordSchema = z.object({
    email: z.string().min(1, { message: "Email tidak boleh kosong" }).email({ message: "Penggunaan email tidak valid" }),
});

export const ConfirmationPassword = z
    .object({
        password: z.string().min(1, { message: "Password tidak boleh kosong" }).min(8, { message: "Password minimal 8 karakter" }),
        repassword: z.string().min(1, { message: "Konfirmasi Password tidak boleh kosong" }).min(8, { message: "Konfirmasi Password minimal 8 karakter" })
    })
    .refine((data) => data.password === data.repassword, {
        message: "Password dan Konfirmasi Password harus sama",
        path: ["repassword"],
    });