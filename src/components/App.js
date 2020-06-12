import React from "react"
import HappyMessage from "./HappyMessage"
import Header from "./Header"
import Image from "./Image"
import RonList from "./RonList"

const App = () => {
  return (
    <div className="container">
    <RonList />
    <Header />
    <HappyMessage />
    <Image />
    </div>
  )
}


export default App