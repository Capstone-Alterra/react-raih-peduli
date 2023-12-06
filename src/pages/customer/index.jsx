import { columns } from './components/customer-columns';
import Header from '@/components/header';
import Layout from '@/components/layout';
import TableData from './components/customer-table';
import TableHeader from '@/components/table/table-header';
import TableLayout from '@/components/table/table-layout';
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { getCustomers } from '@/utils/api/customer';

function Customer() {
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState();
    const [filtering, setFiltering] = useState("");
    const [loading, setLoading] = useState(false);
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
      setLoading(true);
      getCustomers(pageIndex, pageSize, debouncedSearchTerm)
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
        })
        .finally(() => {
          setLoading(false);
        });
    }, [pageIndex, pageSize, debouncedSearchTerm]);

  return (
    <Layout currentPage="pelanggan">
      <Header titleHeader="Pelanggan" />
      <TableLayout>
        <TableHeader heading="List Pelanggan"/>
        <TableData 
        columns={columns} 
        data={data}
        pageIndex={pageIndex}
        filtering={filtering}
        setFiltering={setFiltering}
        pageCount={pageCount}
        pagination={pagination}
        setPagination={setPagination}
        loading={loading}
        />
      </TableLayout>
    </Layout>
  );
}

export default Customer;