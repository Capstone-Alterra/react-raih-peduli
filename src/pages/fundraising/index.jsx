import { Link } from "react-router-dom";
import CsvIcon from "@/assets/icons/csv";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@uidotdev/usehooks";
import CsvDownloadButton from "react-json-to-csv";
import { columns } from "./components/fundraise-columns";
import TableHeader from "@/components/table/table-header";
import TableLayout from "@/components/table/table-layout";
import TableData from "@/pages/fundraising/components/fundraise-table";
import { getAllFundraises, getFundraiseByTitle } from "@/utils/api/fundraise/api";
import { Loader2 } from "lucide-react";
import Swal from "sweetalert2";

function Fundraise() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const debouncedSearchTerm = useDebounce(query, 800);
  const [exportedData, setExportedData] = useState();
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

  const getExportedData = async () => {
    setProcessing(true);
    try {
      const response = await getAllFundraises(1, 100);
      setExportedData(response.data);
      setTimeout(() => {
        document.getElementById("export-csv").click();
      }, 1000);
      Toast.fire({ icon: "success", title: "Berhasil mengekspor csv" });
    } catch (error) {
      Toast.fire({ icon: "error", title: "Gagal mengekspor coba lagi nanti" });
    } finally {
      setProcessing(false);
    }
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

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
            onClick={getExportedData}
          >
            {processing ? (
              <Loader2 className="animate-spin w-7 h-7" />
            ) : (
              <>
                <CsvIcon className="w-5 h-5" />
                Ekspor CSV
              </>
            )}
          </Button>
          <CsvDownloadButton
            id="export-csv"
            className="hidden"
            data={exportedData}
            filename="Data penggalangan dana"
          />
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
