import React from "react"
import Layout from "../Layout"
import Intro from "../components/Intro"
import MonthlyPicks from "../components/MonthlyPicks"
import ViewAll from "../components/ViewAll"

const App = () => (
  <Layout>
    <Intro />
    <MonthlyPicks />
    <ViewAll />
  </Layout>
)

export default App
