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
    }
  },
];
