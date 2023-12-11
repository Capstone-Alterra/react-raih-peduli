import { Skeleton } from "@/components/ui/skeleton";

const SkeletonForm = () => {
  return (
    <>
      <Skeleton className="h-8 w-20 rounded-full" />
      <div className="flex gap-2 w-full">
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="flex gap-2 w-full">
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="flex gap-2 w-full">
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="flex gap-2 w-full">
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-10 w-full" />
      </div>
    </>
  );
};

export default SkeletonForm;
