import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

const initialState = {
  topPalettes: [],
  latestPalettes: [],
  randomPictures: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOP_PALETTES":
      return {
        ...state,
        topPalettes: action.payload
      };
    case "GET_LATEST_PALETTES":
      return {
        ...state,
        latestPalettes: action.payload
      };
    default:
      return state;
  }
  // console.log(action);
};

export default createStore(reducer, applyMiddleware(ReduxThunk));
