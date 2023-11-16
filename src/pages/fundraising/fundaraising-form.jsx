import { useState } from "react";
import { format } from "date-fns";
import Layout from "@/components/layout";
import Header from "@/components/header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import DropZone from "@/components/drop-zone";

function FundraisingForm() {
  const [date, setDate] = useState(undefined);
  const handleDrop = (acceptedFiles) => {
    console.log("Files dropped:", acceptedFiles);
  };

  return (
    <Layout>
      <Header titleHeader="Penggalangan Dana" />
      <div className="px-6 py-6 w-full h-full">
        <div className="border">
          <p className="text-2xl p-3 font-bold flex flex-row">Detail Transaction</p>
        </div>
        <div className="border mb-5">
          <div className="px-6 py-3">
            <Label htmlFor="judul-fundraising">Judul Penggalangan Dana</Label>
            <Input type="text" id="judul-fundraising" placeholder="Bantu Anak-Anak Sekolah: Mewujudkan Masa Depan Cerah" />
          </div>
          <div className="px-6 py-3">
            <Label htmlFor="deskripsi-fundraising">Isi Deskripsi</Label>
            <Textarea id="deskripsi-fundraising" placeholder="Membantu anak-anak kurang mampu mendapatkan pendidikan dan perawatan yang mereka butuhkan." />
          </div>
          <div className="px-6 py-3">
            <Label htmlFor="target-fundraising">Target</Label>
            <Input type="number" id="target-fundraising" placeholder="Rp. 50.000.000" />
          </div>
          <div className="flex flex-row gap-5 p-6">
            <div className="w-full">
              <Label htmlFor="calendar1">Tanggal Mulai Penggalangan Dana</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button id="calendar1" variant="outline" className={cn("w-full pl-3 text-left font-normal", !date && "text-muted-foreground")}>
                    {date ? format(date, "PPP") : <span>Pilih tanggal</span>}
                    <CalendarIcon className="ml-auto h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={(newDate) => setDate(newDate)} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="w-full">
              <Label htmlFor="calendar2">Tanggal Selesai Penggalangan Dana</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button id="calendar2" variant="outline" className={cn("w-full pl-3 text-left font-normal", !date && "text-muted-foreground")}>
                    {date ? format(date, "PPP") : <span>Pilih tanggal</span>}
                    <CalendarIcon className="ml-auto h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={(newDate) => setDate(newDate)} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="px-6 py-3">
            <label htmlFor="gambar-fundraising">Gambar Penggalangan Dana</label>
            <DropZone id="gambar-fundraising" onDrop={handleDrop} acceptedFileType="image/jpeg" />
          </div>
          <div className="flex flex-row gap-5 justify-end px-6 py-3">
            <Button className="bg-white-500 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white">Batal</Button>
            <Button className="bg-[#293066] text-white hover:bg-[#293066]">Simpan</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FundraisingForm;
