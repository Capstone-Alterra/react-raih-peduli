import InfoIcon from "@/assets/icons/info";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import convertToRupiah from "@/utils/formatter/convertToRupiah";
import { Link } from "react-router-dom";

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
      const originalStatus = row.original.status;
      let status;

      switch (originalStatus) {
        case "pending":
          status = "Pending";
          break;
        case "accepted":
          status = "Paid";
          break;
        case "rejected":
          status = "Failed / Cancelled";
          break;
        default:
          status = originalStatus;
          break;
      }

      const badgeClass =
        status === "Pending"
          ? "border-[#FFAF0F] bg-white hover:bg-[#FFAF0F] text-[#FFAF0F] hover:text-white"
          : status === "Failed / Cancelled"
          ? "border-[#E31F1F] bg-white hover:bg-[#E31F1F] text-[#E31F1F] hover:text-white"
          : "border-[#293066] bg-white hover:bg-[#293066] text-[#293066] hover:text-white";

      return <Badge className={`font-bold flex w-24 py-2 justify-center border ${badgeClass}`}>{status}</Badge>;
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
