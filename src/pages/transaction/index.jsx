import { columns } from "./columns";
import { Link } from "react-router-dom";
import data from "./MOCK_DATA.json";
import Header from "@/components/header";
import Layout from "@/components/layout";
import DataTable from "./transaction-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Transaction() {
  return (
    <Layout currentPage="Transaction">
      <Header titleHeader="Transaksi" />
      <div className="rounded shadow mt-5">
        <div className="flex px-8 gap-3 items-center py-3 border-b-[1px]">
          <h3 className="text-lg font-bold text-primary">List Transaksi</h3>
        </div>
        <div className="px-8 flex items-center gap-2 py-6">
          Cari : <Input className="w-52" type="text" placeholder="Masukkan kata pencarian" />
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </Layout>
  );
}

export default Transaction;
