import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const volunteerSchema = z.object({
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
  skills_required: z.any().array().nonempty({ message: "Kolom keahlian harus diisi" }),
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
  city: z.string().min(2, { message: "Kolom kabupaten/kota harus diisi" }),
  sub_district: z.string().min(1, { message: "Kolom kecamatan harus diisi" }),
  detail_location: z.string().min(1, { message: "Kolom lokasi detail harus diisi" }),
  photo: z
    .any()
    .refine((file) => !!file, {
      message: "Kolom foto lowongan relawan harus diisi",
    })
    .refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: "Ukuran gambar maksimal 5MB",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
      message: "Format gambar harus .jpg, .png, .jpeg",
    }),
});

export const editVolunteerSchema = z.object({
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
  skills_required: z.any().array().nonempty({ message: "Kolom keahlian harus diisi" }),
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
  detail_location: z.string().min(1, { message: "Kolom lokasi detail harus diisi" }),
  photo: z
    .any()
    .refine((file) => !!file, "Kolom foto lowongan relawan harus diisi")
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Ukuran gambar maksimal 5MB")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Format gambar harus .jpg, .png, .jpeg"
    )
    .optional()
    .or(z.literal("")),
});

export const registrantVolunterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Kolom alamat email harus diisi" })
    .email({ message: "Alamat email tidak valid. Mohon periksa kembali." }),
  fullname: z
    .string()
    .min(1, { message: "Kolom nama lengkap harus diisi" })
    .min(10, { message: "Nama Lengkap minimal 10 karakter" }),
  address: z.string().min(1, { message: "Kolom alamat harus diisi" }).min(20, {
    message: "Kolom alamat minimal 20 karakter",
  }),
  phone_number: z.string().min(12, { message: "Harus memiliki nomor handphone" }),
  gender: z.string().min(1, { message: "Harus pilih jenis kelamin" }),
  nik: z
    .string()
    .min(1, { message: "Kolom NIK harus diisi" })
    .min(20, { message: "Standart NIK berjumlah 20" }),
  skills_required: z.string().array().nonempty({ message: "Kolom keahlian harus diisi" }),
  resume: z.string().min(1, { message: "Kolom resume harus diisi" }).min(20, {
    message: "Kolom resume minimal 20 karakter",
  }),
  reason: z.string().min(1, { message: "Kolom alasan harus diisi" }).min(20, {
    message: "Kolom alasan minimal 20 karakter",
  }),
  photo: z
    .any()
    .refine((file) => !!file, { message: "Kolom pas foto harus diisi" })
    .refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: "Ukuran gambar maksimal 5MB",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
      message: "Format gambar harus .jpg, .png, .jpeg",
    }),
});
