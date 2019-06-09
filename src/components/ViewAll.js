import React from "react"
import viewAllCSS from "../styles/viewAll.module.scss"
import { Link } from "react-router-dom"

const ViewAll = props => (
  <div className={viewAllCSS.block}>
    <Link to={`${props.url}`} className={viewAllCSS.link}>
      <img className={viewAllCSS.image} src={props.imgSrc} alt={props.alt} />
      <h3 className={viewAllCSS.linkText}>{props.linkText}</h3>
    </Link>
  </div>
)

export default ViewAll
