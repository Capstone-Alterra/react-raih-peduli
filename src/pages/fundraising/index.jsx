import { useState } from 'react';
import { columns } from './columns';
import data from './MOCK_DATA.JSON';
import { Link } from 'react-router-dom';
import Header from '@/components/header';
import Layout from '@/components/layout';
import DataTable from './fundraising-table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CsvIcon from '@/assets/icons/csv';

function Fundraising() {
  const [filtering, setFiltering] = useState('');

  return (
    <Layout currentPage="fundraising">
      <Header titleHeader="Penggalangan Dana" />
      <div className="rounded shadow mt-5">
        <div className="flex px-8 gap-3 items-center py-3 border-b-[1px]">
          <h3 className="text-lg font-bold text-[#293066]">List Penggalangan Dana</h3>
          <div className="h-[2px] w-5 bg-[#293066] rounded"></div>
          <Button className="rounded-full bg-[#293066] hover:bg-[#293066]/80" asChild>
            <Link to="/test">Tambah Penggalangan Dana</Link>
          </Button>
          <Button className="rounded-full bg-[#14513B] hover:bg-[#14513B]/80 flex gap-1">
            <CsvIcon className="w-5 h-5" />
            Export CSV
          </Button>
        </div>
        <div className="px-8 flex items-center gap-2 py-6">
          Cari :{' '}
          <Input
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            className="w-52"
            type="text"
            placeholder="Masukkan kata pencarian"
          />
        </div>
        <DataTable
          columns={columns}
          data={data}
          filtering={filtering}
          setFiltering={setFiltering}
        />
      </div>
    </Layout>
  );
}

export default Fundraising;
