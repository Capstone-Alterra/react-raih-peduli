import TableLayout from "@/components/table/table-layout";
import TableHeader from "@/components/table/table-header";
import TableData from "@/pages/volunter/components/volunter-table";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { Link } from "react-router-dom";
import { columns } from "./components/volunter-columns";
import React from "react";
import { useEffect } from "react";
import { getVolunters } from "@/utils/api/volunter/api";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

function Volunter() {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState();
  const [filtering, setFiltering] = useState("");
  const debounceSearchTerm = useDebounce(filtering, 500);
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const pagination = { pageIndex, pageSize };

  useEffect(() => {
    getVolunters(pageIndex, pageSize, debounceSearchTerm)
      .then((data) => {
        setData(data.data);
        setPageCount(data.pagination.total_page);
        setPagination((prevState) => ({
          ...prevState,
          pageIndex: data.pagination.current_page,
        }));
      })
      .catch(() => {
        setData([]);
      });
  }, [pageIndex, pageSize, debounceSearchTerm]);

  return (
    <Layout currentPage="Volunter">
      <Header titleHeader="Lowongan Relawan" />
      <TableLayout>
        <TableHeader heading="List Lowongan Relawan" hasAction={true}>
          <Button
            size="sm"
            className="rounded-full bg-[#293066] hover:bg-[#293066]/80"
            asChild>
            <Link to="/lowongan-relawan/tambah-lowongan-relawan">
              Tambah Lowongan Relawan
            </Link>
          </Button>
        </TableHeader>
        <TableData
          data={data}
          columns={columns}
          pageIndex={pageIndex}
          filtering={filtering}
          setFiltering={setFiltering}
          pageCount={pageCount}
          pagination={pagination}
          setPagination={setPagination}
        />
      </TableLayout>
    </Layout>
  );
}

export default Volunter;
