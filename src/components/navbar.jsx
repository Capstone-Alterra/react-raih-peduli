import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dropdown from "@/assets/logos/DropDown.png";
import hamburgerIcon from "@/assets/logos/hamburger.svg";

function Navbar({ toggleSidebar }) {
  return (
    <div className="sticky top-0 z-10 h-16 bg-[#293066] flex items-center justify-between shadow-md px-8">
      <img className="w-7 h-7 cursor-pointer" src={hamburgerIcon} onClick={toggleSidebar} />
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white flex items-center gap-x-2 mr-10">
          Hi, Admin!
          <img src={dropdown} />
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
