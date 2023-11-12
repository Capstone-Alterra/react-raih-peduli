import { columns } from './columns';
import { Link } from 'react-router-dom';
import data from './MOCK_DATA.JSON';
import Header from '@/components/header';
import Layout from '@/components/layout';
import DataTable from './fundraising-table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function Fundraising() {
  return (
    <Layout currentPage="fundraising">
      <Header titleHeader="Penggalangan Dana" />
      <div className="rounded shadow mt-5">
        <div className="flex px-8 gap-3 items-center py-3 border-b-[1px]">
          <h3 className="text-lg font-bold text-primary">List Penggalangan Dana</h3>
          <div className="h-[2px] w-5 bg-primary rounded"></div>
          <Button className="rounded-full" asChild>
            <Link to="/test">Tambah Penggalangan Dana</Link>
          </Button>
          <Button className="rounded-full">Export CSV</Button>
        </div>
        <div className="px-8 flex items-center gap-2 py-6">
          Cari : <Input className="w-52" type="text" placeholder="Masukkan kata pencarian" />
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </Layout>
  );
}

export default Fundraising;
