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
          <Skeleton className="h-3 w-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-3 w-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-3 w-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-3 w-16" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-16 rounded-full" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-7 w-7 rounded-lg" />
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default SkeletonTable;
