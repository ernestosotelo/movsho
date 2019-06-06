// import React, { useState, useEffect } from "react"
// import Layout from "../Layout"
// import axios from "axios"
// import listingCSS from "../styles/listing.module.scss"
// import Listing from "../components/Listing"
// import TopThree from "../components/TopThree"

// const MoviesPage = () => {
//   const [movies, setMovies] = useState([])

//   useEffect(() => {
//     axios
//       .get(
//         `https://gist.githubusercontent.com/ernestosotelo/9932c659b460e5ddeec8a8ae76164a0d/raw/ce8d7b248f61e73bf3c767538728505d6bac9835/json`
//       )
//       .then(res => {
//         const data = res.data
//         setMovies(data)
//       })
//   }, [])

//   return (
//     <Layout>
//       <div style={{ background: "hsl(215, 100%, 3%" }}>
//         <TopThree />

//         <p style={{ color: "#e0dfe2", fontSize: "1.7rem", marginTop: "3rem" }}>
//           <b
//             style={{
//               padding: ".5rem 1.5rem .5rem 1.5rem",
//               background: "#f9ba00",
//               fontSize: "2rem",
//               marginLeft: "4rem",
//               color: "black"
//             }}
//           >
//             !
//           </b>{" "}
//           Click 'Remove' to remove movies you definitely will not watch! There
//           is an undo option.
//         </p>

//         <div className={listingCSS.block}>
//           {movies.map(movie => {
//             return (
//               <Listing
//                 key={movie.name}
//                 name={movie.name}
//                 plot={movie.plot}
//                 date={movie.releaseDate}
//                 genre={movie.genre}
//                 imdbRating={movie.imdbRating ? movie.imdbRating : "N/A"}
//                 tomatoRating={movie.tomatoRating ? movie.tomatoRating : "N/A"}
//                 metaRating={movie.metaRating ? movie.metaRating : "N/A"}
//                 erbertRating={movie.erbertRating ? movie.erbertRating : "N/A"}
//                 tmdbRating={movie.tmdbRating ? movie.tmdbRating : "N/A"}
//                 movshoRating={movie.movshoRating}
//                 streamOn={movie.streamOn}
//                 poster={movie.poster}
//                 alt={movie.name}
//                 url={"movies/movie-reviews/"}
//               />
//             )
//           })}
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default MoviesPage
