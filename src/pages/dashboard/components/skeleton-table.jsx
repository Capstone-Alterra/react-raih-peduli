import { Skeleton } from "@/components/ui/skeleton";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";

const SkeletonTable = () => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>
          <Skeleton className="w-5 h-5" />
        </TableCell>
        <TableCell>
          <div className="flex flex-col gap-1">
            <Skeleton className="w-28 h-3" />
            <Skeleton className="w-20 h-3" />
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col gap-1">
            <Skeleton className="w-28 h-3" />
            <Skeleton className="w-24 h-3" />
            <Skeleton className="w-20 h-3" />
          </div>
        </TableCell>
        <TableCell>
          <Skeleton className="w-20 h-3" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Skeleton className="w-5 h-5" />
        </TableCell>
        <TableCell>
          <div className="flex flex-col gap-1">
            <Skeleton className="w-28 h-3" />
            <Skeleton className="w-20 h-3" />
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col gap-1">
            <Skeleton className="w-28 h-3" />
            <Skeleton className="w-24 h-3" />
            <Skeleton className="w-20 h-3" />
          </div>
        </TableCell>
        <TableCell>
          <Skeleton className="w-20 h-3" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Skeleton className="w-5 h-5" />
        </TableCell>
        <TableCell>
          <div className="flex flex-col gap-1">
            <Skeleton className="w-28 h-3" />
            <Skeleton className="w-20 h-3" />
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col gap-1">
            <Skeleton className="w-28 h-3" />
            <Skeleton className="w-24 h-3" />
            <Skeleton className="w-20 h-3" />
          </div>
        </TableCell>
        <TableCell>
          <Skeleton className="w-20 h-3" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Skeleton className="w-5 h-5" />
        </TableCell>
        <TableCell>
          <div className="flex flex-col gap-1">
            <Skeleton className="w-28 h-3" />
            <Skeleton className="w-20 h-3" />
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col gap-1">
            <Skeleton className="w-28 h-3" />
            <Skeleton className="w-24 h-3" />
            <Skeleton className="w-20 h-3" />
          </div>
        </TableCell>
        <TableCell>
          <Skeleton className="w-20 h-3" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Skeleton className="w-5 h-5" />
        </TableCell>
        <TableCell>
          <div className="flex flex-col gap-1">
            <Skeleton className="w-28 h-3" />
            <Skeleton className="w-20 h-3" />
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col gap-1">
            <Skeleton className="w-28 h-3" />
            <Skeleton className="w-24 h-3" />
            <Skeleton className="w-20 h-3" />
          </div>
        </TableCell>
        <TableCell>
          <Skeleton className="w-20 h-3" />
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default SkeletonTable;
