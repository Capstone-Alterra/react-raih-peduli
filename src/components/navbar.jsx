import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import dropdown from "@/assets/logos/DropDown.png";
import hamburgerIcon from "@/assets/logos/hamburger.svg";
import useStore from "@/utils/store/store";
import { useToken } from "@/utils/context/token";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { token, changeToken } = useToken();
  const { toggleSidebar } = useStore();

  function handleLogout() {
    changeToken();
    navigate("/login");
  }

  return (
    <div className="sticky top-0 z-10 h-16 bg-[#293066] flex items-center justify-between shadow-md px-8">
      <img className="w-7 h-7 cursor-pointer" src={hamburgerIcon} onClick={toggleSidebar} />
      <DropdownMenu>
        <DropdownMenuTrigger
          id="toggling-profile-dropdown"
          className="text-white flex items-center gap-x-2 mr-10"
        >
          Hi, Admin!
          <img src={dropdown} />
        </DropdownMenuTrigger>

        <DropdownMenuContent className={token === "" ? "hidden" : ""}>
          <div className="px-3 py-2 text-[#F64C4C] cursor-pointer flex gap-2">
            <img id="btn-logout" src="./btn-logout.svg" alt="btn-logout" className="w-5 h-5" />
            {token === "" ? (
              <></>
            ) : (
              <p className="mt-[-0.125rem]" onClick={() => handleLogout()}>
                Keluar
              </p>
            )}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Navbar;
