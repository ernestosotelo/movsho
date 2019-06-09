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

const ShowsPage = ({ fetchSelections, shows, addSelection, list }) => {
  useEffect(() => {
    document.title = "Movsho | Shows"
    if (shows.length === 0) {
      return fetchSelections("shows")
    }
  }, [shows.length, fetchSelections])

  return (
    <Layout>
      <div style={{ background: "hsl(215, 100%, 3%" }}>
        <div className={listingCSS.block}>
          {shows.map(show => {
            const match = list.find(item => item.id === show.id)
            return (
              <Listing
                listAdd={() => {
                  if (!match) {
                    addSelection({
                      id: show.id,
                      name: show.name,
                      poster: show.poster
                    })
                  }
                }}
                addButtonToggle={match ? "none" : "block"}
                addedMessageToggle={match ? "block" : "none"}
                key={show.id}
                {...show}
                alt={show.name}
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
    shows: sortSelections(state.selections.shows, state.filters),
    loading: state.selections.showsLoading,
    error: state.selections.showsError,
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
)(ShowsPage)
