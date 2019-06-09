const filterDefault = {
  sortBy: "name"
}

export default (state = filterDefault, action) => {
  switch (action.type) {
    case "SORT_BY_NAME":
      return { ...state, sortBy: "name" }
    case "SORT_BY_RATING":
      return { ...state, sortBy: "rating" }

    default:
      return state
  }
}
