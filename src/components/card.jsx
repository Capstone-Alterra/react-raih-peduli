import React from "react";
import {
  Card,
} from "@/components/ui/card";


export default function Cards({ image, title, customerCount }) {
  return (
    <>
      <Card className="  p-5 bg-white shadow-md rounded-lg flex flex-col justify-center items-center gap-10 mt-6">
        <div className="w-64 flex justify-start items-center gap-4">
          <div className="h-28 w-28 bg-[#293066] rounded-8 flex justify-center items-center gap-4 rounded-lg">
            <img className="w-15 h-15" src={image} alt="" />
          </div>
          <div className="w-32 flex flex-col justify-center items-start gap-2">
            <div className="text-gray-500 text-xl font-bold break-words">
              {title}
            </div>
            <div className="text-black text-2xl font-bold break-words ">
              {customerCount}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

// Example usage:
// <Cards image={user} title="Pelanggan" customerCount={1} />
