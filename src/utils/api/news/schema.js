import * as z from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const addNewsSchema = z.object({
  title: z.string().min(1, { message: "Kolom judul berita harus diisi" }).min(20, {
    message: "Kolom judul berita harus memiliki minimal 20 karakter",
  }),
  photo: z
    .any()
    .refine((file) => !!file, {
      message: "Kolom foto berita harus diisi",
    })
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Ukuran Gambar Maksimal 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Format gambar wajib JPG, JPEG, dan PNG"
    ),
  description: z.string().min(1, { message: "Kolom deskripsi berita harus diisi" }).min(50, {
    message: "Kolom deskripsi berita harus memiliki minimal 50 karakter",
  }),
});

export const editNewsSchema = z.object({
  title: z.string().min(1, { message: "Kolom judul berita harus diisi" }).min(20, {
    message: "Kolom judul berita harus memiliki minimal 20 karakter",
  }),
  photo: z
    .any()
    .refine((file) => !!file, {
      message: "Kolom foto berita harus diisi",
    })
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Ukuran Gambar Maksimal 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Format gambar wajib JPG, JPEG, dan PNG"
    )
    .optional(),
  description: z.string().min(1, { message: "Kolom deskripsi berita harus diisi" }).min(50, {
    message: "Kolom deskripsi berita harus memiliki minimal 50 karakter",
  }),
});
