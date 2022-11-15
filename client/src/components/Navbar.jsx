import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
      <nav className="navbar">
        <ul className="navbar-list">
          <Link to="/" className="a"> Home </Link>
          <Link to="/new" className="a"> New Book </Link>
        </ul>
      </nav>
  );
};
