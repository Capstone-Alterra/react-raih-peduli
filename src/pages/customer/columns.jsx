import TrashIcon from "@/assets/icons/trash";
import PencilIcon from "@/assets/icons/pencil";
import { Button } from "@/components/ui/button";

export const columns = [
  {
    header: "No",
    accessorKey: "no",
  },
  {
    header: "Username",
    accessorKey: "title",
  },
  {
    header: "Fullname",
    accessorKey: "fullname",
  },
  {
    header: "Alamat",
    accessorKey: "alamat",
  },
  {
    header: "No. Handphone",
    accessorKey: "nohandphone",
  },
  {
    header: "Jenis Kelamin",
    accessorKey: "jeniskelamin",
  },
  {
    header: "Foto Profil",
    accessorKey: "fotoprofil",
  },
  {
    header: "Aksi",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button
          size="icon"
          className="bg-[#E28100] hover:bg-[#E28100]/80"
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          onClick={() => console.log(row.original.no)}
        >
          <PencilIcon className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          className="bg-[#BF1616] hover:bg-[#BF1616]/80"
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          onClick={() => console.log(row.original.no)}
        >
          <TrashIcon className="w-4 h-4" />
        </Button>
      </div>
    ),
  },
];
