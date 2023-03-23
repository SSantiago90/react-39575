import CartWidget from "../CartWidget";
import "./styles.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="left">
        <div className="logo">
          <Link to="/">
            <img
              src="https://via.placeholder.com/100x50"
              alt="Site logo"
              height="50"
              width="100"
            />
          </Link>
        </div>

        <ul className="menu">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/admin">Admins</Link>
          </li>
          <li>
            <Link to="/category/suscriptor">Suscriptores</Link>
          </li>
          <li>
            <Link to="/category/editor">Editores</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
