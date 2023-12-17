import { Skeleton } from "@/components/ui/skeleton";

const SkeletonForm = () => {
  return (
    <>
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
        <Skeleton className="h-24 w-full" />
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
        <Skeleton className="h-24 w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-24 w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-24 w-full" />
      </div>
      <div className="flex gap-2 mt-3 justify-end">
        <Skeleton className="w-24 h-9" />
        <Skeleton className="w-24 h-9" />
      </div>
    </>
  );
};

export default SkeletonForm;
