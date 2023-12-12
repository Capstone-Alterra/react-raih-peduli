import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ApproveIcon from "@/assets/icons/approve";

export const registrantColumns = [
  {
    header: "No",
    accessorKey: "id",
  },
  {
    header: "Full Name",
    accessorKey: "fullname",
  },
  {
    header: "Address",
    accessorKey: "address",
  },
  {
    header: "NIK",
    accessorKey: "nik",
  },
  {
    header: "Resume",
    accessorKey: "resume",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const originalStatus = row.original.status;
      let status;

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
        <Badge
          className={`font-bold flex w-24 py-2 justify-center border ${badgeClass}`}>
          {status}
        </Badge>
      );
    },
  },
  {
    header: "Aksi",
    cell: ({ row }) => {
      const { vacancyId, volunteerId } = useParams();
      // const volunteerId = row.original.id;
      console.log(row.original);
      return (
        <div className="flex gap-2">
          <Button
            asChild
            size="icon"
            className="bg-[#293066] hover:bg-[#293066]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
            <Link
              to={`/lowongan-relawan/${vacancyId}/list-pendaftar/respon-pendaftar/${volunteerId}`}>
              <ApproveIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      );
    },
  },
];
