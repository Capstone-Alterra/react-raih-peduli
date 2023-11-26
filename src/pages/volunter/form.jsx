import { TextAreaLabel } from "@/components/textarea-with-label";
import { InputLabel } from "@/components/input-with-label";
import { Calendar as CalendarIcon } from "lucide-react";
import ArrowLeft from "@/assets/icons/arrow-left";
import { Calendar } from "@/components/ui/calendar";
import InputFile from "@/components/input-file";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import Header from "@/components/header";
import Layout from "@/components/layout";
import React, { useState } from "react";
import { cn } from "@/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Select from "react-select";

function VolunterForm() {
  const navigate = useNavigate();
  const [date, setDate] = useState(undefined);

  const handleBack = () => {
    navigate(-1);
  };

  const options = [
    { value: "pendidikan", label: "Pendidikan", color: "#293066" },
    { value: "komunikasi", label: "Komunikasi", color: "#293066" },
    { value: "tekonologi", label: "Teknologi", color: "#293066" },
  ];

  const customStyles = {
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
        padding: "3px",
        borderRadius: "30px",
      };
    },
    multiValueLabel: (styles) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
    control: (styles) => ({
      ...styles,
      padding: "1px",
      borderColor: "#E4E6FC",
    }),
  };

  return (
    <Layout>
      <Header titleHeader="Lowongan Relawan" />
      <div className="rounded shadow my-5">
        <div className="rounded-t border-y-2">
          <p
            className="p-3 font-bold flex flex-row items-center cursor-pointer"
            onClick={handleBack}
          >
            <img src={ArrowLeft} alt="Back Icon" className="w-4 h-4" id="btn-back" />
            Tambah Lowongan Relawan
          </p>
        </div>
        <div>
          <div className="px-6 pt-[18px]">
            <InputLabel
              label="Judul Volunter Vacancies"
              type="text"
              id="judul-volunter"
              placeholder="Relawan Pengajar - Program Pendidikan Anak"
            />
          </div>
          <div className="px-6">
            <TextAreaLabel
              label="Isi Deskripsi"
              name="deskripsi"
              id="deskripsi-volunter"
              placeholder="Membantu dalam mengajar dan membimbing anak-anak untuk meningkatkan pendidikan mereka."
            />
          </div>
          <div className="px-6 ">
            <p className="font-semibold mb-2">Keahlian</p>
            <Select
              className="mt-2"
              placeholder="Tambah Keahlian"
              options={options}
              isMulti
              styles={customStyles}
            />
          </div>
          <div className="flex flex-row gap-5 px-6 mt-4">
            <div className="w-full">
              <InputLabel
                label="Number of Vacancies"
                type="number"
                id="slot-volunter"
                placeholder="50"
              />
            </div>
            <div className="w-full">
              <InputLabel
                label="Contact Email"
                type="email"
                id="contact-email-volunter"
                placeholder="jenny@gmail.com"
              />
            </div>
          </div>
          <div className="flex flex-row gap-5 px-6">
            <div className="w-full">
              <Label htmlFor="calendar1">Tanggal Mulai Volunter Vacancies</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="calendar1"
                    variant="outline"
                    className={cn(
                      "w-full pl-3 text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? format(date, "PPP") : <span>Pilih tanggal</span>}
                    <CalendarIcon className="ml-auto h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => setDate(newDate)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="w-full">
              <Label htmlFor="calendar2">Tanggal Selesai Volunter Vacancies</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="calendar2"
                    variant="outline"
                    className={cn(
                      "w-full pl-3 text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? format(date, "PPP") : <span>Pilih tanggal</span>}
                    <CalendarIcon className="ml-auto h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => setDate(newDate)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="px-6 pt-[18px]">
            <Label htmlFor="form-image">Gambar Lowongan Relawan</Label>
            <InputFile
              word="Tambahkan Foto Lowongan Relawan di sini"
              name="image"
              id="form-image"
            />
          </div>
          <div className="flex flex-row gap-5 justify-end px-6 py-3">
            <Button
              className="bg-white-500 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
              id="btn-cancel"
            >
              Batal
            </Button>
            <Button className="bg-[#293066] text-white hover:bg-[#293066]" id="btn-simpan">
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default VolunterForm;
