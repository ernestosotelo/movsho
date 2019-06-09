import axios from "axios"
import uuid from "uuid/v4"

export const fetchSelections = dataType => {
  return dispatch => {
    if (dataType === "movies") {
      dispatch(fetchMoviesLoading())

      axios
        .get(`/api/movies.json`)
        .then(res => {
          dispatch(fetchMoviesSuccess(res.data))
        })
        .catch(err => {
          dispatch(fetchMoviesFailure(err.message))
        })
    }

    if (dataType === "shows") {
      dispatch(fetchShowsLoading())

      axios
        .get(`/api/shows.json`)
        .then(res => {
          dispatch(fetchShowsSuccess(res.data))
        })
        .catch(err => {
          dispatch(fetchShowsFailure(err.message))
        })
    }
  }
}

export const fetchMoviesSuccess = movies => ({
  type: "FETCH_MOVIES_SUCCESS",
  data: movies,
  id: movies.map(movie => (movie.id = uuid()))
})

export const fetchMoviesLoading = () => ({
  type: "FETCH_SELECTIONS_LOADING"
})

export const fetchMoviesFailure = error => ({
  type: "FETCH_MOVIES_FAILURE",
  data: {
    error
  }
})

export const fetchShowsSuccess = movies => ({
  type: "FETCH_SHOWS_SUCCESS",
  data: movies,
  id: movies.map(movie => (movie.id = uuid()))
})

export const fetchShowsLoading = () => ({
  type: "FETCH_SHOWS_LOADING"
})

export const fetchShowsFailure = error => ({
  type: "FETCH_SHOWS_FAILURE",
  data: {
    error
  }
})

export const addSelection = ({ id, name, poster }) => ({
  type: "ADD_SELECTION",
  selection: {
    id,
    name,
    poster
  }
})

export const removeSelection = ({ id }) => ({
  type: "REMOVE_SELECTION",
  id
})
