import Swal from "sweetalert2";
import { useState } from "react";
import TrashIcon from "@/assets/icons/trash";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle, Loader2 } from "lucide-react";
import { deleteCustomer } from "@/utils/api/customer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const deleteHandler = (id, setOpen, navigate, setProcessing) => {
  setProcessing(true);
  deleteCustomer(id)
    .then((message) => {
      Toast.fire({ icon: "success", title: message });
    })
    .catch((message) => {
      Toast.fire({ icon: "error", title: message });
    })
    .finally(() => {
      navigate(0);
      setOpen(false);
      setProcessing(false);
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
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [processing, setProcessing] = useState(false);

  return (
    <AlertDialog open={open}>
      <Button
        size="icon"
        id={`btn-delete-customer-${id}`}
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
            Apakah anda yakin ingin menghapus data pelanggan?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Data yang dihapus tidak dapat dikembalikan!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex gap-3 justify-center">
          <AlertDialogCancel
            disabled={processing}
            onClick={() => setOpen(false)}
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            className="w-[100px] font-semibold border-[#E31F1F] bg-white hover:bg-[#E31F1F] text-[#E31F1F] hover:text-white"
          >
            Batal
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={processing}
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            onClick={() => deleteHandler(id, setOpen, navigate, setProcessing)}
            className="w-[100px] font-semibold border-[#E31F1F] bg-[#E31F1F] hover:bg-[#E31F1F]/80 text-white"
          >
            {processing ? <Loader2 className="animate-spin w-7 h-7" /> : "Ya, Hapus!"}
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
