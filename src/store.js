import { createStore } from "redux";

const initialState = {
  jugadores: [],
  titulares: [],
  sumplentes: []
};

const reducer = (state = initialState, action) => {
  return state;
};

export default createStore(reducer);
