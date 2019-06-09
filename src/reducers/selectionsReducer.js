const selectionsDefault = {
  movies: [],
  shows: [],
  moviesLoading: true,
  moviesError: null,
  showsLoading: true,
  showsError: null,
  list: []
}

const selectionsReducer = (state = selectionsDefault, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_LOADING":
      return { ...state, moviesLoading: true }

    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        moviesLoading: false,
        moviesError: null,
        movies: action.data,
        movieId: action.id
      }

    case "FETCH_MOVIES_FAILURE":
      return {
        ...state,
        moviesLoading: false,
        moviesError: action.data.error
      }

    case "FETCH_SHOWS_LOADING":
      return { ...state, showsLoading: true }

    case "FETCH_SHOWS_SUCCESS":
      return {
        ...state,
        showsLoading: false,
        showsError: null,
        shows: action.data,
        showId: action.id
      }

    case "FETCH_SHOWS_FAILURE":
      return {
        ...state,
        showsLoading: false,
        showsError: action.data.error
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

export default selectionsReducer
