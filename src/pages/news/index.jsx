import { Link } from "react-router-dom";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@uidotdev/usehooks";
import { getNews } from "@/utils/api/news";
import { columns } from "./components/news-columns";
import TableHeader from "@/components/table/table-header";
import TableLayout from "@/components/table/table-layout";
import TableData from "@/pages/news/components/news-table";

function Index() {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState();
  const [filtering, setFiltering] = useState("");
  const debouncedSearchTerm = useDebounce(filtering, 500);
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const pagination = {
    pageIndex,
    pageSize,
  };

  useEffect(() => {
    getNews(pageIndex, pageSize, debouncedSearchTerm)
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
    <Layout>
      <Header titleHeader="Berita" />
      <TableLayout>
        <TableHeader heading="List Berita" hasAction={true}>
          <Button
            id="btn-add-news"
            size="sm"
            className="rounded-full bg-[#293066] hover:bg-[#293066]/80"
            asChild
          >
            <Link to="/berita/tambah-berita">Tambah Berita</Link>
          </Button>
        </TableHeader>
        <TableData
          data={data}
          columns={columns}
          pageIndex={pageIndex}
          filtering={filtering}
          setFiltering={setFiltering}
          pageCount={pageCount}
          pagination={pagination}
          setPagination={setPagination}
        />
      </TableLayout>
    </Layout>
  );
}

export default Index;