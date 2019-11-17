import { createStore } from "redux"

const initialState = {
  topPalettes: [],
  latestPalettes: [],
  randomPictures: []
}

const reducer = (state = initialState, action) => {
  return state
}

export default createStore(reducer)
