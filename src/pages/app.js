import React, { useEffect } from "react"
import "../styles/settings.scss"
import Layout from "../Layout"
import Intro from "../components/Intro"
import MonthlyPicks from "../components/MonthlyPicks"

const App = () => {
  useEffect(() => {
    document.title = "Movsho | Latest & Greatest Movies/Shows"
  })

  return (
    <Layout>
      <Intro />
      <MonthlyPicks />
    </Layout>
  )
}

export default App
