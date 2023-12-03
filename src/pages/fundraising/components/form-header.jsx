import { useNavigate } from "react-router-dom";
import ArrowLeft from "@/assets/icons/arrow-left";

const FormHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-16 px-8 items-center gap-3 border-b-[1px]">
      <div className="cursor-pointer" onClick={() => navigate(-1)}>
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
    </div>
  );
};

export default FormHeader;
