import { useNavigate } from "react-router-dom";
import PencilIcon from "@/assets/icons/pencil";
import { Button } from "@/components/ui/button";
import ArrowLeft from "@/assets/icons/arrow-left";

const FormHeader = ({ title, handleEdit }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex h-16 px-8 items-center gap-3 border-b-[1px]">
      <div className="cursor-pointer" onClick={handleGoBack}>
        <ArrowLeft className="w-4 h-4 text-[#293066]" />
      </div>
      <h3 className="text-lg font-bold text-[#293066]">
        {title === "edit"
          ? "Edit Penggalangan Dana"
          : title === "detail"
          ? "Detail Penggalangan Dana"
          : title === "add"
          ? "Tambah Penggalangan Dana"
          : ""}
      </h3>
      {title !== "add" && (
        <>
          <div className="h-[2px] w-5 bg-[#293066] rounded"></div>
          <Button
            size="sm"
            onClick={handleEdit}
            className="rounded-full justify-items-end bg-[#293066] hover:bg-[#293066]/80 flex gap-1"
          >
            <PencilIcon className="w-5 h-5" />
            Edit data
          </Button>
        </>
      )}
    </div>
  );
};

export default FormHeader;
