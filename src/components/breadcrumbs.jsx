import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((path) => path !== '');

  return (
    <div>
      {pathnames.map((path, index) => {
        const route = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={index}>
            {isLast ? (
              <p className="text-md text-gray-500 capitalize">{path}</p>
            ) : (
              <>
                <Link to={route} className="text-md text-gray-950 capitalize">
                  {path}
                </Link>
                <span className="mx-1">/</span>
              </>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
