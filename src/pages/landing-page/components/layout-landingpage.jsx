import NavbarLandingPage from "./navbar-landingpage";
import FooterLandingPage from "./footer-landingpage";

function LayoutLandingPage({ children }) {
  return (
    <div>
    <nav>
        <NavbarLandingPage/>
    </nav>
    <div className="w-full grow">{children}</div>
    <footer>
        <FooterLandingPage/>
    </footer>
    </div>
  );
}

export default LayoutLandingPage;
