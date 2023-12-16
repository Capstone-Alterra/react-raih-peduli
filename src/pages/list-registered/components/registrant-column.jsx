import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ApproveIcon from "@/assets/icons/approve";
import { Link, useParams } from "react-router-dom";

export const registrantColumns = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
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
    header: "NIK",
    accessorKey: "nik",
  },
  {
    header: "Pengalaman",
    accessorKey: "resume",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      let status;
      const originalStatus = row.original.status;

      switch (originalStatus) {
        case "pending":
          status = "Menunggu";
          break;
        case "accepted":
          status = "Diterima";
          break;
        case "rejected":
          status = "Ditolak";
          break;
        default:
          status = originalStatus;
          break;
      }

      const badgeClass =
        status === "Menunggu"
          ? "border-[#FFAF0F] bg-white hover:bg-[#FFAF0F] text-[#FFAF0F] hover:text-white"
          : status === "Ditolak"
          ? "border-[#E31F1F] bg-white hover:bg-[#E31F1F] text-[#E31F1F] hover:text-white"
          : "border-[#293066] bg-white hover:bg-[#293066] text-[#293066] hover:text-white";

      return (
        <Badge className={`font-bold flex w-24 py-2 justify-center border ${badgeClass}`}>
          {status}
        </Badge>
      );
    },
  },
  {
    header: "Aksi",
    cell: ({ row }) => {
      const { id } = useParams();
      const volunteerId = row.original.id;
      return (
        <div className="flex gap-2">
          <Button
            asChild
            size="icon"
            className="bg-[#293066] hover:bg-[#293066]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <Link to={`/lowongan-relawan/${id}/pendaftar/${volunteerId}`}>
              <ApproveIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      );
    },
  },
];
