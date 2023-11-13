import Header from "@/components/header";
import Layout from "@/components/layout";
import { InputLabel } from "@/components/input-with-label";
import { Textarea } from "@/components/textarea-with-label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import backIcon from "@/assets/logos/back-icon.svg";
import Swal from "sweetalert2";

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
        <div className="bg-white drop-shadow-md my-6">
          <div className="border-y-2">
            <p
              className="p-3 font-bold flex flex-row items-center cursor-pointer"
              onClick={handleGoBack}
            >
              <img src={backIcon} className="mr-2" alt="Back Icon" id="btn-back"/>
              Edit Pelanggan
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row gap-5 p-6">
                <InputLabel label="Username" name="username" id="form-username" />
                <InputLabel label="Fullname" name="fullname" id="form-fullname" />
              </div>
              <div className="px-6">
                <Textarea label="Alamat" name="alamat" id="form-alamat" />
              </div>
              <div className="flex flex-row gap-5 p-6">
                <InputLabel label="No. Handphone" name="no. handphone" id="form-no-handphone" />
                <InputLabel label="Jenis Kelamin" name="jenis kelamin" id="form-jeniskelamin" />
              </div>
              <div className="px-6">
                <InputLabel type="file" label="Foto Profil" name="foto profil" id="form-fotoprofil" />
              </div>
              <div className="flex flex-row justify-end gap-5 p-6">
                <Button
                  id="form-btn-cancel"
                  type="button"
                  variant="secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button type="submit" id="form-btn-submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CustomerEdit;
