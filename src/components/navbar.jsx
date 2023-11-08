import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import dropdown from "@/assets/logos/DropDown.png";

function Navbar() {
  return (
    <div className="w-full h-20 flex flex-row justify-end items-center p-7 bg-[#1E1E1E]">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white flex gap-x-2 mr-10">
          Hi, Admin!
          <img src={dropdown} className="mt-3" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Navbar;
