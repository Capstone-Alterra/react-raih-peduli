import "../styles/index.css";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-screen">
        <Navbar />
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
