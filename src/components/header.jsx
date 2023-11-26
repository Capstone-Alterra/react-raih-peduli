import Breadcrumbs from "./breadcrumbs";

function Header({ titleHeader }) {
  return (
    <div className="flex h-16 bg-white drop-shadow-md justify-between items-center px-8">
      <h3 className="font-bold text-xl text-black">{titleHeader}</h3>
      <Breadcrumbs />
    </div>
  );
}

export default Header;
