import React from "react"
import monthlyPickCSS from "../styles/monthlyPick.module.scss"
import MonthlyPick from "./MonthlyPick"
import captainmarvel from "../images/moviePosters/captainMarvel.jpg"
import ourplanet from "../images/showPosters/ourPlanet.jpg"
import ViewAll from "./ViewAll"
import spiderMovsho from "../images/svgs/viewAllMovies.svg"
import carmenSandiegoMovsho from "../images/svgs/viewAllShows.svg"

const MonthlyPicks = () => {
  return (
    <div className={monthlyPickCSS.block}>
      <h1 className={monthlyPickCSS.header}>Movsho's Monthly Picks</h1>

      <div className={monthlyPickCSS.picksBlock}>
        <MonthlyPick
          heading="Movie"
          title="Captain Marvel"
          plot=" Carol Danvers becomes one of the universe's most powerful heroes when
    Earth is caught in the middle of a galactic war between two alien races."
          releaseDate="March 8, 2019"
          selectionType="Movie"
          linkUrl="/movies#Captain_Marvel"
          imgSrc={captainmarvel}
        />

        <ViewAll
          url="/movies"
          linkText="View All Movies"
          imgSrc={spiderMovsho}
        />

        <MonthlyPick
          heading="TV Show"
          title="Our Planet"
          plot="  Documentary series focusing on the breadth of the diversity of
              habitats around the world, from the remote Arctic wilderness and
              mysterious deep oceans to the vast landscapes of Africa and
              diverse jungles of South America."
          releaseDate="April 5, 2019"
          selectionType="TV Show"
          linkUrl="/shows#Our_Planet"
          imgSrc={ourplanet}
        />
        <ViewAll
          url="/shows"
          linkText="View All Shows"
          imgSrc={carmenSandiegoMovsho}
        />
      </div>
    </div>
  )
}

export default MonthlyPicks
