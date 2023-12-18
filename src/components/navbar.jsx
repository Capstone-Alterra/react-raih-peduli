import Swal from "sweetalert2";
import useStore from "@/utils/store/store";
import { useNavigate } from "react-router-dom";
import { useToken } from "@/utils/context/token";
import dropdown from "@/assets/logos/DropDown.png";
import hamburgerIcon from "@/assets/logos/hamburger.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

function Navbar() {
  const navigate = useNavigate();
  const { toggleSidebar } = useStore();
  const { token, profile, changeToken, changeProfile } = useToken();

  function handleLogout() {
    changeToken("");
    changeProfile("");
    Toast.fire({ icon: "success", title: "Logout berhasil" });
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
          Hi, {typeof profile !== "object" ? JSON.parse(profile).fullname : "Admin"}
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
