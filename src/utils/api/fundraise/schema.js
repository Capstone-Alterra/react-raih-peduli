import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const addFundraiseSchema = z
  .object({
    title: z
      .string()
      .min(1, { message: "Kolom judul penggalangan dana harus diisi" })
      .min(20, {
        message: "Judul penggalangan dana minimal 20 karakter",
      })
      .max(100, { message: "Judul penggalangan dana maksimal 100 karakter" }),
    description: z
      .string()
      .min(1, { message: "Kolom deskripsi penggalangan dana harus diisi" })
      .min(50, {
        message: "Deskripsi penggalangan dana minimal 50 karakter",
      })
      .max(500, { message: "Deskripsi penggalangan dana maksimal 500 karakter" }),
    target: z
      .number({ invalid_type_error: "Kolom target penggalangan dana harus diisi" })
      .min(100, {
        message: "Target penggalangan dana minimal 100 Rupiah",
      })
      .max(1000000000, { message: "Target penggalangan dana maksimal Rp 1 miliar" }),
    start_date: z.date({
      required_error: "Kolom tanggal mulai penggalangan dana harus diisi",
      invalid_type_error: "Kolom tanggal mulai penggalangan dana harus diisi",
    }),
    end_date: z.date({
      required_error: "Kolom tanggal berakhir penggalangan dana harus diisi",
      invalid_type_error: "Kolom tanggal berakhir penggalangan dana harus diisi",
    }),
    photo: z
      .any()
      .refine((file) => !!file, { message: "Kolom foto penggalangan dana harus diisi" })
      .refine((file) => file?.size <= MAX_FILE_SIZE, { message: "Ukuran gambar maksimal 5MB" })
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
        message: "Format gambar harus .jpg, .png, .jpeg",
      }),
  })
  .refine((data) => data.end_date > data.start_date, {
    message: "Tanggal selesai tidak boleh kurang dari tanggal mulai",
    path: ["end_date"],
  });

export const editFundraiseSchema = z
  .object({
    title: z
      .string()
      .min(1, { message: "Kolom judul penggalangan dana harus diisi" })
      .min(20, {
        message: "Judul penggalangan dana minimal 20 karakter",
      })
      .max(100, { message: "Judul penggalangan dana maksimal 100 karakter" }),
    description: z
      .string()
      .min(1, { message: "Kolom deskripsi penggalangan dana harus diisi" })
      .min(50, {
        message: "Deskripsi penggalangan dana minimal 50 karakter",
      })
      .max(500, { message: "Deskripsi penggalangan dana maksimal 500 karakter" }),
    target: z
      .number({ invalid_type_error: "Kolom target penggalangan dana harus diisi" })
      .min(100, {
        message: "Target penggalangan dana minimal 100 Rupiah",
      })
      .max(1000000000, { message: "Target penggalangan dana maksimal Rp 1 miliar" }),
    start_date: z.date({
      required_error: "Kolom tanggal mulai penggalangan dana harus diisi",
      invalid_type_error: "Kolom tanggal mulai penggalangan dana harus diisi",
    }),
    end_date: z.date({
      required_error: "Kolom tanggal berakhir penggalangan dana harus diisi",
      invalid_type_error: "Kolom tanggal berakhir penggalangan dana harus diisi",
    }),
    photo: z
      .any()
      .refine((file) => !!file, { message: "Kolom foto penggalangan dana harus diisi" })
      .refine((file) => file?.size <= MAX_FILE_SIZE, { message: "Ukuran gambar maksimal 5MB" })
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
        message: "Format gambar harus .jpg, .png, .jpeg",
      })
      .optional(),
  })
  .refine((data) => data.end_date > data.start_date, {
    message: "Tanggal selesai tidak boleh kurang dari tanggal mulai",
    path: ["end_date"],
  });
