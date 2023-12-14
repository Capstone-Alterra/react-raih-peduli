import { Skeleton } from "@/components/ui/skeleton";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";

const SkeletonTable = () => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>
          <Skeleton className="h-5 w-5" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-3 w-32" />
        </TableCell>
        <TableCell>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-3 w-14" />
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-3 w-14" />
          </div>
        </TableCell>
        <TableCell>
          <Skeleton className="h-3 w-32" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-3 w-20" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-10 w-10 rounded-full mx-auto" />
        </TableCell>
        <TableCell>
          <div className="flex gap-2">
            <Skeleton className="h-10 w-10" />
            <Skeleton className="h-10 w-10" />
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default SkeletonTable;
