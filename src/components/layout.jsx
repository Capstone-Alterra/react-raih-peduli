import '../styles/index.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useState } from 'react';

function Layout({ children, currentPage }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-screen max-h-screen">
      <Sidebar currentPage={currentPage} isOpen={isOpen} />
      <div className="w-full overflow-y-auto">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="container">{children}</div>
      </div>
    </div>
  );
}

export default Layout;