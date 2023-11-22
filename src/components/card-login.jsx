import React from "react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";

export const LayoutLogin = ({ children, label, id, route }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F4F6F9] h-screen mt-[1rem]">
      <div className="flex flex-col w-full md:w-[33.5rem] bg-white overflow-auto">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/logo-new.svg"
            alt="logo"
            className="w-[7.735rem] h-[7.2rem]"
          />
          <p className="font-normal mb-[2.5rem] text-3xl text-[#293066]">
            <span className="font-bold">RAIH</span> PEDULI
          </p>
        </div>
        <hr className="border-2 border-[#293066] w-full" />
        <div className="pl-[2.5rem] pr-[2.125rem] py-[2.2rem]">
          <Link
            id="btn-back"
            to={route}
            className="flex items-center gap-[10px] mb-[1.625rem] text-[#293066]"
          >
            <img
              src="/left-arrow.svg"
              alt="btn-back"
              className="h-[1.625rem] w-[1.625rem]"
            />
            <Label htmlFor={id} className="text-2xl font-bold cursor-pointer">
              {label}
            </Label>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
};
