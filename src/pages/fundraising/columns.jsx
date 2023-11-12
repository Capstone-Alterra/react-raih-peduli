import icon from '@/assets/logos/home.svg';
import { Badge } from '@/components/ui/badge';
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

      if (label === 'Female') {
        return (
          <Badge className="flex w-24 py-2 justify-center" variant="secondary">
            {label}
          </Badge>
        );
      } else {
        return (
          <Badge className="flex w-24 py-2 justify-center" variant="default">
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
          className="bg-yellow-500 hover:bg-yellow-400"
          style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
          onClick={() => console.log(row.original.no)}
        >
          <img src={icon} className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          className="bg-green-600 hover:bg-green-500"
          style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
          onClick={() => console.log(row.original.no)}
        >
          <img src={icon} className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          className="bg-indigo-600 hover:bg-indigo-500"
          style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
          onClick={() => console.log(row.original.no)}
        >
          <img src={icon} className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          className="bg-red-700 hover:bg-red-600"
          style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
          onClick={() => console.log(row.original.no)}
        >
          <img src={icon} className="w-4 h-4" />
        </Button>
      </div>
    ),
  },
];
