import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import WatchList from "./components/WatchList"

const Layout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <WatchList />
    <Footer />
  </div>
)

export default Layout
