import { TextAreaLabel } from "@/components/textarea-with-label";
import { InputLabel } from "@/components/input-with-label";
import ArrowLeft from "@/assets/icons/arrow-left";
import InputFile from "@/components/input-file";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import Header from "@/components/header";
import Layout from "@/components/layout";
import Select from "react-select";
import React from "react";
import { MultipleSelect } from "@/components/multiple-select";
import Swal from "sweetalert2";

function ResponseForm() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleIgnore = async () => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Alasan Di Tolak",
      inputPlaceholder: "Tulis di sini",
      inputAttributes: {
        "aria-label": "Tulis di sini",
      },
      showCancelButton: true,
      confirmButtonText: "Kirim",
      cancelButtonText: "Batal",
      confirmButtonColor: "#293066",
      cancelButtonColor: "#293066",
    });
    if (text) {
      Swal.fire(text);
    }
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
            Respon Pendaftar Lowongan Relawan
          </p>
        </div>
        <div>
          <div className="flex flex-row gap-5 px-6 mt-4">
            <div className="w-full">
              <InputLabel
                label="Username"
                type="text"
                id="username"
                placeholder="Masukkan Username"
              />
            </div>
            <div className="w-full">
              <InputLabel
                label="Full Name"
                type="text"
                id="full-name"
                placeholder="Masukkan full name"
              />
            </div>
          </div>
          <div className="px-6">
            <TextAreaLabel
              label="Alamat"
              name="address"
              id="address"
              placeholder="Masukkan Alamat"
            />
          </div>
          <div className="flex flex-row gap-5 px-6 mt-4">
            <div className="w-full">
              <InputLabel
                label="No. Handphone"
                type="number"
                id="phone-number"
                placeholder="Masukkan No hp"
              />
            </div>
            <div className="w-full">
              <InputLabel
                label="Jenis Kelamin"
                type="text"
                id="gender"
                placeholder="Masukkan jenis kelamin"
              />
            </div>
          </div>
          <div className="flex flex-row gap-5 px-6 mt-4">
            <div className="w-full">
              <InputLabel label="NIK" type="number" id="nik" placeholder="Masukkan NIK" />
            </div>
            <div className="w-full">
              <MultipleSelect
                label="Keahlian"
                id="select-keahlian"
                name="keahlian"
                placeholder="Tambahkan Keahlian"
              />
            </div>
          </div>
          <div className="px-6">
            <TextAreaLabel label="Resume" name="resume" id="resume" placeholder="Masukkan resume" />
          </div>
          <div className="px-6">
            <TextAreaLabel
              label="Alasan Mengikuti Program Relawan"
              name="reason-join"
              id="reason-join"
              placeholder="Masukkan Alasan Mengikuti Program Relawan"
            />
          </div>
          <div className="px-6 pt-[18px]">
            <Label htmlFor="form-image">Pas Foto</Label>
            <InputFile
              word="Tambahkan Pas Foto disini"
              name="image"
              id="form-image"
            />
          </div>
          <div className="flex flex-row gap-5 justify-end px-6 py-3">
            <Button
              className="bg-white-500 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
              id="btn-cancel"
              onClick={handleIgnore}>
              Tolak
            </Button>
            <Button
              className="bg-[#293066] text-white hover:bg-[#293066]"
              id="btn-simpan"
              onClick={handleBack}>
              Terima
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResponseForm;
