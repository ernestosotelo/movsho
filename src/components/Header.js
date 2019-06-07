import React, { useState } from "react"
import { Link } from "react-router-dom"
import headerCSS from "../styles/header.module.scss"
import navIcon from "../images/svgs/navIcon.svg"
import navLogo from "../images/svgs/navLogo.svg"

const Header = () => {
  const [menuState, setMenuState] = useState("none")

  return (
    <div className={headerCSS.block}>
      <div className={headerCSS.navBar}>
        <img src={navLogo} className={headerCSS.logo} alt="Logo" />
        <img
          onClick={() => setMenuState("")}
          src={navIcon}
          className={headerCSS.navIcon}
          alt="Navigation Icon"
        />
      </div>
      <div style={{ display: menuState }} className={headerCSS.menuBlock}>
        <div className={headerCSS.menuItems}>
          <button onClick={() => setMenuState("none")}> X </button>
          <Link to="/" className={headerCSS.menuLink}>
            Home
          </Link>
          <Link to="/shows" className={headerCSS.menuLink}>
            Shows
          </Link>
          <Link to="/movies" className={headerCSS.menuLink}>
            Movies
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
