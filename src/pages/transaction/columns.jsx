import icon from "@/assets/logos/home.svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import convertToRupiah from "@/utils/formatter/convertToRupiah";

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
    accessorKey: "description",
  },
  {
    header: "Alamat",
    accessorKey: "description",
  },
  {
    header: "No.Handphone",
    accessorKey: "description",
  },
  {
    header: "jumlah",
    accessorKey: "target",
    cell: ({ row }) => {
      const target = row.original.target;

      return <div className="whitespace-nowrap">{convertToRupiah(target)}</div>;
    },
  },
  {
    header: "No.Handphone",
    accessorKey: "description",
  },
  {
    header: "Aksi",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button
          size="icon"
          className="bg-yellow-500 hover:bg-yellow-400"
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          onClick={() => console.log(row.original.no)}
        >
          <img src={icon} className="w-4 h-4" />
        </Button>
      </div>
    ),
  },
];
