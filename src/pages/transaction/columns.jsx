import eye from "@/assets/icons/eye.svg";
import { Button } from "@/components/ui/button";
import convertToRupiah from "@/utils/formatter/convertToRupiah";

export const columns = [
  {
    header: "No",
    accessorKey: "no",
  },
  {
    header: "Username",
    accessorKey: "username",
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
    header: "No.Handphone",
    accessorKey: "nohandphone",
  },
  {
    header: "jumlah",
    accessorKey: "jumlahtransaksi",
    cell: ({ row }) => {
      const jumlahtransaksi = row.original.jumlahtransaksi;

      return <div className="whitespace-nowrap">{convertToRupiah(jumlahtransaksi)}</div>;
    },
  },
  {
    header: "Virtual account",
    accessorKey: "virtualaccount",
  },
  {
    header: "Aksi",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button
          size="icon"
          className="bg-black hover:bg-yellow-400"
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          onClick={() => console.log(row.original.no)}
        >
          <img src={eye} className="w-4 h-4" id="eye" />
        </Button>
      </div>
    ),
  },
];
