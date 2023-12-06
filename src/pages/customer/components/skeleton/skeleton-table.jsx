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
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3 w-40" />
            <Skeleton className="h-3 w-32" />
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-12 w-40" />
          </div>
        </TableCell>
        <TableCell>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-96" />
          <Skeleton className="h-3 w-96" />
          <Skeleton className="h-3 w-96" />
          <Skeleton className="h-3 w-96" />
          </div>
        </TableCell>
        <TableCell>
          <div className="flex gap-2">
            <Skeleton className="h-10 w-10" />
            <Skeleton className="h-10 w-10" />
            <Skeleton className="h-10 w-10" />
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default SkeletonTable;
