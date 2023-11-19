import React from "react";
import Header from "@/components/header";
import Layout from "@/components/layout";
import Cards from "@/components/card";
import Dollar from "@/assets/dashborad/coin.svg"
import User from "@/assets/dashborad/User.svg"
import News from "@/assets/dashborad/News.svg"
import Volunteer from "@/assets/dashborad/hand.svg"
import { columns } from "./colums";
import data from "@/pages/dashboard/MOCK_DATA.json"
import Table from "./table-dashboard";
import TableHeader from "./table_header";

function Dashboard() {
  return (
    <>
      <Layout>
      <Header titleHeader="Dashboard"/>
        <div className=" flex gap-16 pb-11">
          <Cards image={User} title="Pelanggan" customerCount={1} />
          <Cards image={Dollar} title="Penggalangan Dana" customerCount={1}/>
          <Cards image={Volunteer} title="Lowongan Sukarelawan" customerCount={1}/>
          <Cards image={News} title="Berita" customerCount={1}/>
        </div>
        <div className="flex gap-10  ">
          <TableHeader/>
          <TableHeader/>
        </div>
        <div className="flex gap-10 pb-10">
        <Table columns={columns} data={data} />
        <Table columns={columns} data={data}/>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
