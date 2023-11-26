import React from "react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";

export const LayoutLogin = ({ children, label, id, route }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F4F6F9] h-screen">
      <div className="w-[30.5rem] bg-white">
        <div className="flex flex-col items-center pt-2 bg-[#F4F6F9]">
          <img
            src="/logo-new.svg"
            alt="logo"
            className="w-[4.75rem] h-[4.375rem]"
          />
          <p className="font-normal mb-[1.5rem] text-2xl text-[#293066]">
            <span className="font-bold">RAIH</span> PEDULI
          </p>
        </div>
        <hr className="border-2 border-[#293066] w-full" />
        <div className="px-8 py-8">
          <Link
            id="btn-back"
            to={route}
            className="flex items-center gap-[0.625rem] mb-[1.25rem] text-[#293066]"
          >
            <img
              src="/left-arrow.svg"
              alt="btn-back"
              className="h-[1.5rem] w-[1.5rem]"
            />
            <Label htmlFor={id} className="text-xl font-bold cursor-pointer">
              {label}
            </Label>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
};
