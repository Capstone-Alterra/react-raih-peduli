import Alert from "./delete-dialog";
import { Link } from "react-router-dom";
import InfoIcon from "@/assets/icons/info";
import { Badge } from "@/components/ui/badge";
import PencilIcon from "@/assets/icons/pencil";
import { Button } from "@/components/ui/button";

export const columns = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
  },
  {
    header: "Judul Lowongan Relawan",
    accessorKey: "title",
  },
  {
    header: "Deskripsi",
    cell: ({ row }) => {
      const description = row.original.description;

      return <div className="line-clamp-3">{description}</div>;
    },
  },
  {
    header: "Slot",
    accessorKey: "number_of_vacancies",
    cell: ({ row }) => {
      const slot = row.original.number_of_vacancies;

      return <div className="whitespace-nowrap">{slot}</div>;
    },
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
        <Badge className={`font-bold flex w-24 py-2 justify-center border ${badgeClass}`}>
          {status}
        </Badge>
      );
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
            id={`btn-edit-volunter-${id}`}
            className="bg-[#E28100] hover:bg-[#E28100]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <Link to={`/lowongan-relawan/${id}?edit=true`}>
              <PencilIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="icon"
            id={`btn-detail-volunter-${id}`}
            className="bg-[#166648] hover:bg-[#166648]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <Link to={`/lowongan-relawan/${id}`}>
              <InfoIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Alert id={id} />
        </div>
      );
    },
  },
];
