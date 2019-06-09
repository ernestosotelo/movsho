import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import selectionsReducer from "./reducers/selectionsReducer"
import filtersReducer from "./reducers/filtersReducers"
import Router from "./router/Router"
import * as serviceWorker from "./serviceWorker"

const store = createStore(
  combineReducers({ selections: selectionsReducer, filters: filtersReducer }),
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
