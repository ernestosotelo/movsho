import React, { useState, useEffect } from "react"
import Layout from "../Layout"
import axios from "axios"
import reviewCSS from "../styles/videoreview.module.scss"

const MovieReviewsPage = props => {
  const name = props.match.params.name
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    document.title = `Video Review | ${name}`
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&publishedAfter=2018-10-01T00%3A00%3A00Z&q=${name} - Movie "Review"&safeSearch=strict&type=video&videoDuration=medium&key=AIzaSyDU_Gm43-NzrWL28NCCvlZ30ioPBoeakgU`
      )
      .then(res => {
        const data = res.data
        setReviews(data["items"])
      })
  }, [name])

  console.log(reviews)

  return (
    <Layout>
      <div className={reviewCSS.block}>
        <h1>Video Reviews for: {name}</h1>

        {reviews.map(review => {
          return (
            <div className={reviewCSS.videosBlock}>
              <div key={review["snippet"].channelId}>
                <h2>Reviewed by: {review["snippet"].channelTitle}</h2>
                <iframe
                  allowfullscreen="allowfullscreen"
                  mozallowfullscreen="mozallowfullscreen"
                  msallowfullscreen="msallowfullscreen"
                  oallowfullscreen="oallowfullscreen"
                  webkitallowfullscreen="webkitallowfullscreen"
                  title={`Video review of ${name} by ${
                    review["snippet"].channelTitle
                  }`}
                  width="420"
                  height="315"
                  src={`https://www.youtube.com/embed/${review["id"].videoId}`}
                />
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default MovieReviewsPage
