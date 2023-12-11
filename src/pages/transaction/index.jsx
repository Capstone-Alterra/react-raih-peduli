import { useState } from "react";
import { useEffect } from "react";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { getTransaction } from "@/utils/api/transaction";
import TableLayout from "@/components/table/table-layout";
import TableHeader from "@/components/table/table-header";
import { columns } from "./components/transaction-columns";
import TableData from "@/pages/transaction/components/transaction-table";

function Transaction() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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
    getTransaction(pageIndex, pageSize)
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
  }, [pageIndex, pageSize]);

  return (
    <Layout currentPage="Transaction">
      <Header titleHeader="Transaksi" />
      <TableLayout>
        <TableHeader heading="List Transaksi" />
        <TableData
          data={data}
          columns={columns}
          loading={loading}
          pagination={pagination}
          setPagination={setPagination}
        />
      </TableLayout>
    </Layout>
  );
}

export default Transaction;
