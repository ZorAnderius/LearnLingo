import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../helpers/constants/ROUTES.js";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles}>
      <nav>
        <Link to={ROUTES.HOME}>LearnLingo</Link>

        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.TEACHERS}>Teachers</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.FAVORITES}>Favorites</NavLink>
          </li>
        </ul>

        <div>
          <button>Login</button>
          <button>Registration</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
