import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "../pages/app"
import MoviesPage from "../pages/movies"
import ShowsPage from "../pages/shows"

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/movies" exact component={MoviesPage} />
      <Route path="/shows" exact component={ShowsPage} />
    </Switch>
  </Router>
)
