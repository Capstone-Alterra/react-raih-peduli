import { User } from "lucide-react";
import Header from "@/components/header";
import Layout from "@/components/layout";
import CoinIcon from "@/assets/icons/coin";
import HandIcon from "@/assets/icons/hand";
import NewsIcon from "@/assets/icons/news";
import { useEffect, useState } from "react";
import Table from "./components/table-dashboard";
import Cards from "@/pages/dashboard/components/card";
import { getTotalDataNews } from "@/utils/api/news/api";
import { getVolunteerVacancies } from "@/utils/api/volunter/api";
import { getAllFundraises } from "@/utils/api/fundraise/api";
import { volunteerColumn } from "./components/volunteer-column";
import { fundraiseColumn } from "./components/fundraise-column";
import { getTotalDataCustomer } from "@/utils/api/customer/api";

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
      const response = await getVolunteerVacancies(1, 5);
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
        <Cards title="Pelanggan" count={totalDataCustomer} loading={loading}>
          <User className="text-white w-9 h-9" />
        </Cards>
        <Cards loading={loading} title="Penggalangan Dana" count={totalDataFundraise}>
          <CoinIcon className="text-white w-9 h-9" />
        </Cards>
        <Cards loading={loading} title="Lowongan Sukarelawan" count={totalDataVolunteer}>
          <HandIcon className="text-white w-9 h-9" />
        </Cards>
        <Cards title="Berita" count={totalDataNews} loading={loading}>
          <NewsIcon className="text-white w-9 h-9" />
        </Cards>
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
