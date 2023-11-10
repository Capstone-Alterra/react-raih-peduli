import Header from "@/components/header";
import Layout from "@/components/layout";
import { Input } from "@/components/input-with-label";
import { Textarea } from "@/components/textarea-with-label";

function TransactionDetail() {
  return (
    <>
      <Layout>
        <Header titleHeader="Transaksi" />
        <div className="px-6 w-full h-full">
          <div className="border ">
            <p className="text-2xl p-3 font-bold flex flex-row">Detail Transaction</p>
          </div>
          <div className="border mb-5">
            <div className="flex flex-row gap-5 p-6">
              <Input label="Username" name="" placeholder="Andi" disabled />
              <Input label="Full Name" name="" placeholder="Andi Susilo" disabled />
            </div>
            <div className="px-6">
              <Textarea label="Alamat" name="" disabled />
            </div>
            <div className="flex flex-row gap-5 p-6">
              <Input label="No. Handphone" name="" placeholder="0812-3456-7890" disabled />
              <Input label="Jenis Kelamin" name="" placeholder="Laki-laki" disabled />
            </div>
            <div className="px-6">
              <Textarea label="Foto Profil" name="" disabled />
            </div>
            <div className="flex flex-row gap-5 p-6">
              <Input label="jumlah" name="" placeholder="Rp.500.000,00" disabled />
              <Input label="Virtual Account" name="" placeholder="Mandiri" disabled />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default TransactionDetail;
