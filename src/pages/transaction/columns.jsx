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
        case "Paid":
          status = "Dibayar";
          break;
        case "Failed / Cancelled":
          status = "Dibatalkan";
          break;
        case "Waiting For Payment":
          status = "Menunggu";
          break;
        default:
          status = originalStatus;
          break;
      }

      const badgeClass =
        status === "Menunggu"
          ? "border-[#FFAF0F] bg-[#FEF2E5] hover:bg-[#CD6200] text-[#CD6200] hover:text-white"
          : status === "Dibatalkan"
          ? "border-white bg-[#FBE7E8] hover:bg-[#A30D11] text-[#A30D11] hover:text-white"
          : "border-white bg-[#EBF9F1] hover:bg-[#1F9254] text-[#1F9254] hover:text-white";

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
