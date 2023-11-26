import { columns } from './columns';
import data from './MOCK_DATA.json';
import Header from '@/components/header';
import Layout from '@/components/layout';
import TableData from '@/components/table/table-data';
import TableHeader from '@/components/table/table-header';
import TableLayout from '@/components/table/table-layout';

function Index() {
  return (
    <Layout currentPage="berita">
      <Header titleHeader="Berita" />
      <TableLayout>
        <TableHeader heading="List Pelanggan"/>
        <TableData columns={columns} data={data} />
      </TableLayout>
    </Layout>
  );
}

export default Index;