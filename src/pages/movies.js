import React, { useEffect } from "react"
import { connect } from "react-redux"
import listingCSS from "../styles/listing.module.scss"
import {
  fetchMovies,
  addSelection,
  removeSelection
} from "../actions/selections"
import Layout from "../Layout"
import Listing from "../components/Listing"
import TopThree from "../components/TopThree"

const MoviesPage = ({
  fetchMovies,
  movies,
  addSelection,
  removeSelection,
  list
}) => {
  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  console.log(list)

  return (
    <Layout>
      <div style={{ background: "hsl(215, 100%, 3%" }}>
        <TopThree />

        <p style={{ color: "#e0dfe2", fontSize: "1.7rem", marginTop: "3rem" }}>
          <b
            style={{
              padding: ".5rem 1.5rem .5rem 1.5rem",
              background: "#f9ba00",
              fontSize: "2rem",
              marginLeft: "4rem",
              color: "black"
            }}
          >
            !
          </b>{" "}
          Click the Watch List button to add a movie to your watch list! The
          eyeballs on the bottom right will have your watch list.
        </p>

        <div className={listingCSS.block}>
          {movies.map(movie => {
            const match = list.find(item => item.id === movie.id)
            return (
              <Listing
                listAdd={() => {
                  if (!match) {
                    addSelection({
                      id: movie.id,
                      name: movie.name,
                      poster: movie.poster
                    })
                  }
                }}
                addButtonToggle={match ? "none" : "block"}
                addedMessageToggle={match ? "block" : "none"}
                key={movie.id}
                name={movie.name}
                plot={movie.plot}
                date={movie.releaseDate}
                genre={movie.genre}
                imdbRating={movie.imdbRating ? movie.imdbRating : "N/A"}
                tomatoRating={movie.tomatoRating ? movie.tomatoRating : "N/A"}
                metaRating={movie.metaRating ? movie.metaRating : "N/A"}
                erbertRating={movie.erbertRating ? movie.erbertRating : "N/A"}
                tmdbRating={movie.tmdbRating ? movie.tmdbRating : "N/A"}
                movshoRating={movie.movshoRating}
                streamOn={movie.streamOn}
                poster={movie.poster}
                alt={movie.name}
                url={"movies/movie-reviews/"}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    movieId: state.movieId,
    loading: state.loading,
    error: state.error,
    list: state.list
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
)(MoviesPage)
