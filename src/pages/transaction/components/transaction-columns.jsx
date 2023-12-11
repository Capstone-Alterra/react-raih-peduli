import { Link } from "react-router-dom";
import StatusBadge from "./status-badge";
import InfoIcon from "@/assets/icons/info";
import { Button } from "@/components/ui/button";
import convertToRupiah from "@/utils/formatter/convertToRupiah";

export const columns = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
  },
  {
    header: "ID Transaksi",
    accessorKey: "transaction_id",
  },
  {
    header: "Nama Lengkap",
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
    header: "Tipe Pembayaran",
    accessorKey: "payment_type",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status;

      return <StatusBadge status={status} />;
    },
  },
  {
    header: "Aksi",
    cell: ({ row }) => {
      const id = row.original.transaction_id;

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
