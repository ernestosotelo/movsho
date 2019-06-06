import React from "react"
import spiderMovsho from "../images/svgs/viewAllMovies.svg"
import carmenSandiegoMovsho from "../images/svgs/viewAllShows.svg"
import viewAllCSS from "../styles/viewAll.module.scss"
import { Link } from "react-router-dom"

const ViewAll = () => {
  return (
    <div className={viewAllCSS.block}>
      <div className={viewAllCSS.linkBlock}>
        <Link to="/movies" className={viewAllCSS.link}>
          <img src={carmenSandiegoMovsho} alt="Carmen Sandiego Movsho" />
          <h3>View All Movies</h3>
        </Link>
      </div>
      <div className={viewAllCSS.linkBlock}>
        <Link to="/shows" className={viewAllCSS.link}>
          <img src={spiderMovsho} alt="Spiderman Movsho" />
          <h3>View All Shows</h3>
        </Link>
      </div>
    </div>
  )
}

export default ViewAll
