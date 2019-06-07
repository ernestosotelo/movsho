import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {
  fetchMovies,
  addSelection,
  removeSelection
} from "../actions/selections"
import listingCSS from "../styles/listing.module.scss"
import movsho from "../images/svgs/movsho.svg"
import eyes from "../images/svgs/eyes.svg"

const Listing = (props, { list, movieId }) => {
  return (
    <div className={listingCSS.listBlock}>
      <img src={props.poster} alt={`Poster of: ${props.alt}`} />
      <div className={listingCSS.info}>
        <h3 className={listingCSS.name}>{props.name}</h3>
        <p className={listingCSS.plot}>{props.plot}</p>
        <p className={listingCSS.releaseDate}>
          <b>Release Date:</b> {props.date}
        </p>
        <p className={listingCSS.genre}>{props.genre}</p>
        <p style={{ color: "rgb(200, 158, 15)", fontSize: "2rem" }}>Ratings</p>
        <ul className={listingCSS.ratings}>
          <li>
            IMDB: <b>{props.imdbRating}</b>
          </li>
          <li>
            Rotten Tomatoes: <b>{props.tomatoRating}</b>
          </li>
          <li>
            MetaCritic: <b>{props.metaRating}</b>
          </li>

          <li>
            The Movie Database: <b>{props.tmdbRating}</b>
          </li>
        </ul>
        <p
          style={{
            fontSize: "1.6rem",
            padding: ".3rem",
            textAlign: "right"
          }}
        >
          <img style={{ width: "2rem" }} src={movsho} alt="Movsho All Yellow" />{" "}
          Movsho: <b>{props.movshoRating}</b>/100
        </p>
        <Link to={`${props.url}${props.name}`}>
          <button className={listingCSS.reviewBtn}>Video Reviews</button>
        </Link>
        <p className={listingCSS.stream}>Streaming: {props.streamOn}</p>

        <button
          style={{ display: props.addButtonToggle }}
          onClick={props.listAdd}
          className={listingCSS.watchBtn}
        >
          <img className={listingCSS.eyes} src={eyes} alt="Eyes" />
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
  fetchMovies,
  addSelection,
  removeSelection
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing)
