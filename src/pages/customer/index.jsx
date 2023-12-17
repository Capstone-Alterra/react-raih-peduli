import Header from "@/components/header";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { getCustomers } from "@/utils/api/customer";
import TableData from "./components/customer-table";
import { columns } from "./components/customer-columns";
import TableHeader from "@/components/table/table-header";
import TableLayout from "@/components/table/table-layout";

function Customer() {
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
    getCustomers(pageIndex, pageSize, debouncedSearchTerm)
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
  }, [pageIndex, pageSize, debouncedSearchTerm]);

  return (
    <Layout>
      <Header titleHeader="Pelanggan" />
      <TableLayout>
        <TableHeader heading="List Pelanggan" />
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

export default Customer;
