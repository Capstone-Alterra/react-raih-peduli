import { useEffect, useState } from "react";
import { getAllFundraises } from "@/utils/api/fundraise/api";
import { getTotalDataNews } from "@/utils/api/news/api";
import { getTotalDataCustomer } from "@/utils/api/customer/api";
import { getVolunteer } from "@/utils/api/volunter/api";
import Table from "./components/table-dashboard";
import Header from "@/components/header";
import Layout from "@/components/layout";
import User from "@/assets/dashborad/User.svg";
import News from "@/assets/dashborad/News.svg";
import Dollar from "@/assets/dashborad/coin.svg";
import Volunteer from "@/assets/dashborad/Hand.svg";
import Cards from "@/pages/dashboard/components/card";
import { fundraiseColumn } from "./components/fundraise-column";
import { volunteerColumn } from "./components/volunteer-column";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [fundraiseData, setFundraiseData] = useState([]);
  const [volunteerData, setVolunteerData] = useState([]);
  const [totalDataNews, setTotalDataNews] = useState(0);
  const [totalDataFundraise, setTotalDataFundraise] = useState(0);
  const [totalDataCustomer, setTotalDataCustomer] = useState(0);
  const [totalDataVolunteer, setTotalDataVolunteer] = useState(0);

  const fetchNewsData = async () => {
    try {
      const total = await getTotalDataNews();
      setTotalDataNews(total);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  const fetchCustomerData = async () => {
    try {
      const total = await getTotalDataCustomer();
      setTotalDataCustomer(total);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  const fetchVolunteerData = async () => {
    try {
      const response = await getVolunteer(1, 5);
      setVolunteerData(response.data);
      setTotalDataVolunteer(response.pagination.total_data);
    } catch (error) {
      setVolunteerData([]);
      console.error(error);
    }
  };

  const fetchFundraiseData = async () => {
    try {
      const response = await getAllFundraises(1, 5);
      setFundraiseData(response.data);
      setTotalDataFundraise(response.pagination.total_data);
    } catch (error) {
      setFundraiseData([]);
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    try {
      Promise.all([
        fetchFundraiseData(),
        fetchVolunteerData(),
        fetchNewsData(),
        fetchCustomerData(),
      ]).then(() => {
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  return (
    <Layout>
      <Header titleHeader="Dashboard" />
      <div className="w-full flex gap-4 mt-6">
        <Cards image={User} title="Pelanggan" count={totalDataCustomer} loading={loading} />
        <Cards
          image={Dollar}
          loading={loading}
          title="Penggalangan Dana"
          count={totalDataFundraise}
        />
        <Cards
          loading={loading}
          image={Volunteer}
          title="Lowongan Sukarelawan"
          count={totalDataVolunteer}
        />
        <Cards image={News} title="Berita" count={totalDataNews} loading={loading} />
      </div>
      <div className="flex gap-4 mt-6">
        <Table
          loading={loading}
          header={"List Penggalangan Dana"}
          button={"/penggalangan-dana"}
          columns={fundraiseColumn}
          data={fundraiseData}
        />
        <Table
          loading={loading}
          header={"List Lowongan Relawan"}
          button={"/lowongan-relawan"}
          columns={volunteerColumn}
          data={volunteerData}
        />
      </div>
    </Layout>
  );
}

export default Dashboard;
