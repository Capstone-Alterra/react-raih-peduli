import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@uidotdev/usehooks";
import { columns } from "./components/volunter-columns";
import TableHeader from "@/components/table/table-header";
import TableLayout from "@/components/table/table-layout";
import { getVolunteerVacancies } from "@/utils/api/volunter";
import TableData from "@/pages/volunter/components/volunter-table";

function Volunter() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const debounceSearchTerm = useDebounce(query, 800);
  const [{ pageIndex, pageSize, prevPage, currentPage, totalPage }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
    prevPage: 0,
    currentPage: 0,
    totalPage: 0,
  });

  const pagination = {
    pageSize,
    prevPage,
    pageIndex,
    totalPage,
    currentPage,
  };

  useEffect(() => {
    setLoading(true);
    getVolunteerVacancies(pageIndex, pageSize, debounceSearchTerm)
      .then((data) => {
        setData(data.data);
        setPagination({
          nextPage: data.pagination.next_page,
          pageSize: data.pagination.page_size,
          totalPage: data.pagination.total_page,
          prevPage: data.pagination.previous_page,
          pageIndex: data.pagination.current_page,
          currentPage: data.pagination.current_page,
        });
        setLoading(false);
      })
      .catch(() => {
        setData([]);
        setLoading(false);
      });
  }, [pageIndex, pageSize, debounceSearchTerm]);

  return (
    <Layout currentPage="Volunter">
      <Header titleHeader="Lowongan Relawan" />
      <TableLayout>
        <TableHeader heading="List Lowongan Relawan" hasAction={true}>
          <Button size="sm" className="rounded-full bg-[#293066] hover:bg-[#293066]/80" asChild>
            <Link to="/lowongan-relawan/tambah-lowongan-relawan">Tambah Lowongan Relawan</Link>
          </Button>
        </TableHeader>
        <TableData
          data={data}
          columns={columns}
          loading={loading}
          query={query}
          setQuery={setQuery}
          pagination={pagination}
          setPagination={setPagination}
        />
      </TableLayout>
    </Layout>
  );
}

export default Volunter;
