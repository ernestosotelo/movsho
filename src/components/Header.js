import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import headerCSS from "../styles/header.module.scss"
import navIcon from "../images/svgs/navIcon.svg"
import navLogo from "../images/svgs/navLogo.svg"

const Header = () => {
  const [menuState, setMenuState] = useState("none")

  const handleClickOutside = () => {
    setMenuState("none")
  }

  const handleClickInside = () => {
    if (menuState !== "") {
      setMenuState("")
    }
  }

  document.body.addEventListener("click", handleClickOutside)

  return (
    <div id="header" className={headerCSS.block}>
      <div className={headerCSS.navBar}>
        <img src={navLogo} className={headerCSS.logo} alt="Logo" />
        <img
          onClick={() => setMenuState("")}
          src={navIcon}
          className={headerCSS.navIcon}
          alt="Navigation Icon"
          style={{
            display: menuState === "none" ? "block" : "none"
          }}
        />
        <button
          style={{
            display: menuState !== "none" ? "block" : "none"
          }}
          className={headerCSS.close}
          onClick={() => setMenuState("none")}
        >
          X
        </button>
      </div>

      <div
        onClick={() => handleClickInside()}
        style={{ display: menuState }}
        className={headerCSS.menuBlock}
      >
        <div className={headerCSS.menuItems}>
          <NavLink
            exact
            activeClassName={headerCSS.activePage}
            to="/"
            className={headerCSS.menuLink}
          >
            Home
          </NavLink>
          <NavLink
            activeClassName={headerCSS.activePage}
            exact
            to="/shows"
            className={headerCSS.menuLink}
          >
            Shows
          </NavLink>
          <NavLink
            activeClassName={headerCSS.activePage}
            exact
            to="/movies"
            className={headerCSS.menuLink}
          >
            Movies
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
