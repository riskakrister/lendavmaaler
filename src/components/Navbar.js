import logo from "../img/lendavmaalerLogo.svg";
import { FcMenu } from "react-icons/fc";
import { IconContext } from "react-icons";

import "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={logo} alt="Lendav Maaler Logo"></img>
        </li>
        <li>
          <h2>Book a Table</h2>
        </li>
        <li>
          <span>en</span>
        </li>
        <li>
          <IconContext.Provider value={{ color: "black" }}>
            <FcMenu className="burger" size={36} />
          </IconContext.Provider>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
