import Header from "@/components/header";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import backIcon from "@/assets/icons/back-icon.svg";
import Swal from "sweetalert2";
import { Label } from "@/components/ui/label";
import InputFile from "@/components/input-file";

function CustomerEdit() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Apakah Anda Yakin Ingin Mengupdate Data?",
      text: ``,
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Batal",
      confirmButtonText: "Simpan",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Formulir disubmit!");
      }
    });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <Layout>
        <Header titleHeader="Pelanggan" />
        <div className="rounded shadow my-5">
          <div className="rounded-t border-y-2">
            <p
              className="p-3 font-bold flex flex-row items-center cursor-pointer"
              onClick={handleGoBack}
            >
              <img
                src={backIcon}
                className="mr-2"
                alt="Back Icon"
                id="btn-back"
              />
              Edit Pelanggan
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row gap-5 p-6">
                <div className="w-full">
                  <Label htmlFor="form-username">Username</Label>
                  <Input type="text" name="username" id="form-username" />
                </div>
                <div className="w-full">
                  <Label htmlFor="form-fullname">Fullname</Label>
                  <Input type="text" name="fullname" id="form-fullname" />
                </div>
              </div>
              <div className="px-6">
                <Label htmlFor="form-alamat">Alamat</Label>
                <Textarea name="alamat" id="form-alamat" />
              </div>
              <div className="flex flex-row gap-5 p-6">
                <div className="w-full">
                <Label htmlFor="form-no-handphone">No. Handphone</Label>
                <Input
                  type="text"
                  name="no. handphone"
                  id="form-no-handphone"
                />
                </div>
                <div className="w-full">
                <Label htmlFor="form-jenis-kelamin">Jenis Kelamin</Label>
                <Input
                  type="text"
                  name="jenis kelamin"
                  id="form-jenis-kelamin"
                />
                </div>
              </div>
              <div className="px-6 py-3">
                <Label htmlFor="form-foto-profil">Foto Profil</Label>
                <InputFile word="Tambahkan Foto Profil di sini" name="foto-profil" id="form-foto-profil"/>
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
    </>
  );
}

export default CustomerEdit;
