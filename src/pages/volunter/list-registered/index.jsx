import Header from "@/components/header";
import Layout from "@/components/layout";
import TableHeader from "@/components/table/table-header";
import React from "react";
import TableData from "../components/registrant-table";
import { registrantColumns } from "../components/registrant-columns";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { getVolunteerRegistrants } from "@/utils/api/volunter";

function Registrants({ id }) {
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
    getVolunteerRegistrants()
      .then((data) => {
        setData(data.data);
      })
      .catch(() => {
        setData([]);
      });
  }, []);

  return (
    <Layout currentPage="Volunter">
      <Header titleHeader="List Pendaftar Lowongan Relawan" />
      <TableHeader heading="List Pendaftar Lowongan Relawan"></TableHeader>
      <TableData
        data={data}
        columns={registrantColumns}
        pageIndex={pageIndex}
        filtering={filtering}
        setFiltering={setFiltering}
        pageCount={pageCount}
        pagination={pagination}
        setPagination={setPagination}
      />
    </Layout>
  );
}

export default Registrants;
