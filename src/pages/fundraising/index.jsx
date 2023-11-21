import { Link } from "react-router-dom";
import CsvIcon from "@/assets/icons/csv";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { columns } from "./fundraise-columns";
import { Button } from "@/components/ui/button";
import { getFundraises } from "@/utils/api/fundraise";
import TableData from "@/components/table/table-data";
import TableHeader from "@/components/table/table-header";
import TableLayout from "@/components/table/table-layout";

function Fundraise() {
  const [fundraises, setFundraises] = useState([]);

  useEffect(() => {
    getFundraises()
      .then((data) => setFundraises(data))
      .catch((message) => alert(message));
  }, []);

  return (
    <Layout>
      <Header titleHeader="Penggalangan Dana" />
      <TableLayout>
        <TableHeader heading="List Penggalangan Dana" hasAction={true}>
          <Button size="sm" className="rounded-full bg-[#293066] hover:bg-[#293066]/80" asChild>
            <Link to="/penggalangan-dana/tambah-penggalangan-dana">Tambah Penggalangan Dana</Link>
          </Button>
          <Button size="sm" className="rounded-full bg-[#14513B] hover:bg-[#14513B]/80 flex gap-1">
            <CsvIcon className="w-5 h-5" />
            Export CSV
          </Button>
        </TableHeader>
        <TableData columns={columns} data={fundraises} />
      </TableLayout>
    </Layout>
  );
}

export default Fundraise;
