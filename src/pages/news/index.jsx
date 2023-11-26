import { columns } from './columns';
import data from './MOCK_DATA.json';
import { Link } from 'react-router-dom';
import Header from '@/components/header';
import Layout from '@/components/layout';
import { Button } from '@/components/ui/button';
import TableData from '@/components/table/table-data';
import TableHeader from '@/components/table/table-header';
import TableLayout from '@/components/table/table-layout';

function Index() {
  return (
    <Layout currentPage="berita">
      <Header titleHeader="Berita" />
      <TableLayout>
        <TableHeader heading="Daftar Berita" hasAction={true}>
          <Button size="sm" className="rounded-full bg-[#293066] hover:bg-[#293066]/80" asChild>
            <Link to="/berita/:id">Tambah Berita</Link>
          </Button>
        </TableHeader>
        <TableData columns={columns} data={data} />
      </TableLayout>
    </Layout>
  );
}

export default Index;
