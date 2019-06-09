import React from "react"
import { HashLink as Link } from "react-router-hash-link"
import monthlyPickCSS from "../styles/monthlyPick.module.scss"

const MonthlyPick = props => (
  <div className={monthlyPickCSS.selectionBlock}>
    <h2 className={monthlyPickCSS.subHeader}>{props.heading}</h2>
    <div className={monthlyPickCSS.infoBlock}>
      <h3 className={monthlyPickCSS.title}>{props.title}</h3>
      <p className={monthlyPickCSS.plot}>{props.plot}</p>
      <p className={monthlyPickCSS.releaseDate}>
        <b>Release Date:</b> {props.releaseDate}
      </p>

      <Link className={monthlyPickCSS.hashLink} to={props.linkUrl}>
        View {props.selectionType} Profile
      </Link>
    </div>
    <div className={monthlyPickCSS.posterBlock}>
      <img alt={`Poster of ${props.title}`} src={props.imgSrc} />
    </div>
  </div>
)

export default MonthlyPick
