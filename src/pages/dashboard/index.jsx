import { columns } from "./columns";
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { getFundraises,getTotalDataFundraise } from "@/utils/api/fundraise/api";
import { getTotalDataNews} from "@/utils/api/news/api";
import { getTotalDataCustomer } from "@/utils/api/customer/api";
import Table from "./table-dashboard";
import Header from "@/components/header";
import Layout from "@/components/layout";
import User from "@/assets/dashborad/User.svg";
import News from "@/assets/dashborad/News.svg";
import Dollar from "@/assets/dashborad/coin.svg";
import Volunteer from "@/assets/dashborad/hand.svg";
import Cards from "@/pages/dashboard/components/card";
import datas from "@/pages/dashboard/MOCK_DATA.json"
function Dashboard() {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState();
  const [filtering, setFiltering] = useState("");
  const debouncedSearchTerm = useDebounce(filtering, 500);
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 5,
  });


  const [totalDataFundaraise, setTotalDataFundraise] = useState(0);
  const [totalDataNews, setTotalDataNews] = useState(0);
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const total = await getTotalDataFundraise();
      setTotalDataFundraise(total);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const total = await getTotalDataNews();
      setTotalDataNews(total);
    };

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const total = await getTotalDataCustomer();
        setTotalData(total);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    getFundraises(pageIndex, pageSize, debouncedSearchTerm)
      .then((data) => {
        setData(data.data);
        setPageCount(data.pagination.total_page);
        setPagination((prevState) => ({
          ...prevState,
          pageIndex: data.pagination.current_page,
        }));
      })
      .catch(() => {
        setData([]);
      });
  }, [pageIndex, pageSize, debouncedSearchTerm]);

  return (
    <>
      <Layout>
        <Header titleHeader="Dashboard" />
        <div className="w-full flex gap-4 mt-6">
          <Cards image={User} title="Pelanggan" count={totalData} />
          <Cards image={Dollar} title="Penggalangan Dana" count={totalDataFundaraise} />
          <Cards image={Volunteer} title="Lowongan Sukarelawan" count={1} />
          <Cards image={News} title="Berita" count={totalDataNews} />
        </div>
        <div className="flex gap-4 mt-6">
          <Table header={'List Penggalangan Dana'} button={'/penggalangan-dana'} columns={columns} data={data} />
          <Table header={'List Daftar Relawan'} columns={columns} data={datas} />
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
