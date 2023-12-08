import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const addFundraiseSchema = z
  .object({
    title: z.string().min(1, { message: "Kolom harus diisi" }).min(20, {
      message: "Judul minimal 20 karakter",
    }),
    description: z.string().min(1, { message: "Kolom harus diisi" }).min(50, {
      message: "Deskripsi minimal 50 karakter",
    }),
    target: z.number({ invalid_type_error: "Kolom harus diisi" }).min(100, {
      message: "Target minimal 100 Rupiah",
    }),
    start_date: z.date({
      required_error: "Kolom harus diisi",
      invalid_type_error: "Kolom harus diisi",
    }),
    end_date: z.date({
      required_error: "Kolom harus diisi",
      invalid_type_error: "Kolom harus diisi",
    }),
    photo: z
      .any()
      .refine((file) => !!file, { message: "Kolom harus diisi" })
      .refine((file) => file?.size <= MAX_FILE_SIZE, { message: "Ukuran gambar maksimal 5MB" })
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
        message: "Format gambar harus .jpg, .png, .jpeg",
      }),
  })
  .refine((data) => data.end_date > data.start_date, {
    message: "Tanggal selesai tidak boleh kurang dari tanggal mulai",
    path: ["end_date"],
  });

export const editFundraiseSchema = z.object({
  title: z.string().min(1, { message: "Kolom harus diisi" }).min(20, {
    message: "Judul minimal 20 karakter",
  }),
  description: z.string().min(1, { message: "Kolom harus diisi" }).min(50, {
    message: "Deskripsi minimal 50 karakter",
  }),
  target: z.number({ invalid_type_error: "Kolom harus diisi" }).min(100, {
    message: "Target minimal 100 Rupiah",
  }),
  start_date: z.date({
    required_error: "Kolom harus diisi",
    invalid_type_error: "Kolom harus diisi",
  }),
  end_date: z.date({
    required_error: "Kolom harus diisi",
    invalid_type_error: "Kolom harus diisi",
  }),
});
