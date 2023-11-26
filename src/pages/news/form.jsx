import React from "react";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "@/assets/icons/arrow-left";
import { Label } from "@/components/ui/label";
import InputFile from "@/components/input-file";
import { InputLabel } from "@/components/input-with-label";
import { TextAreaLabel } from "@/components/textarea-with-label";

function NewsForm(props) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data submit");
  };

  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <Layout>
      <Header titleHeader="Pelanggan" />
      <div className="rounded shadow my-5">
        <div className="rounded-t border-y-2">
          <p
            className="p-3 font-bold flex flex-row items-center cursor-pointer"
            onClick={handleGoBack}
          >
            <img src={ArrowLeft} className="w-4 h-4" alt="Back Icon" id="btn-back" />
            Tambah Berita
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="w-full p-6">
              <InputLabel
                label="Judul"
                type="text"
                name="title"
                id="form-title"
                placeholder="Masukan Judul"
              />
            </div>
            <div className="w-full p-6">
              <Label htmlFor="form-foto-profil">Gambar</Label>
              <InputFile
                word="Tambahkan Foto Berita di sini"
                name="foto-berita"
                id="form-foto-berita"
              />
            </div>
            <div className="w-full p-6">
              <TextAreaLabel
                label="Deskripsi"
                name="deskripsi"
                id="form-deskripsi"
                placeholder="Masukan Deskripsi"
              />
            </div>
            <div className="flex flex-row justify-end gap-5 p-6">
              <Button
                className="bg-white-500 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
                id="form-btn-cancel"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                className="bg-[#293066] text-white hover:bg-[#293066]"
                type="submit"
                id="form-btn-submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default NewsForm;
