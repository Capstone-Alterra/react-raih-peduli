import * as z from "zod";

export const fundraiseSchema = z.object({
  title: z.string().min(2, {
    message: "Kolom judul penggalangan dana harus diisi",
  }),
  description: z.string().min(2, {
    message: "Kolom deskripsi penggalangan dana harus diisi",
  }),
  target: z.any(),
  start_date: z.date({
    required_error: "Masukkan tanggal mulai penggalangan dana",
  }),
  end_date: z.date({
    required_error: "Masukkan tanggal berakhir penggalangan dana",
  }),
});
