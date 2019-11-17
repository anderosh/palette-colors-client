import React from "react"
import { Provider } from "react-redux"
import store from "./store.js"
import TopPalettes from "./components/TopPalettes"
import LatestPalettes from "./components/LatestPalettes"

const App = () => (
  <Provider store={store}>
    <main>
      <TopPalettes />
      <LatestPalettes />
    </main>
  </Provider>
)

export default App
