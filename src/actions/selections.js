import axios from "axios"
import uuid from "uuid/v4"

export const fetchMovies = () => {
  return dispatch => {
    dispatch(fetchMoviesLoading())

    axios
      .get(`../../api/movies.json`)
      .then(res => {
        dispatch(fetchMoviesSuccess(res.data))
      })
      .catch(err => {
        dispatch(fetchMoviesFailure(err.message))
      })
  }
}

export const fetchMoviesSuccess = movies => ({
  type: "FETCH_MOVIES_SUCCESS",
  data: movies,
  id: movies.map(movie => (movie.id = uuid()))
})

export const fetchMoviesLoading = () => ({
  type: "FETCH_MOVIES_LOADING"
})

export const fetchMoviesFailure = error => ({
  type: "FETCH_MOVIES_FAILURE",
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
