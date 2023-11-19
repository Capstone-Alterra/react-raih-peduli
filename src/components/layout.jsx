import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useState } from "react";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-screen max-h-screen">
      <Sidebar isOpen={isOpen} />
      <div className="w-full overflow-y-auto">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="px-8">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
