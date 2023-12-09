import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { flexRender, useReactTable, getCoreRowModel } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SkeletonTable from "./skeleton/skeleton-table";

function TableData({ columns, data, pagination, setPagination, loading }) {
  const { totalPage, currentPage, pageIndex, pageSize, prevPage } = pagination;
  const table = useReactTable({
    data: data,
    columns,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  });

  let startPagination;

  if (totalPage <= 3) {
    startPagination = 0;
  } else if (totalPage - currentPage < 2) {
    startPagination = totalPage - 3;
  } else if (totalPage - currentPage === 2) {
    startPagination = currentPage - 2;
  } else if (prevPage === 0) {
    startPagination = currentPage - 1;
  } else {
    startPagination = currentPage - 2;
  }

  return (
    <>
      <Table>
        <TableHeader className="bg-[#F5F5F5]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className="whitespace-nowrap" key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        {loading ? (
          <>
            <SkeletonTable />
            <SkeletonTable />
            <SkeletonTable />
            <SkeletonTable />
            <SkeletonTable />
          </>
        ) : (
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Data tidak tersedia.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        )}
      </Table>
      {data.length !== 0 && (
        <div className="flex justify-between items-center jus px-4 py-4 border-t-2">
          <div className="flex items-center gap-1 text-sm ">
            <div>Menampilkan halaman ke</div>
            {pageIndex} dari {totalPage}
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 text-sm">
              Tampilkan
              <Select
                value={pageSize}
                disabled={loading}
                onValueChange={(value) => {
                  setPagination((prevPagination) => ({
                    ...prevPagination,
                    pageIndex: 1,
                    pageSize: Number(value),
                  }));
                }}
              >
                <SelectTrigger id="btn-show-max-data" className="w-16">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {[5, 10, 25, 50].map((pageSize) => (
                      <SelectItem key={pageSize} value={pageSize}>
                        {pageSize}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              data
            </div>
            <div className="flex gap-1">
              <Button
                id="btn-pagination-previous"
                className="w-9 h-9 p-0 bg-[#F4F6F9] hover:bg-[#293066]/20"
                variant="default"
                size="sm"
                onClick={() => {
                  setPagination((prevState) => ({
                    ...prevState,
                    pageIndex: prevState.pageIndex - 1,
                  }));
                }}
                disabled={prevPage === 0 || loading}
              >
                <ChevronLeft className="w-5 h-5 text-[#293066]" />
              </Button>

              {Array.from({ length: totalPage }, (_, index) => index + 1)
                .slice(startPagination, startPagination + 3)
                .map((page, index) => (
                  <Button
                    size="sm"
                    key={index}
                    variant="default"
                    disabled={page === pageIndex || loading}
                    id={`btn-pagination-page-${index}`}
                    className={`${
                      page === pageIndex
                        ? "bg-[#293066] disabled:opacity-100 text-[#E3EAEF]"
                        : "bg-[#F4F6F9] text-[#293066]"
                    } w-9 h-9 hover:bg-[#293066]/20`}
                    onClick={() => {
                      setPagination((prevState) => ({
                        ...prevState,
                        pageIndex: page,
                      }));
                    }}
                  >
                    {page}
                  </Button>
                ))}

              <Button
                id="btn-pagination-next"
                className="w-9 h-9 p-0 bg-[#F4F6F9] hover:bg-[#293066]/20"
                variant="default"
                size="sm"
                onClick={() => {
                  setPagination((prevState) => ({
                    ...prevState,
                    pageIndex: pageIndex + 1,
                  }));
                }}
                disabled={pageIndex >= totalPage || loading}
              >
                <ChevronRight className="w-5 h-5 text-[#293066]" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TableData;
