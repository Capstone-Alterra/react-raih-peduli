import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const customerSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Kolom email wajib diisi" })
    .email({ message: "Format email tidak valid" }),
  fullname: z
    .string()
    .min(1, { message: "Kolom Nama Lengkap harus diisi" })
    .regex(/^[a-zA-Z\s]+$/, { message: "Nama lengkap harus alfabet" }),
  address: z.string().min(1, { message: "Kolom Alamat harus diisi" }),
  phone_number: z
    .string()
    .min(1, { message: "Kolom No. Handphone harus diisi" })
    .min(10, { message: "Kolom No. Handphone minimal 10 karakter" })
    .max(13, { message: "Kolom No. Handphone maksimal 13 karakter" })
    .regex(/^\d+$/, { message: "Kolom harus berisi angka" }),
  gender: z.string().min(1, { message: "Kolom Jenis Kelamin harus diisi" }),
  profile_picture: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, { message: "Ukuran gambar maksimal 5MB" })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
      message: "Format gambar harus .jpg, .png, .jpeg",
    })
    .optional(),
});
