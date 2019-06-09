import React, { useState } from "react"
import { connect } from "react-redux"
import watchListCSS from "../styles/watchList.module.scss"
import { HashLink as Link } from "react-router-hash-link"
import Modal from "react-modal"
import "../styles/watchList.module.scss"
import { removeSelection } from "../actions/selections"

const WatchList = ({ removeSelection, list, movies, shows }) => {
  const [openClose, setOpenClose] = useState(false)

  // if(list.length >=1) {}
  return (
    <div className={watchListCSS.block}>
      <button
        onClick={() => setOpenClose(true)}
        className={watchListCSS.eyesBtn}
      >
        <svg
          className={watchListCSS.eyes}
          alt="eyes"
          viewBox="0 0 114.95 42.65"
        >
          <ellipse
            className={watchListCSS.eye}
            cx="20.54"
            cy="21.33"
            rx="20.54"
            ry="21.33"
            fill="#314fae"
          />
          <ellipse
            cx="21.33"
            cy="15.8"
            rx="7.11"
            ry="7.9"
            fill="#e9e9e9"
            opacity="0.86"
          />
          <ellipse
            className={watchListCSS.eye}
            cx="94.41"
            cy="21.33"
            rx="20.54"
            ry="21.33"
            fill="#314fae"
          />
          <ellipse
            cx="95.2"
            cy="15.8"
            rx="7.11"
            ry="7.9"
            fill="#e9e9e9"
            opacity="0.86"
          />
        </svg>
        {list.length === 0 ? (
          <p style={{ backgroundColor: "rgba(189, 55, 55, 0.82)" }}>Empty</p>
        ) : (
          <p style={{ backgroundColor: "rgba(102, 170, 17, 0.68)" }}>
            Total: {list.length}
          </p>
        )}
      </button>

      <Modal
        style={{
          overlay: {
            backgroundColor: "rgba(45, 61, 119, 0.91)",
            width: "100%",
            right: "0",
            left: "0",
            height: "100%",
            bottom: "11rem",
            top: "0",
            display: "grid",
            gridTemplateRows: "5rem 1fr",
            padding: "2rem",
            zIndex: "50"
          }
        }}
        className={watchListCSS.modal}
        ariaHideApp={false}
        isOpen={openClose}
      >
        {" "}
        <button
          className={watchListCSS.close}
          onClick={() => setOpenClose(false)}
        >
          X
        </button>
        {list.length === 0 && (
          <p className={watchListCSS.emptyMessage}>Your watch list is empty!</p>
        )}
        <div className={watchListCSS.itemsBlock}>
          {list.map(item => (
            <div className={watchListCSS.item} key={item.id}>
              <img
                className={watchListCSS.poster}
                src={item.poster}
                alt={`Poster of: ${item.name}`}
              />
              <p>{item.name}</p>
              <Link
                onClick={() => setOpenClose(false)}
                className={watchListCSS.hashLink}
                to={
                  movies.find(movie => item.id === movie.id)
                    ? `/movies#${item.name.replace(/[^A-Z0-9]/gi, "_")}`
                    : `/shows#${item.name.replace(/[^A-Z0-9]/gi, "_")}`
                }
              >
                Visit Profile
              </Link>
              <button
                className={watchListCSS.removeBtn}
                onClick={() => removeSelection({ id: item.id })}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    list: state.selections.list,
    movies: state.selections.movies,
    shows: state.selections.shows
  }
}

const mapDispatchToProps = {
  removeSelection
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchList)
