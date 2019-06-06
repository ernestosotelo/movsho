import React from "react"
import introCSS from "../styles/intro.module.scss"
import movshoIntro from "../images/svgs/intro.svg"

const Intro = () => {
  return (
    <div className={introCSS.block}>
      <img src={movshoIntro} className={introCSS.image} alt="Movsho" />
      <h1 className={introCSS.title}>
        <i>
          Movsho is your source for{" "}
          <b style={{ color: "#f9ba00" }}>critic recommended shows & movies</b>{" "}
          of the year
        </i>
      </h1>

      <button>How Movsho Works</button>
    </div>
  )
}

export default Intro

/* <div className={introCSS.text}>
          <h2>What does Movsho do?</h2>
          <ul>
            <li>Maintains Only This Year's Best</li>
            <li>Provides 5 Different Ratings</li>
            <li>Lists Information & Trailers</li>
            <li>Lists Video Reviews from Critics</li>
            <li>Lists Streaming Options</li>
            <li>Helps you Decide what to Watch</li>
          </ul>
        </div>
      </div>
      <div className={introCSS.aboutBlock}>
        <h2>How Movsho Works</h2>
        <p>
          Movsho only lists movies & tv shows released on December of the
          previous year, and all of the current year. These movies & shows must
          receive <b>70% or better</b> from at least 3 movie rating entities in
          order to be listed. Movsho allows all shows & movies to be released
          for at least 3 weeks, and enough rating data is available before
          screening a movie or show.{" "}
        </p>
        <h2>Data & Affiliation</h2>
        <p>
          Movsho provides ratings from IMDB, Rotten Tomatoes, Roger Ebert,
          Metacritic, TMDB & IGN, but is not affiliated with any of these
          entities nor any of the movie critics.
        </p>
      </div>  */
