import { useState } from "react";
import { useEffect } from "react";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { useParams } from "react-router-dom";
import TableData from "./components/registrant-table";
import TableHeader from "@/components/table/table-header";
import { getVolunteerRegistrants } from "@/utils/api/volunter";
import { registrantColumns } from "./components/registrant-column";

function Registrants() {
  const { id } = useParams();
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
    getVolunteerRegistrants(id, pageIndex, pageSize)
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
  }, [id, pageIndex, pageSize]);

  return (
    <Layout>
      <Header titleHeader="List Pendaftar Lowongan Relawan" />
      <TableHeader heading="List Pendaftar Lowongan Relawan" />
      <TableData
        data={data}
        loading={loading}
        columns={registrantColumns}
        pagination={pagination}
        setPagination={setPagination}
      />
    </Layout>
  );
}

export default Registrants;
