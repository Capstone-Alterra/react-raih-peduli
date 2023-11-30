import Swal from "sweetalert2";
import { useState } from "react";
import TrashIcon from "@/assets/icons/trash";
import { Button } from "@/components/ui/button";
import { deleteFundraise } from "@/utils/api/fundraise";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertCircle } from "lucide-react";

const deleteHandler = (id, setOpen) => {
  deleteFundraise(id)
    .then((message) => {
      Toast.fire({ icon: "success", title: message });
      setOpen(false);
    })
    .catch((message) => {
      Toast.fire({ icon: "error", title: message });
      setOpen(false);
    });
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const Alert = ({ id }) => {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open}>
      <Button
        size="icon"
        id={`btn-delete-fundraise-${id}`}
        className="bg-[#BF1616] hover:bg-[#BF1616]/80"
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        onClick={() => setOpen(true)}
      >
        <TrashIcon className="w-4 h-4" />
      </Button>
      <AlertDialogContent className="w-96">
        <AlertDialogHeader>
          <AlertCircle className="text-[#E31F1F] mx-auto w-20 h-20" />
          <AlertDialogTitle className="text-center font-semibold">
            Apakah anda yakin ingin menghapus data penggalangan dana?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Data yang dihapus tidak dapat dikembalikan!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex gap-3 justify-center">
          <AlertDialogCancel
            onClick={() => setOpen(false)}
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            className="w-24 font-semibold border-[#E31F1F] bg-white hover:bg-[#E31F1F] text-[#E31F1F] hover:text-white"
          >
            Batal
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => deleteHandler(id, setOpen)}
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            className="w-24 font-semibold border-[#E31F1F] bg-[#E31F1F] hover:bg-[#E31F1F]/80 text-white"
          >
            Ya, Hapus!
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
