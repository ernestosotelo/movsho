import React, { useEffect } from "react"
import { connect } from "react-redux"
import "../styles/global.scss"
import listingCSS from "../styles/listing.module.scss"

import {
  fetchSelections,
  addSelection,
  removeSelection
} from "../actions/selections"
import Layout from "../Layout"
import Listing from "../components/Listing"
import sortSelections from "../selectors/sorting"

const MoviesPage = ({ fetchSelections, movies, addSelection, list }) => {
  useEffect(() => {
    if (movies.length === 0) {
      return fetchSelections("movies")
    }
    document.title = "Movsho | Movies"
  }, [movies.length, fetchSelections])

  return (
    <Layout>
      <div style={{ background: "hsl(215, 100%, 3%" }}>
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
                {...movie}
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
    movies: sortSelections(state.selections.movies, state.filters),
    loading: state.selections.moviesLoading,
    error: state.selections.moviesError,
    list: state.selections.list
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
)(MoviesPage)
