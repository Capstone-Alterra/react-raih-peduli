import { Link } from "react-router-dom";
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
      const label = row.original.status;

      if (label === "Menunggu") {
        return (
          <Badge className="font-bold flex w-24 py-2 justify-center border border-[#FFAF0F] bg-white hover:bg-[#FFAF0F] text-[#FFAF0F] hover:text-white">
            {label}
          </Badge>
        );
      } else {
        return (
          <Badge className="font-bold flex w-24 py-2 justify-center border border-[#293066] bg-white hover:bg-[#293066] text-[#293066] hover:text-white">
            {label}
          </Badge>
        );
      }
    },
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
            className="bg-[#293066] hover:bg-[#293066]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
            <Link to={`/respon-pendaftar-lowongan-relawan/${id}`}>
              <ApproveIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      );
    },
  },
];