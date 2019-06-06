import React from "react"

const WatchListItem = props => (
  <div>
    <p>{props.name}</p>
    <img src={props.poster} alt={`Poster of: ${props.name}`} />
  </div>
)

export default WatchListItem
