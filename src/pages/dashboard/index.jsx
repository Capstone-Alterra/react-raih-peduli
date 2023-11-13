import React from "react";
import Header from "@/components/header";
import Layout from "@/components/layout";
import Cards from "@/components/card";
import Dollar from "@/assets/dashborad/Dollar-Coin.png"
import User from "@/assets/dashborad/User.png"
import News from "@/assets/dashborad/News.png"
import Volunteer from "@/assets/dashborad/Volunteering.png"
function Dashboard() {
  return (
    <>
      <Layout>
      <Header titleHeader="Dashboard"/>
        <div className="pl-6 flex gap-36">
          <Cards image={User} title="Pelanggan" customerCount={1} />
          <Cards image={Dollar} title="Penggalangan Dana" customerCount={1}/>
          <Cards image={Volunteer} title="Lowongan Sukarelawan" customerCount={1}/>
          <Cards image={News} title="Berita" customerCount={1}/>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
