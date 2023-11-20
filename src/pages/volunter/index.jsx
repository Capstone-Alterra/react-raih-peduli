import TableLayout from "@/components/table/table-layout";
import TableHeader from "@/components/table/table-header";
import TableData from "@/components/table/table-data";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { Link } from "react-router-dom";
import { columns } from "./columns";
import data from "./MOCK_DATA.json";
import React from "react";

function Volunter() {
  return (
    <Layout currentPage="Volunter">
      <Header titleHeader="Lowongan Relawan" />
      <TableLayout>
        <TableHeader heading="List Lowongan Relawan" hasAction={true}>
          <Button
            size="sm"
            className="rounded-full bg-[#293066] hover:bg-[#293066]/80"
            asChild>
            <Link to="/tambah-lowongan-relawan">Tambah Lowongan Relawan</Link>
          </Button>
        </TableHeader>
        <TableData columns={columns} data={data} />
      </TableLayout>
    </Layout>
  );
}

export default Volunter;
