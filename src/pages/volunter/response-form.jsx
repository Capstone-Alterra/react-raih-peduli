import { TextAreaLabel } from "@/components/textarea-with-label";
import { InputLabel } from "@/components/input-with-label";
import backIcon from "@/assets/icons/back-icon.svg";
import InputFile from "@/components/input-file";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import Header from "@/components/header";
import Layout from "@/components/layout";
import Select from "react-select";
import React from "react";

function ResponseForm() {
  const navigate = useNavigate();

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
            onClick={handleBack}>
            <img
              src={backIcon}
              alt="Back Icon"
              className="mr-2"
              id="btn-back"
            />
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
              <InputLabel
                label="NIK"
                type="number"
                id="nik"
                placeholder="Masukkan NIK"
              />
            </div>
            <div className="w-full">
              <p className="font-semibold mb-2">Keahlian</p>
              <Select
                className="mt-2"
                placeholder="Tambah Keahlian"
                options={options}
                isMulti
                styles={customStyles}
              />
            </div>
          </div>
          <div className="px-6">
            <TextAreaLabel
              label="Resume"
              name="resume"
              id="resume"
              placeholder="Masukkan resume"
            />
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
            <Label htmlFor="form-image">Foto Profile</Label>
            <InputFile
              word="Tambahkan Foto Profile di sini"
              name="image"
              id="form-image"
            />
          </div>
          <div className="flex flex-row gap-5 justify-end px-6 py-3">
            <Button
              className="bg-white-500 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
              id="btn-cancel">
              Tolak
            </Button>
            <Button
              className="bg-[#293066] text-white hover:bg-[#293066]"
              id="btn-simpan">
              Terima
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResponseForm;
