export const columnss = [
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
    header: "Slot",
    accessorKey: "slot",
    cell: ({ row }) => {
      const slot = row.original.number_of_vacancies;

      return <div className="whitespace-nowrap">{slot}</div>;
    },
  },
];
