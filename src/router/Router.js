import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "../pages/app"
import MoviesPage from "../pages/movies"
import MovieReviewsPage from "../pages/moviereviews"

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/movies" exact component={MoviesPage} />
      <Route
        path={`/movies/movie-reviews/:name`}
        exact
        component={MovieReviewsPage}
      />
    </Switch>
  </Router>
)
