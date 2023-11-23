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
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState();
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const pagination = {
    pageIndex,
    pageSize,
  };

  useEffect(() => {
    getFundraises(pageIndex, pageSize).then((data) => {
      setData(data.data);
      setPageCount(data.pagination.total_page);
    });
  }, [pageIndex, pageSize]);

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
        <TableData
          data={data}
          columns={columns}
          pageIndex={pageIndex}
          pageCount={pageCount}
          pagination={pagination}
          setPagination={setPagination}
        />
      </TableLayout>
    </Layout>
  );
}

export default Fundraise;
