import { columns } from "./columns";
import Header from "@/components/header";
import Layout from "@/components/layout";
import TableLayout from "@/components/table/table-layout";
import TableHeader from "@/components/table/table-header";
import TableData from "@/pages/transaction/components/transaction-table";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { getTransaction } from "@/utils/api/transaction";

function Transaction() {
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
    getTransaction(pageIndex, pageSize, debouncedSearchTerm)
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
    <Layout currentPage="Transaction">
      <Header titleHeader="Transaksi" />
      <TableLayout>
        <TableHeader heading="List Transaksi" />
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

export default Transaction;
