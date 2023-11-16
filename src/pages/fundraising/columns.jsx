import InfoIcon from '@/assets/icons/info';
import TrashIcon from '@/assets/icons/trash';
import { Badge } from '@/components/ui/badge';
import PencilIcon from '@/assets/icons/pencil';
import { Button } from '@/components/ui/button';
import convertToRupiah from '@/utils/formatter/convertToRupiah';

export const columns = [
  {
    header: 'No',
    accessorKey: 'no',
  },
  {
    header: 'Judul Penggalangan Dana',
    accessorKey: 'title',
  },
  {
    header: 'Deskripsi',
    accessorKey: 'description',
  },
  {
    header: 'Target',
    accessorKey: 'target',
    cell: ({ row }) => {
      const target = row.original.target;

      return <div className="whitespace-nowrap">{convertToRupiah(target)}</div>;
    },
  },
  {
    header: 'Status',
    accessorKey: 'status',
    cell: ({ row }) => {
      const label = row.original.status;

      if (label === 'Menunggu') {
        return (
          <Badge className="font-bold flex w-24 py-2 justify-center border border-[#FFAF0F] bg-white hover:bg-[#FFAF0F] text-[#FFAF0F] hover:text-white">
            {label}
          </Badge>
        );
      } else {
        return (
          <Badge className="font-bold flex w-24 py-2 justify-center border border-[#293066] bg-white hover:bg-[#293066] text-[#293066] hover:text-white">
            {label}
          </Badge>
        );
      }
    },
  },
  {
    header: 'Aksi',
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button
          size="icon"
          className="bg-[#E28100] hover:bg-[#E28100]/80"
          style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
          onClick={() => console.log(row.original.no)}
        >
          <PencilIcon className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          className="bg-[#166648] hover:bg-[#166648]/80"
          style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
          onClick={() => console.log(row.original.no)}
        >
          <InfoIcon className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          className="bg-[#BF1616] hover:bg-[#BF1616]/80"
          style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
          onClick={() => console.log(row.original.no)}
        >
          <TrashIcon className="w-4 h-4" />
        </Button>
      </div>
    ),
  },
];