import "../styles/index.css";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="flex-1 w-full h-full">
        <Navbar />
        <Header />
        <div className="w-full grow">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
