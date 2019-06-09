import React from "react"
import introCSS from "../styles/intro.module.scss"
import movshoIntro from "../images/svgs/intro.svg"

const Intro = () => {
  return (
    <div className={introCSS.block}>
      <img src={movshoIntro} className={introCSS.image} alt="Movsho" />
      <h1 className={introCSS.title}>
        <i>
          Movsho is your source for the{" "}
          <b style={{ color: "#f9ba00" }}>highest rated shows & movies</b> of
          the year
        </i>
      </h1>

      <button>How Movsho Works</button>
    </div>
  )
}

export default Intro
