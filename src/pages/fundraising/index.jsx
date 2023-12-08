import { Link } from "react-router-dom";
import CsvIcon from "@/assets/icons/csv";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@uidotdev/usehooks";
import { columns } from "./components/fundraise-columns";
import TableHeader from "@/components/table/table-header";
import TableLayout from "@/components/table/table-layout";
import TableData from "@/pages/fundraising/components/fundraise-table";
import { getAllFundraises, getFundraiseByTitle } from "@/utils/api/fundraise/api";

function Fundraise() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(query, 800);
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

  const getFundraises = async (pageIndex, pageSize) => {
    setLoading(true);
    try {
      const data = await getAllFundraises(pageIndex, pageSize);
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
    } catch (error) {
      setData([]);
      setLoading(false);
    }
  };

  const getSearchedFundraise = async (title) => {
    setLoading(true);
    try {
      const data = await getFundraiseByTitle(title);
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
    } catch (error) {
      setData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchFundraises = async (pageIndex, pageSize, debouncedSearchTerm) => {
      if (debouncedSearchTerm !== "") {
        getSearchedFundraise(debouncedSearchTerm);
      } else {
        getFundraises(pageIndex, pageSize);
      }
    };

    fetchFundraises(pageIndex, pageSize, debouncedSearchTerm);
  }, [pageIndex, pageSize, debouncedSearchTerm]);

  return (
    <Layout>
      <Header titleHeader="Penggalangan Dana" />
      <TableLayout>
        <TableHeader heading="List Penggalangan Dana" hasAction={true}>
          <Button
            id="btn-add-fundraise"
            size="sm"
            className="rounded-full bg-[#293066] hover:bg-[#293066]/80"
            asChild
          >
            <Link to="/penggalangan-dana/tambah-penggalangan-dana">Tambah Penggalangan Dana</Link>
          </Button>
          <Button
            id="btn-export-to-csv"
            size="sm"
            className="rounded-full bg-[#14513B] hover:bg-[#14513B]/80 flex gap-1"
          >
            <CsvIcon className="w-5 h-5" />
            Export CSV
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

export default Fundraise;
