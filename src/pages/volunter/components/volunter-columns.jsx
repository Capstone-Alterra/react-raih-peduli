import { Link } from "react-router-dom";
import InfoIcon from "@/assets/icons/info";
import TrashIcon from "@/assets/icons/trash";
import { Badge } from "@/components/ui/badge";
import PencilIcon from "@/assets/icons/pencil";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";

const handleDelete = (id) => {
  Swal.fire({
    title: "Apakah Anda Yakin Menghapus Data Lowongan Relawan",
    text: "Data yang dihapus tidak dapat dikembalikan!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#E31F1F",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, Hapus!",
    cancelButtonText: "Batal",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
};

export const columns = [
  {
    header: "No",
    accessorKey: "id",
  },
  {
    header: "Judul Lowongan Relawan",
    accessorKey: "title",
  },
  {
    header: "Deskripsi",
    accessorKey: "description",
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
      const id = row.original.no;
      const action = "";
      return (
        <div className="flex gap-2">
          <Button
            asChild
            size="icon"
            id={`btn-edit-volunter-${id}`}
            className="bg-[#E28100] hover:bg-[#E28100]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            action={action}>
            <Link to={`/lowongan-relawan/${id}?edit=true`}>
              <PencilIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="icon"
            id={`btn-detail-volunter-${id}`}
            className="bg-[#166648] hover:bg-[#166648]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
            <Link to={`/lowongan-relawan/${id}`}>
              <InfoIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            size="icon"
            id={`btn-delete-volunter-${id}`}
            className="bg-[#BF1616] hover:bg-[#BF1616]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            onClick={(id) => handleDelete(id)}>
            <TrashIcon className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];
