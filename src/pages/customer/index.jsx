import React from "react";
import { columns } from "./columns";
import data from "./MOCK_DATA.json";
import Header from "@/components/header";
import Layout from "@/components/layout";
import TableData from "@/components/table/table-data";
import TableLayout from "@/components/table/table-layout";

function Index() {
  return (
    <Layout currentPage="pelanggan">
      <Header titleHeader="Pelanggan" />
      <TableLayout>
        <TableData columns={columns} data={data} />
      </TableLayout>
    </Layout>
  );
}

export default Index;
