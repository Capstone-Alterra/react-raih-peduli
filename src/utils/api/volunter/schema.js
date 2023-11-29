import * as z from "zod";

export const volunterSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Kolom judul lowongan relawan harus di isi" }),
  description: z.string().min(2, { message: "Kolom deskripsi harus di isi" }),
  skills_requred: z
    .string()
    .min(1, { message: "Harus memiliki keahlian salah satu bidang" }),
  number_of_vacancies: z
    .number()
    .min(1, { message: "Jumlah lowongan harus di isi" }),
  contact_email: z.string().min(2, { message: "Kontak email harus di isi" }),
  start_date: z.date({
    required_error: "Masukkan tanggal mulai penggalangan dana",
  }),
  end_date: z.date({
    required_error: "Masukkan tanggal berakhir penggalangan dana",
  }),
  provinces: z.string().min(2, { message: "Harus memilih provinsi" }),
  regencies: z.string().min(2, { message: "Harus memilih kabupaten" }),
  districts: z.string().min(2, { message: "Harus memilih kecamatan" }),
  villages: z.string().min(2, { message: "Harus memilih kelurahan" }),
});
