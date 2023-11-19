import React from "react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";

export const LayoutLogin = ({children, label, id, route}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F4F6F9] h-screen">
      <div className="flex flex-col items-center justify-center">
        <img src="/logo-new.svg" alt="logo" className="w-[118px] h-[115px] " />
        <p className="font-normal mb-[40px] text-[28px] text-[#293066]">
          <span className="font-bold">RAIH</span> PEDULI
        </p>
      </div>
      <div className="flex flex-col w-[531px] bg-white">
        <hr className="border-2 border-[#293066] w-full" />
        <div className="ml-[40px] mr-[34px] my-[35px]">
          <Link
            id="btn-back"
            to={route}
            className="flex items-center gap-[10px] mb-[25px] text-[#293066]"
          >
            <img
              src="/left-arrow.svg"
              alt="btn-back"
              className="h-[26px] w-[26px]"
            />
            <Label htmlFor={id} className="text-2xl font-bold cursor-pointer">{label}</Label>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
};
