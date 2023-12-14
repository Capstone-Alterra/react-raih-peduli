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

  useEffect(() => {
    setLoading(true);
    getNews(pageIndex, pageSize, debouncedSearchTerm)
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
      })
      .catch(() => {
        setData([]);
      })
      .finally(() => {
        setLoading(false);
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

export default Index;
