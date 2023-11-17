import { columns } from "./columns";
import data from "./MOCK_DATA.json";
import Header from "@/components/header";
import Layout from "@/components/layout";
import TableLayout from "@/components/table/table-layout";
import TableHeader from "@/components/table/table-header";
import TableData from "@/components/table/table-data";

function Transaction() {
  return (
    <Layout currentPage="Transaction">
      <Header titleHeader="Transaksi" />
      <TableLayout>
        <TableHeader heading="List Transaksi" />
        <TableData columns={columns} data={data} />
      </TableLayout>
    </Layout>
  );
}

export default Transaction;
