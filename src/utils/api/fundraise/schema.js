import * as z from "zod";

export const fundraiseSchema = z.object({
  title: z.string().min(2, {
    message: "Kolom judul penggalangan dana harus diisi",
  }),
  description: z.string().min(2, {
    message: "Kolom deskripsi penggalangan dana harus diisi",
  }),
  target: z.number({ invalid_type_error: "Kolom target penggalangan dana harus diisi" }).min(2, {
    message: "Kolom target penggalangan dana harus diisi",
  }),
  start_date: z.date({
    required_error: "Masukkan tanggal mulai penggalangan dana",
    invalid_type_error: "Masukkan tanggal berakhir penggalangan dana",
  }),
  end_date: z.date({
    required_error: "Masukkan tanggal berakhir penggalangan dana",
    invalid_type_error: "Masukkan tanggal berakhir penggalangan dana",
  }),
  photo: z.any(),

  // TODO: Create image validation
  // NOTE: Wait confirmation from backend for validation schema
});
