import React, { useState } from "react";

import menu from "@/assets/logos/Menu.png";
import dashboard from "@/assets/logos/Vector.png";
import customer from "@/assets/logos/User.png";
import fundraising from "@/assets/logos/Dollar Coin.png";
import volunter from "@/assets/logos/Volunteering.png";
import news from "@/assets/logos/News.png";
import transaction from "@/assets/logos/Transaction.png";

function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${
        open ? "w-72" : "w-24"
      } h-screen bg-white shadow-xl relative duration-300 p-5 pt-7`}>
      <img
        className={`absolute cursor-pointer -right-10 w-7 h-7 top-7 ${
          !open && "rotate-180"
        }`}
        src={menu}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4">
        <h1
          className={`text-black ml-16 font-medium text-xl duration-300 ${
            !open && "scale-0"
          }`}>
          Raih Peduli
        </h1>
      </div>
      <ul className="flex flex-col gap-x-4">
        <li
          className={`text-slate-500 text-xs mt-12 ml-1 ${!open && "hidden"}`}>
          DASHBOARD
        </li>
        <li className="text-black text-sm flex gap-x-3 cursor-pointer p-2 hover:bg-slate-200 rounded-md mt-4">
          <img src={dashboard} className="w-5 h-5" />
          <span className={`font-bold ${!open && "hidden"} duration-200`}>
            Dashboard
          </span>
        </li>
        <li
          className={`text-slate-500 text-xs mt-12 ml-1 ${!open && "hidden"}`}>
          MENU
        </li>
        <li className="text-black text-sm flex gap-x-3 cursor-pointer p-2 hover:bg-slate-200 rounded-md mt-4">
          <img src={customer} className="w-5 h-5" />
          <span className={`font-bold ${!open && "hidden"} duration-200`}>
            Customer
          </span>
        </li>
        <li className="text-black text-sm flex gap-x-3 cursor-pointer p-2 hover:bg-slate-200 rounded-md mt-4">
          <img src={fundraising} className="w-5 h-5" />
          <span className={`font-bold ${!open && "hidden"} duration-200`}>
            Fundraising
          </span>
        </li>
        <li className="text-black text-sm flex gap-x-3 cursor-pointer p-2 hover:bg-slate-200 rounded-md mt-4">
          <img src={volunter} className="w-5 h-5" />
          <span className={`font-bold ${!open && "hidden"} duration-200`}>
            Volunter Vacancies
          </span>
        </li>
        <li className="text-black text-sm flex gap-x-3 cursor-pointer p-2 hover:bg-slate-200 rounded-md mt-4">
          <img src={news} className="w-5 h-5" />
          <span className={`font-bold ${!open && "hidden"} duration-200`}>
            News
          </span>
        </li>
        <li className="text-black text-sm flex gap-x-3 cursor-pointer p-2 hover:bg-slate-200 rounded-md mt-4">
          <img src={transaction} className="w-5 h-5" />
          <span className={`font-bold ${!open && "hidden"} duration-200`}>
            Transactions
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
