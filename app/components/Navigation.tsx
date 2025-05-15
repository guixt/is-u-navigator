import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link
            to="/"
            className={`hover:text-blue-200 ${location.pathname === "/" ? "font-bold" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/modules"
            className={`hover:text-blue-200 ${location.pathname === "/modules" ? "font-bold" : ""}`}
          >
            Modules
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
