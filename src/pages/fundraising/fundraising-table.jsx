import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function DataTable({ columns, data, filtering, setFiltering }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

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
                Data kosong.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center jus px-4 py-4 border-t-2">
        <div className="flex items-center gap-1 text-sm ">
          <div>Halaman ke</div>
          {table.getState().pagination.pageIndex + 1} dari {table.getPageCount()}
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 text-sm">
            Tampilkan
            <Select
              value={table.getState().pagination.pageSize}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="w-16">
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
              className="w-9 h-9 p-0 bg-[#F4F6F9] hover:bg-[#293066]/20"
              variant="default"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft className="w-5 h-5 text-[#293066]" />
            </Button>
            {table
              .getPageOptions()
              .slice(
                table.getState().pagination.pageIndex,
                table.getState().pagination.pageIndex + 3
              )
              .map((page, index) => (
                <Button
                  className="w-9 h-9 disabled:bg-[#293066] disabled:opacity-100 disabled:text-[#E3EAEF]  bg-[#F4F6F9] text-[#293066] hover:bg-[#293066]/20"
                  key={index}
                  variant="default"
                  size="sm"
                  onClick={() => table.setPageIndex(page)}
                  disabled={table.getState().pagination.pageIndex === page}
                >
                  {page + 1}
                </Button>
              ))}
            <Button
              className="w-9 h-9 p-0 bg-[#F4F6F9] hover:bg-[#293066]/20"
              variant="default"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight className="w-5 h-5 text-[#293066]" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataTable;
