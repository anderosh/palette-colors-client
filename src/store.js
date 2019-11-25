import { createStore, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"

const initialState = {
  topPalettes: [],
  latestPalettes: [],
  randomPictures: [],
  imagePicked: "",
  colorsNewPalette: {}
}

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "GET_TOP_PALETTES":
      return {
        ...state,
        topPalettes: action.payload
      }
    case "GET_LATEST_PALETTES":
      return {
        ...state,
        latestPalettes: action.payload
      }
    case "SET_IMG_PICKED":
      return {
        ...state,
        imagePicked: action.payload
      }
    case "SET_NEW_COLORS":
      return {
        ...state,
        colorsNewPalette: action.payload
      }
    default:
      return state
  }
  // console.log(action);
}

export default createStore(reducer, applyMiddleware(ReduxThunk))
