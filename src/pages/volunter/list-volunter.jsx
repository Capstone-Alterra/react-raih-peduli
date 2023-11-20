import TableLayout from "@/components/table/table-layout";
import TableHeader from "@/components/table/table-header";
import TableData from "@/components/table/table-data";
import { listColumns } from "./list-columns";
import Layout from "@/components/layout";
import Header from "@/components/header";
import data from "./MOCK_LIST_DATA.json";
import React from "react";

function ListVolunter() {
  return (
    <Layout currentPage="Volunter">
      <Header titleHeader="Lowongan Relawan" />
      <TableLayout>
        <TableHeader heading="List Pendaftar Lowongan Relawan"></TableHeader>
        <TableData columns={listColumns} data={data} />
      </TableLayout>
    </Layout>
  );
}

export default ListVolunter;
