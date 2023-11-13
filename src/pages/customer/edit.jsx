import Header from "@/components/header";
import Layout from "@/components/layout";
import { Input } from "@/components/input-with-label";
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
              <img src={backIcon} className="mr-2" alt="Back Icon" />
              Edit Pelanggan
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row gap-5 p-6">
                <Input label="Username" name=""/>
                <Input label="Fullname" name=""/>
              </div>
              <div className="px-6">
                <Textarea label="Alamat" name=""/>
              </div>
              <div className="flex flex-row gap-5 p-6">
                <Input label="No. Handphone" name=""/>
                <Input label="Jenis Kelamin" name=""/>
              </div>
              <div className="px-6">
                <Input type="file" label="Foto Profil" name=""/>
              </div>
              <div className="flex flex-row justify-end gap-5 p-6">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CustomerEdit;
