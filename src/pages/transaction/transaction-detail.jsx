import Header from "@/components/header";
import Layout from "@/components/layout";
import { InputLabel } from "@/components/input-with-label";
import backIcon from "@/assets/icons/back-icon.svg";
import { Textarea } from "@/components/textarea-with-label";

function TransactionDetail() {
  return (
    <>
      <Layout>
        <Header titleHeader="Transaksi" />
        <div className="p-6 w-full h-full">
          <div className="border ">
            <p className="text-2xl p-3 font-bold flex flex-row">
              <img src={backIcon} className="mr-2" alt="Back Icon" id="btn-back" /> Detail Transaction
            </p>
          </div>
          <div className="border mb-5">
            <div className="flex flex-row gap-5 p-6">
              <InputLabel label="Username" id="username" name="" placeholder="Andi" disabled />
              <InputLabel label="Full Name" id="fullname" name="" placeholder="Andi Susilo" disabled />
            </div>
            <div className="px-6">
              <Textarea label="Alamat" name="" disabled />
            </div>
            <div className="flex flex-row gap-5 p-6">
              <InputLabel label="No. Handphone" id="nohandphone" name="" placeholder="0812-3456-7890" disabled />
              <InputLabel label="Jenis Kelamin" id="jeniskelamin" name="" placeholder="Laki-laki" disabled />
            </div>
            <div className="px-6">
              <Textarea label="Foto Profil" id="fotoprofil" name="" disabled />
            </div>
            <div className="flex flex-row gap-5 p-6">
              <InputLabel label="jumlah" id="jumlahtransaksi" name="" placeholder="Rp.500.000,00" disabled />
              <InputLabel label="Virtual Account" id="virtualaccount" name="" placeholder="Mandiri" disabled />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default TransactionDetail;