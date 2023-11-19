import { Link } from "react-router-dom";
import InfoIcon from "@/assets/icons/info";
import TrashIcon from "@/assets/icons/trash";
import { Badge } from "@/components/ui/badge";
import PencilIcon from "@/assets/icons/pencil";
import { Button } from "@/components/ui/button";
import convertToRupiah from "@/utils/formatter/convertToRupiah";

export const columns = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
  },
  {
    header: "Judul Penggalangan Dana",
    accessorKey: "title",
  },
  {
    header: "Deskripsi",
    accessorKey: "description",
  },
  {
    header: "Target",
    accessorKey: "target",
    cell: ({ row }) => {
      const target = row.original.target;

      return <div className="whitespace-nowrap">{convertToRupiah(target)}</div>;
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
        case "live":
          status = "Live";
          break;
        default:
          status = originalStatus;
          break;
      }

      const badgeClass =
        status === "Menunggu"
          ? "border-[#FFAF0F] bg-white hover:bg-[#FFAF0F] text-[#FFAF0F] hover:text-white"
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
            className="bg-[#E28100] hover:bg-[#E28100]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <Link to={`/penggalangan-dana/${id}`}>
              <PencilIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="icon"
            className="bg-[#166648] hover:bg-[#166648]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <Link to={`/penggalangan-dana/${id}`}>
              <InfoIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            size="icon"
            className="bg-[#BF1616] hover:bg-[#BF1616]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            onClick={() => alert(`Hapus penggalangan dana dengan id: ${id}`)}
          >
            <TrashIcon className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];
