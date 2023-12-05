import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const volunterSchema = z
  .object({
    title: z.string().min(2, { message: "Kolom judul lowongan relawan harus di isi" }),
    description: z.string().min(2, { message: "Kolom deskripsi harus di isi" }),
    skills_requred: z.string().min(1, { message: "Harus memiliki keahlian salah satu bidang" }),
    number_of_vacancies: z
      .number({ invalid_type_error: "Kolom harus di isi" })
      .min(10, { message: "Jumlah lowongan relawan minimal 10 orang" }),
    contact_email: z.string().min(2, { message: "Kontak email harus di isi" }),
    start_date: z.date({
      required_error: "Kolom harus di isi",
      invalid_type_error: "Kolom harus di isi",
    }),
    end_date: z.date({
      required_error: "Kolom harus di isi",
      invalid_type_error: "Kolom harus di isi",
    }),
    province: z.string().min(1, { message: "Harus memilih provinsi" }),
    city: z.string().min(1, { message: "Harus memilih kabupaten" }),
    sub_district: z.string().min(1, { message: "Harus memilih kecamatan" }),
    detail_location: z.string().min(1, { message: "Harus memilih kelurahan" }),
    photo: z
      .any()
      .refine((file) => !!file, { message: "Kolom harus di isi" })
      .refine((file) => file?.size <= MAX_FILE_SIZE, {
        message: "Ukuran gambar maksimal 5MB",
      })
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
        message: "Format gambar harus .jpg, .png, .jpeg",
      }),
  })
  .refine((data) => data.end_date > data.start_date, {
    message: "Tanggal selesai tidak boleh kurang dari tanggal mulai",
    path: ["end_date"],
  });

export const editVolunterSchema = z.object({
  title: z.string().min(2, { message: "Kolom judul lowongan relawan harus di isi" }),
  description: z.string().min(2, { message: "Kolom deskripsi harus di isi" }),
  skills_requred: z.string().min(1, { message: "Harus memiliki keahlian salah satu bidang" }),
  number_of_vacancies: z
    .number({ invalid_type_error: "Kolom harus di isi" })
    .min(10, { message: "Jumlah lowongan relawan minimal 10 orang" }),
  contact_email: z.string().min(2, { message: "Kontak email harus di isi" }),
  start_date: z.date({
    required_error: "Kolom harus di isi",
    invalid_type_error: "Kolom harus di isi",
  }),
  end_date: z.date({
    required_error: "Kolom harus di isi",
    invalid_type_error: "Kolom harus di isi",
  }),
  province: z.string().min(1, { message: "Harus memilih provinsi" }),
  city: z.string().min(2, { message: "Harus memilih kabupaten" }),
  sub_district: z.string().min(2, { message: "Harus memilih kecamatan" }),
  detail_location: z.string().min(2, { message: "Harus memilih kelurahan" }),
});
