import { columns } from './columns';
import data from './MOCK_DATA.JSON';
import { Link } from 'react-router-dom';
import CsvIcon from '@/assets/icons/csv';
import Header from '@/components/header';
import Layout from '@/components/layout';
import { Button } from '@/components/ui/button';
import TableData from '@/components/table/table-data';
import TableHeader from '@/components/table/table-header';
import TableLayout from '@/components/table/table-layout';

function Fundraising() {
  return (
    <Layout currentPage="fundraising">
      <Header titleHeader="Penggalangan Dana" />
      <TableLayout>
        <TableHeader heading="List Penggalangan Dana" hasAction={true}>
          <Button size="sm" className="rounded-full bg-[#293066] hover:bg-[#293066]/80" asChild>
            <Link to="/test">Tambah Penggalangan Dana</Link>
          </Button>
          <Button size="sm" className="rounded-full bg-[#14513B] hover:bg-[#14513B]/80 flex gap-1">
            <CsvIcon className="w-5 h-5" />
            Export CSV
          </Button>
        </TableHeader>
        <TableData columns={columns} data={data} />
      </TableLayout>
    </Layout>
  );
}

export default Fundraising;
