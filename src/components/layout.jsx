import Navbar from "./navbar";
import Sidebar from "./sidebar";
import useStore from "@/utils/store/store";

function Layout({ children }) {
  const { isSidebarOpen } = useStore();

  return (
    <div className="flex w-screen max-h-screen">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="w-full overflow-y-auto">
        <Navbar />
        <div className="px-8">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
