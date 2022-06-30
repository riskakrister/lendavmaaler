import logo from "../img/lendavmaalerLogo.svg";
import { FcMenu } from "react-icons/fc";
import { IconContext } from "react-icons";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        <li className={styles.ul__li}>
          <img src={logo} alt="Lendav Maaler Logo"></img>
        </li>
        <li className={styles.ul__li}>
          <h2>Book a Table</h2>
        </li>
        <li className={styles.ul__li}>
          <span>en</span>
        </li>
        <li className={styles.ul__li}>
          <IconContext.Provider value={{ color: "black" }}>
            <FcMenu size={36} />
          </IconContext.Provider>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
