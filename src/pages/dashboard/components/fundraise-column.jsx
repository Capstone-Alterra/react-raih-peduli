import convertToRupiah from "@/utils/formatter/convertToRupiah";

export const fundraiseColumn = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
  },
  {
    header: "Judul Penggalangan Dana",
    cell: ({ row }) => {
      const title = row.original.title;

      return <div className="line-clamp-2">{title}</div>;
    },
  },
  {
    header: "Deskripsi",
    accessorKey: "description",
    cell: ({ row }) => {
      const description = row.original.description;

      return <div className="line-clamp-3">{description}</div>;
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
