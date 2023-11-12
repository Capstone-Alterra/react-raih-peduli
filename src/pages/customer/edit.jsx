import Header from "@/components/header";
import Layout from "@/components/layout";
import { Input } from "@/components/input-with-label";
import { Textarea } from "@/components/textarea-with-label";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';


function CustomerEdit() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  const handleCancel = () => {
    
  };

  return (
    <>
      <Layout>
        <Header titleHeader="Pelanggan" />
        <form onSubmit={handleSubmit}>
          <div className=" bg-white drop-shadow-md my-6">
            <div className="border-y-2">
            <p className="p-3 font-bold flex flex-row items-center cursor-pointer" onClick={handleGoBack}>
                <i className="fas fa-arrow-left mr-2"></i>
                Edit Pelanggan
              </p>
            </div>
            <div className="">
              <div className="flex flex-row gap-5 p-6">
                <Input label="Username" name="" />
                <Input label="Fullname" name="" />
              </div>
              <div className="px-6">
                <Textarea label="Alamat" name="" />
              </div>
              <div className="flex flex-row gap-5 p-6">
                <Input label="No. Handphone" name="" id="" />
                <Input label="Jenis Kelamin" name="" />
              </div>
              <div className="px-6">
                <Input type="file" label="Foto Profil" name="" />
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
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
}

export default CustomerEdit;
