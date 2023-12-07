import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const volunterSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Kolom judul lowongan relawan harus diisi" })
    .min(20, { message: "Judul lowongan relawan minimal 20 karakter" }),
  description: z
    .string()
    .min(1, { message: "Kolom deskripsi lowongan relawan harus diisi" })
    .min(50, {
      message: " Kolom deskripsi lowongan relawan minimal 50 karakter",
    }),
  skills_required: z.string().array().nonempty({ message: "Kolom keahlian harus diisi" }),
  number_of_vacancies: z.number({
    invalid_type_error: "Kolom jumlah lowongan relawan harus diisi",
  }),
  contact_email: z
    .string()
    .min(1, { message: "Kolom alamat email harus diisi" })
    .email({ message: "Alamat email tidak valid. Mohon periksa kembali." }),
  application_deadline: z.date({
    required_error: "Kolom tanggal selesai lowongan relawan harus diisi",
    invalid_type_error: "Kolom tanggal selesai lowongan relawan harus diisi",
  }),
  province: z.string().min(1, { message: "Kolom provinsi harus diisi" }),
  city: z.string().min(1, { message: "Kolom kabupaten/kota harus diisi" }),
  sub_district: z.string().min(1, { message: "Kolom kecamatan harus diisi" }),
  detail_location: z.string().min(1, { message: "Kolom kelurahan/desa harus diisi" }),
  photo: z
    .any()
    .refine((file) => !!file, { message: "Kolom foto lowongan relawan harus diisi" })
    .refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: "Ukuran gambar maksimal 5MB",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
      message: "Format gambar harus .jpg, .png, .jpeg",
    }),
});

export const editVolunterSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Kolom judul lowongan relawan harus diisi" })
    .min(20, { message: "Judul lowongan relawan minimal 20 karakter" }),
  description: z
    .string()
    .min(1, { message: "Kolom deskripsi lowongan relawan harus diisi" })
    .min(20, {
      message: "Kolom deskripsi lowongan relawan minimal 50 karakter",
    }),
  skills_required: z.string().array().nonempty({ message: "Kolom keahlian harus diisi" }),
  number_of_vacancies: z.number({
    invalid_type_error: "Kolom jumlah lowongan relawan harus diisi",
  }),
  contact_email: z
    .string()
    .min(1, { message: "Kolom alamat email harus diisi" })
    .email({ message: "Alamat email tidak valid. Mohon periksa kembali." }),
  application_deadline: z.date({
    required_error: "Kolom tanggal selesai lowongan relawan harus diisi",
    invalid_type_error: "Kolom tanggal selesai lowongan relawan harus diisi",
  }),
  province: z.string().min(1, { message: "Kolom provinsi harus diisi" }),
  city: z.string().min(1, { message: "Kolom kabupaten/kota harus diisi" }),
  sub_district: z.string().min(1, { message: "Kolom kecamatan harus diisi" }),
  detail_location: z.string().min(1, { message: "Kolom kelurahan/desa harus diisi" }),
  photo: z.any(),
});
