import { Link, useLocation, useSearchParams } from "react-router-dom";

const mapPathToLabel = (path, entity) => {
  const [searchParams] = useSearchParams();
  const isEdit = searchParams.get("edit");

  const isNumber = !isNaN(path);

  if (isNumber) {
    return `${isEdit ? "Edit" : "Detail"} ${getDetailLabel(entity)}`;
  }

  switch (path) {
    case "pelanggan":
      return "Pelanggan";
    case "penggalangan-dana":
      return "Penggalangan Dana";
    case "tambah-penggalangan-dana":
      return "Tambah Penggalangan Dana";
    case "lowongan-relawan":
      return "Lowongan Relawan";
    case "tambah-lowongan-relawan":
      return "Tambah Lowongan Relawan";
    case "transaksi":
      return "Transaksi";
    case "berita":
      return "Berita";
    case "tambah-berita":
      return "Tambah berita";
    default:
      return path;
  }
};

const getDetailLabel = (entity) => {
  switch (entity) {
    case "pelanggan":
      return "Pelanggan";
    case "penggalangan-dana":
      return "Penggalangan Dana";
    case "lowongan-relawan":
      return "Lowongan Relawan";
    case "transaksi":
      return "Transaksi";
    case "berita":
      return "Berita";
    default:
      return entity;
  }
};

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path !== "");

  return (
    <nav className="flex flex-nowrap">
      {pathnames.map((path, index) => {
        const route = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const entity = pathnames[0];
        const breadcrumbText = mapPathToLabel(path, entity);

        return (
          <span key={index}>
            {isLast ? (
              <p className="text-md text-gray-500 capitalize">{breadcrumbText}</p>
            ) : (
              <>
                <Link to={route} className="text-md text-gray-950 capitalize">
                  {breadcrumbText}
                </Link>
                <span className="mx-1">/</span>
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
