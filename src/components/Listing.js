import React from "react"
import { connect } from "react-redux"
import {
  fetchSelections,
  addSelection,
  removeSelection
} from "../actions/selections"
import listingCSS from "../styles/listing.module.scss"
import movsho from "../images/svgs/movsho.svg"

const Listing = props => {
  return (
    <div
      id={props.name.replace(/[^A-Z0-9]/gi, "_")}
      className={listingCSS.listBlock}
    >
      <img
        className={listingCSS.poster}
        src={props.poster}
        alt={`Poster of: ${props.alt}`}
      />
      <div className={listingCSS.info}>
        <h3 className={listingCSS.name}>{props.name}</h3>
        <p className={listingCSS.plot}>{props.plot}</p>
        <p className={listingCSS.releaseDate}>
          <b>Release Date:</b> {props.releaseDate}
        </p>
        <p className={listingCSS.genre}>{props.genre}</p>
        <p style={{ color: "rgb(200, 158, 15)", fontSize: "2rem" }}>Ratings</p>
        <ul className={listingCSS.ratings}>
          <li>
            IMDB:<b>{props.imdbRating}/10</b>
          </li>
          <li>
            TMDB: <b>{props.tmdbRating}%/100%</b>
          </li>
          <li>
            MetaCritic: <b>{props.metaRating}/100</b>
          </li>
          <li>
            Rotten Tomatoes: <b>{props.tomatoRating}%/100%</b>
          </li>
        </ul>
        <p className={listingCSS.movshoRating}>
          <img src={movsho} alt="Movsho All Yellow" /> Movsho:{" "}
          <b>{props.movshoRating}</b>/100
        </p>

        {props.streamOn ? (
          <p className={listingCSS.stream}>
            {" "}
            Streaming Service: {props.streamOn}{" "}
          </p>
        ) : (
          <p style={{ color: "#c84f2d" }} className={listingCSS.stream}>
            {" "}
            No Streaming Available{" "}
          </p>
        )}

        <button
          style={{ display: props.addButtonToggle }}
          onClick={props.listAdd}
          className={listingCSS.watchBtn}
        >
          + Add
        </button>
        <p
          style={{ display: props.addedMessageToggle }}
          className={listingCSS.addedMessage}
        >
          Added to your list.
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    loading: state.loading,
    error: state.error,
    list: state.list,
    movieId: state.movieId
  }
}

const mapDispatchToProps = {
  fetchSelections,
  addSelection,
  removeSelection
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing)
