const sortSelections = (selections, { sortBy }) => {
  return selections.sort((a, b) => {
    if (sortBy === "date") {
      return a.date < b.date ? 1 : -1
    }
    if (sortBy === "rating") {
      if (a.movshoRating < b.movshoRating) {
        return 1
      } else if (a.movshoRating === b.movshoRating) {
        return 0
      } else {
        return -1
      }
    }
    if (sortBy === "name") {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    }
  })
}

export default sortSelections
