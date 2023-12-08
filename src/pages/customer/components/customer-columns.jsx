import { Link } from "react-router-dom";
import PencilIcon from "@/assets/icons/pencil";
import { Button } from "@/components/ui/button";
import ButtonDelete from "@/pages/customer/components/alert-dialog";

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
    header: "Nama Lengkap",
    accessorKey: "fullname",
  },
  {
    header: "Alamat",
    accessorKey: "address",
  },
  {
    header: "No. Handphone",
    accessorKey: "phone_number",
  },
  {
    header: "Jenis Kelamin",
    accessorKey: "gender",
  },
  {
    header: "Foto Profil",
    cell: ({ row }) => {
      const profile = row.original.profile_picture;

      return <img src={profile} className="w-9 h-9 rounded-full border mx-auto" />;
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
            <Link to={`/pelanggan/${id}?edit=true`}>
              <PencilIcon className="w-4 h-4" />
            </Link>
          </Button>
          <ButtonDelete id={id} />
        </div>
      );
    },
  },
];
