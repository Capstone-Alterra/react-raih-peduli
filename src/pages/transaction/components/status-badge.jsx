import { Badge } from "@/components/ui/badge";

const StatusBadge = ({ status }) => {
  let currentStatus;

  switch (status) {
    case "Paid":
      currentStatus = "Dibayar";
      break;
    case "Failed / Cancelled":
      currentStatus = "Dibatalkan";
      break;
    case "Waiting For Payment":
      currentStatus = "Menunggu";
      break;
    default:
      currentStatus = status;
      break;
  }

  const badgeClass =
    currentStatus === "Menunggu"
      ? "border-[#FFAF0F] bg-[#FEF2E5] hover:bg-[#CD6200] text-[#CD6200] hover:text-white"
      : status === "Dibatalkan"
      ? "border-white bg-[#FBE7E8] hover:bg-[#A30D11] text-[#A30D11] hover:text-white"
      : "border-white bg-[#EBF9F1] hover:bg-[#1F9254] text-[#1F9254] hover:text-white";

  return <Badge className={"font-bold flex w-24 py-2 justify-center border ${badgeClass}"}>{currentStatus}</Badge>;
};

export default StatusBadge;
