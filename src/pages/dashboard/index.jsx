import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { getFundraises, getTotalDataFundraise } from "@/utils/api/fundraise/api";
import { getTotalDataNews } from "@/utils/api/news/api";
import { getTotalDataCustomer } from "@/utils/api/customer/api";
import { getTotalDataVolunteer, getVolunteer } from "@/utils/api/volunter/api";
import Table from "./table-dashboard";
import Header from "@/components/header";
import Layout from "@/components/layout";
import User from "@/assets/dashborad/User.svg";
import News from "@/assets/dashborad/News.svg";
import Dollar from "@/assets/dashborad/coin.svg";
import Volunteer from "@/assets/dashborad/Hand.svg";
import Cards from "@/pages/dashboard/components/card";
import { columns } from "./columns";
import { columnss } from "./columnss";

function Dashboard() {
  const [fundraiseData, setFundraiseData] = useState([]); 
  const [volunteerData, setVolunteerData] = useState([]); 
  const [fundraisePageCount, setFundraisePageCount] = useState();
  const [volunteerPageCount, setVolunteerPageCount] = useState();
  const [filtering, setFiltering] = useState("");
  const debouncedSearchTerm = useDebounce(filtering, 500);
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 5,
  });

  const [totalDataFundraise, setTotalDataFundraise] = useState(0);
  const [totalDataNews, setTotalDataNews] = useState(0);
  const [totalDataCustomer, setTotalDataCustomer] = useState(0);
  const [totalDataVolunteer, setTotalDataVolunteer] = useState(0);

  // Mengambil banyaknya data pada Data Fundraise
  useEffect(() => {
    const fetchData = async () => {
      const total = await getTotalDataFundraise();
      setTotalDataFundraise(total);
    };
    fetchData();
  }, []);

  // Mengambil banyaknya data pada Data Berita/News
  useEffect(() => {
    const fetchData = async () => {
      const total = await getTotalDataNews();
      setTotalDataNews(total);
    };
    fetchData();
  }, []);

  // Mengambil banyaknya data pada Data Customer/User
  useEffect(() => {
    const fetchData = async () => {
      try {
        const total = await getTotalDataCustomer();
        setTotalDataCustomer(total);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };
    fetchData();
  }, []);

  // Mengambil banyaknya data pada Data Volunteer
  useEffect(() => {
    const fetchData = async () => {
      try {
        const total = await getTotalDataVolunteer();
        setTotalDataVolunteer(total);
      } catch (error) {
        console.error('Error fetching volunteer data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    getFundraises(pageIndex, pageSize, debouncedSearchTerm)
      .then((data) => {
        setFundraiseData(data.data);
        setFundraisePageCount(data.pagination.total_page);
        setPagination((prevState) => ({
          ...prevState,
          pageIndex: data.pagination.current_page,
        }));
      })
      .catch(() => {
        setFundraiseData([]);
      });
  }, [pageIndex, pageSize, debouncedSearchTerm]);

  useEffect(() => {
    getVolunteer(pageIndex, pageSize, debouncedSearchTerm)
      .then((data) => {
        setVolunteerData(data.data);
        setVolunteerPageCount(data.pagination.total_page);
        setPagination((prevState) => ({
          ...prevState,
          pageIndex: data.pagination.current_page,
        }));
      })
      .catch(() => {
        setVolunteerData([]);
      });
  }, [pageIndex, pageSize, debouncedSearchTerm]);

  return (
    <>
      <Layout>
        <Header titleHeader="Dashboard" />
        <div className="w-full flex gap-4 mt-6">
          <Cards image={User} title="Pelanggan" count={totalDataCustomer} />
          <Cards image={Dollar} title="Penggalangan Dana" count={totalDataFundraise} />
          <Cards image={Volunteer} title="Lowongan Sukarelawan" count={totalDataVolunteer} />
          <Cards image={News} title="Berita" count={totalDataNews} />
        </div>
        <div className="flex gap-4 mt-6">
          <Table header={'List Penggalangan Dana'} button={'/penggalangan-dana'} columns={columns} data={fundraiseData} />
          <Table header={'List Lowongan Relawan'} button={'/lowongan-relawan'} columns={columnss} data={volunteerData} />
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
