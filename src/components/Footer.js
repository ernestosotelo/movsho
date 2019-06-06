import React from "react"
import footerCSS from "../styles/footer.module.scss"
import movshoIcon from "../images/svgs/navLogo.svg"

const Footer = () => (
  <div className={footerCSS.block}>
    <img src={movshoIcon} alt="Icon" />
    <p>Movsho</p>
  </div>
)

export default Footer
