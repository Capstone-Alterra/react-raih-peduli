import React from 'react';
import { Button } from '@/components/ui/button';


export default function TableHeader() {
  return (
    <div className="p-5 w-full flex justify-start items-center gap-14 border rounded-t-xl">
      <div className="w-188 text-black text-lg font-bold font-nunito break-words">
        List Penggalangan Dana
      </div>
      <Button size="sm" className="px-4 py-3 bg-indigo-900 rounded-3xl flex justify-start items-center gap-10 ml-auto">
      <div className="text-white text-sm font-semibold font-nunito break-words ">
          Lihat Semua
        </div>
        </Button>
    </div>
  );
}