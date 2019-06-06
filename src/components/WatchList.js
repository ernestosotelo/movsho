import React, { useState } from "react"
import { connect } from "react-redux"
import watchListCSS from "../styles/watchList.module.scss"
import Modal from "react-modal"
import "../styles/watchList.module.scss"
import { removeSelection } from "../actions/selections"

const WatchList = ({ removeSelection, list }) => {
  const [openClose, setOpenClose] = useState(false)

  const handleList = () => {}

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
        {list.length === 0 ? <p>Empty List</p> : <p>Total: {list.length}</p>}
      </button>

      <Modal
        className={watchListCSS.modal}
        style={{
          overlay: {
            left: "75%",
            bottom: "6.2rem",
            top: "40rem",
            zIndex: "100",
            backgroundColor: "#d89c1c73"
          }
        }}
        ariaHideApp={false}
        isOpen={openClose}
        contentLabel="Minimal Modal Example"
      >
        {" "}
        <button onClick={() => setOpenClose(false)}>X</button>
        {list.length === 0 && (
          <p className={watchListCSS.emptyMessage}>
            Your watch list is empty! Click the 'Watch List' button to add to
            your list.
          </p>
        )}
        <div style={{ display: "flex" }}>
          {list.map(item => (
            <div style={{ maxWidth: "5rem" }} key={item.id}>
              <p>{item.name}</p>
              <img
                style={{ width: "5rem" }}
                src={item.poster}
                alt={`Poster of: ${item.name}`}
              />
              <button onClick={() => removeSelection({ id: item.id })}>
                X
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
    list: state.list
  }
}

const mapDispatchToProps = {
  removeSelection
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchList)
