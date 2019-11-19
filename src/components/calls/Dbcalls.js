import React from "react";
const axios = require("axios");

export function getTopPalettes() {
  return async function(dispatch) {
    try {
      const palettes = await axios.get("http://localhost:3001/top-palettes");
      return dispatch({
        type: "GET_TOP_PALETTES",
        payload: palettes.data
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getLatestPalettes() {
  return async function(dispatch) {
    try {
      const palettes = await axios.get("http://localhost:3001/latest-palettes");
      return dispatch({
        type: "GET_LATEST_PALETTES",
        payload: palettes.data
      });
    } catch (error) {
      console.error(error);
    }
  };
}
