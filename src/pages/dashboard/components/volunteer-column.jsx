export const volunteerColumn = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
  },
  {
    header: "Judul Lowongan relawan",
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
    header: "Slot",
    accessorKey: "slot",
    cell: ({ row }) => {
      const slot = row.original.number_of_vacancies;

      return <div className="whitespace-nowrap">{slot}</div>;
    },
  },
];
