const moviesDefault = {
  movies: [],
  loading: true,
  error: null,
  list: []
}

const moviesReducer = (state = moviesDefault, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_LOADING":
      return { ...state, loading: true }

    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        movies: action.data,
        movieId: action.id
      }

    case "FETCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.data.error
      }

    case "ADD_SELECTION":
      return {
        ...state,
        list: [...state.list, action.selection]
      }

    case "REMOVE_SELECTION":
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.id)
      }

    default:
      return state
  }
}

export default moviesReducer
