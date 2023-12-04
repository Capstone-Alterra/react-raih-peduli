import convertToRupiah from "@/utils/formatter/convertToRupiah";

export const columns = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
  },
  {
    header: "Judul Penggalangan Dana",
    accessorKey: "title",
  },
  {
    header: "Deskripsi",
    accessorKey: "description",
    cell: ({ row }) => {
      const description = row.original.description;

      return <div className="flex items-center h-20 w-56">{description}</div>;
    },
  },
  {
    header: "Target",
    accessorKey: "target",
    cell: ({ row }) => {
      const target = row.original.target;

      return <div className="whitespace-nowrap">{convertToRupiah(target)}</div>;
    },
  },
];
