import {useState} from "react";

import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";

// import lvLogoLight from "../../assets/images/lendav_maaler_logo_light.svg"
import lvLogoDark from "../../assets/images/lendav_maaler_logo_dark.svg"
import { IoIosMenu, IoIosClose } from "react-icons/io";
import {IconContext} from "react-icons";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={styles.nav}>
                <Link to="/"><img src={lvLogoDark} alt="Lendav Maaler logo"/></Link>
                <Link to="/">Book a Table</Link>
                <Link to="/" className={styles.language_selector}>en</Link>
                <Link to="/">
                    <IconContext.Provider value={{size: "2em"}}>
                        {isOpen ? (
                            <IoIosClose onClick={toggleNav}/>
                        ) : (
                            <IoIosMenu onClick={toggleNav}/>
                        )}
                    </IconContext.Provider>
                </Link>
        </nav>
    )
}