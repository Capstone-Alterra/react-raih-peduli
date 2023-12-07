import InfoIcon from "@/assets/icons/info";
import { Button } from "@/components/ui/button";
import convertToRupiah from "@/utils/formatter/convertToRupiah";
import { Link } from "react-router-dom";

export const columns = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Fullname",
    accessorKey: "fullname",
  },
  {
    header: "Alamat",
    accessorKey: "address",
  },
  {
    header: "No.Handphone",
    accessorKey: "phone_number",
  },
  {
    header: "jumlah",
    accessorKey: "amount",
    cell: ({ row }) => {
      const amount = row.original.amount;

      return <div className="whitespace-nowrap">{convertToRupiah(amount)}</div>;
    },
  },
  {
    header: "virtual account",
    accessorKey: "payment_type",
  },
  {
    header: "Aksi",
    cell: ({ row }) => {
      const id = row.original.id;

      return (
        <div className="flex gap-2">
          <Button
            asChild
            size="icon"
            id={`btn-detail-transaksi-${id}`}
            className="bg-[#166648] hover:bg-[#166648]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <Link to={`/transaksi/${id}`}>
              <InfoIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      );
    },
  },
];
