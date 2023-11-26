import Header from "@/components/header";
import Layout from "@/components/layout";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "@/assets/icons/arrow-left";
import { InputLabel } from "@/components/input-with-label";
import { TextAreaLabel } from "@/components/textarea-with-label";

function TransactionDetail() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Layout>
        <Header titleHeader="Transaksi" />
        <div className="rounded shadow my-5">
          <div className="rounded-t border-y-2">
            <p
              className="p-3 font-bold flex flex-row items-center cursor-pointer"
              onClick={handleGoBack}
            >
              <img src={ArrowLeft} className="w-4 h-4" alt="Back Icon" id="btn-back" />
              Detail Transaksi
            </p>
          </div>
          <div>
            <div className="flex flex-row gap-5 p-6">
              <div className="w-full">
                <InputLabel
                  label="Username"
                  type="text"
                  name="username"
                  id="form-username"
                  placeholder="Andi"
                />
              </div>
              <div className="w-full">
                <InputLabel
                  label="Fullname"
                  type="text"
                  name="fullname"
                  id="form-fullname"
                  placeholder="Andi Susanto"
                />
              </div>
            </div>
            <div className="px-6">
              <TextAreaLabel
                label="Alamat"
                name="alamat"
                id="form-alamat"
                placeholder="Jalan mekarsari 5467"
              />
            </div>
            <div className="flex flex-row gap-5 p-6">
              <div className="w-full">
                <InputLabel
                  label="No. Handphone"
                  type="text"
                  name="nohandphone"
                  id="form-no-handphone"
                  placeholder="08677868954"
                />
              </div>
              <div className="w-full">
                <InputLabel
                  label="Jenis Kelamin"
                  type="text"
                  name="jeniskelamin"
                  id="form-jenis-kelamin"
                  placeholder="Laki-Laki"
                />
              </div>
            </div>
            <div className="flex flex-row gap-5 p-6">
              <div className="w-full">
                <InputLabel
                  label="Jumlah"
                  type="text"
                  name="jumlahe"
                  id="form-jumlah"
                  placeholder="50.000.000"
                />
              </div>
              <div className="w-full">
                <InputLabel
                  label="Virtual Account"
                  type="text"
                  name="virtualaccount"
                  id="form-virtual-account"
                  placeholder="Mandiri"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default TransactionDetail;
