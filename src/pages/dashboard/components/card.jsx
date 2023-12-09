import { Skeleton } from "@/components/ui/skeleton";

function Card({ image, title, count, loading }) {
  return (
    <div className="bg-white p-5 w-1/4 gap-3 border-[1px] border-[#D1D1D1] rounded-lg flex">
      <div className="w-20 h-20 flex items-center justify-center rounded-lg p-2 bg-[#293066]">
        <img className="w-9 h-9" src={image} />
      </div>
      <div className="flex w-min flex-col justify-between ">
        <p className="text-[#A3A4A5] text-base font-bold">{title}</p>
        {loading ? (
          <Skeleton className="h-5 w-16" />
        ) : (
          <p className="text-[#293066] text-2xl font-bold">{count}</p>
        )}
      </div>
    </div>
  );
}

export default Card;
