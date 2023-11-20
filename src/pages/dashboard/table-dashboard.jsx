import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

function TableDashboard({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full rounded overflow-auto shadow border-[1px] border-[#D1D1D1] flex flex-col mb-6">
      <div className="h-16 px-4 flex justify-between items-center">
        <div className="text-black text-md font-bold font-nunito break-words">
          List Penggalangan Dana
        </div>
        <Button size="sm" className="bg-[#293066] hover:bg-[#293066]/80 rounded-full">
          Lihat semua
        </Button>
      </div>
      <Table className="w-full">
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
                  <TableCell
                    style={{ maxHeight: "100px", overflow: "hidden", textOverflow: "ellipsis" }}
                    key={cell.id}
                  >
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
    </div>
  );
}

export default TableDashboard;
