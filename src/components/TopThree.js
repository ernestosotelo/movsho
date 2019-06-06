import React from "react"
import topthreeCSS from "../styles/topthree.module.scss"
import movshoHearts from "../images/svgs/movshoHearts.svg"

const TopThree = () => {
  return (
    <div className={topthreeCSS.block}>
      <h2>Movsho's Top Three</h2>
      <img src={movshoHearts} alt="Movsho with heart eyes" />
      <ol>
        <li>1. Apollo 11</li>
        <li>2. Springsteen on Broadway</li>
        <li>3. Spider-Man: Into the Spider-Verse</li>
      </ol>
    </div>
  )
}

export default TopThree
