import React from "react"
import monthlyPickCSS from "../styles/monthlyPick.module.scss"
import captainmarvel from "../images/moviePosters/captainMarvel.jpg"
import ourplanet from "../images/showPosters/ourPlanet.jpg"

const MonthlyPicks = () => {
  return (
    <div className={monthlyPickCSS.block}>
      <h1 className={monthlyPickCSS.header}>Movsho's Monthly Picks</h1>

      <div className={monthlyPickCSS.picksBlock}>
        <div className={monthlyPickCSS.selectionBlock}>
          <h2 className={monthlyPickCSS.subHeader}>Movie</h2>
          <div className={monthlyPickCSS.info}>
            <h3 className={monthlyPickCSS.title}>Captain Marvel</h3>
            <p className={monthlyPickCSS.plot}>
              Carol Danvers becomes one of the universe's most powerful heroes
              when Earth is caught in the middle of a galactic war between two
              alien races.
            </p>
            <p className={monthlyPickCSS.releaseDate}>
              <b>Release Date:</b> March 8, 2019
            </p>

            <button>View Profile</button>
          </div>
          <img src={captainmarvel} />
        </div>

        <div className={monthlyPickCSS.selectionBlock}>
          <h2 className={monthlyPickCSS.subHeader}>TV Show</h2>
          <div className={monthlyPickCSS.info}>
            <h3 className={monthlyPickCSS.title}>Our Planet</h3>
            <p className={monthlyPickCSS.plot}>
              Documentary series focusing on the breadth of the diversity of
              habitats around the world, from the remote Arctic wilderness and
              mysterious deep oceans to the vast landscapes of Africa and
              diverse jungles of South America.
            </p>
            <p className={monthlyPickCSS.releaseDate}>
              <b>Release Date:</b> April 5, 2019
            </p>

            <button>View Profile</button>
          </div>
          <img src={ourplanet} />
        </div>
      </div>
    </div>
  )
}

export default MonthlyPicks
