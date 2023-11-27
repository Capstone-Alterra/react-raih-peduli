import * as z from "zod";

export const newsSchema = z.object({
  title: z.string().min(2, {
    message: "Kolom judul berita harus diisi",
  }),
  photo: z.any(),
  description: z.string().min(2, {
    message: "Kolom deskripsi berita harus diisi",
  }),

  // TODO: Create image validation
  // NOTE: Wait confirmation from backend for validation schema
});