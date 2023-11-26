import { Input } from "../../../components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { flexRender, useReactTable, getCoreRowModel } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function TableData({
  columns,
  data,
  pageCount,
  pageIndex,
  pagination,
  setPagination,
  filtering,
  setFiltering,
}) {
  const table = useReactTable({
    data: data ?? [],
    columns,
    pageCount,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  });

  return (
    <>
      <div className="px-8 flex items-center gap-2 py-6">
        Cari :{" "}
        <Input
          type="text"
          value={filtering}
          className="w-52 h-8"
          id="input-search-fundraise"
          placeholder="Masukkan kata pencarian"
          onChange={(e) => setFiltering(e.target.value)}
        />
      </div>
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
      </Table>
      <div className="flex justify-between items-center jus px-4 py-4 border-t-2">
        <div className="flex items-center gap-1 text-sm ">
          <div>Halaman ke</div>
          {table.getState().pagination.pageIndex} dari {table.getPageCount()}
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 text-sm">
            Tampilkan
            <Select
              value={table.getState().pagination.pageSize}
              onValueChange={(value) => {
                setPagination((prevPagination) => ({
                  ...prevPagination,
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
              onClick={() =>
                setPagination((prevState) => ({
                  ...prevState,
                  pageIndex: prevState.pageIndex - 1,
                }))
              }
              disabled={pageIndex <= 1}
            >
              <ChevronLeft className="w-5 h-5 text-[#293066]" />
            </Button>
            {Array.from({ length: pageCount }, (_, index) => index + 1)
              .slice(pageIndex - 1, pageIndex + 2)
              .map((page, index) => (
                <Button
                  size="sm"
                  key={index}
                  variant="default"
                  disabled={page === pageIndex}
                  id={`btn-pagination-page-${index}`}
                  className="w-9 h-9 disabled:bg-[#293066] disabled:opacity-100 disabled:text-[#E3EAEF] bg-[#F4F6F9] text-[#293066] hover:bg-[#293066]/20"
                  onClick={() =>
                    setPagination((prevState) => ({
                      ...prevState,
                      pageIndex: page,
                    }))
                  }
                >
                  {page}
                </Button>
              ))}
            <Button
              id="btn-pagination-next"
              className="w-9 h-9 p-0 bg-[#F4F6F9] hover:bg-[#293066]/20"
              variant="default"
              size="sm"
              onClick={() =>
                setPagination((prevState) => ({
                  ...prevState,
                  pageIndex: prevState.pageIndex + 1,
                }))
              }
              disabled={pageIndex >= pageCount}
            >
              <ChevronRight className="w-5 h-5 text-[#293066]" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableData;
