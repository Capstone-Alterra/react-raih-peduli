import { columns } from "./columns";
import Table from "./table-dashboard";
import Header from "@/components/header";
import Layout from "@/components/layout";
import User from "@/assets/dashborad/User.svg";
import News from "@/assets/dashborad/News.svg";
import Dollar from "@/assets/dashborad/coin.svg";
import Volunteer from "@/assets/dashborad/hand.svg";
import data from "@/pages/dashboard/MOCK_DATA.json";
import Cards from "@/pages/dashboard/components/card";

function Dashboard() {
  return (
    <>
      <Layout>
        <Header titleHeader="Dashboard" />
        <div className="w-full flex gap-4 mt-6">
          <Cards image={User} title="Pelanggan" customerCount={1} />
          <Cards image={Dollar} title="Penggalangan Dana" customerCount={1} />
          <Cards image={Volunteer} title="Lowongan Sukarelawan" customerCount={50} />
          <Cards image={News} title="Berita" customerCount={1} />
        </div>
        <div className="flex gap-4 mt-6">
          <Table columns={columns} data={data} />
          <Table columns={columns} data={data} />
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
