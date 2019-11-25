// import React from 'react';
import axios from "axios"

export function getTopPalettes() {
  return async function(dispatch) {
    try {
      const palettes = await axios.get("http://localhost:3001/top-palettes")
      return dispatch({
        type: "GET_TOP_PALETTES",
        payload: palettes.data
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export function getLatestPalettes() {
  return async function(dispatch) {
    try {
      const palettes = await axios.get("http://localhost:3001/latest-palettes")
      return dispatch({
        type: "GET_LATEST_PALETTES",
        payload: palettes.data
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export function getColors(urlImg) {
  return async function(dispatch) {
    try {
      const colors = await axios.post("http://localhost:3001/get-colors", {
        data: {
          url: urlImg
        }
      })
      return dispatch({
        type: "SET_NEW_COLORS",
        payload: colors.data
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export function savePalette(palette) {
  return async function() {
    try {
      await axios.post("http://localhost:3001/new-palette", {
        data: {
          palette
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
}

// export function getRandomPics() {
//   return async function() {
//     try {
//       const urlPics = await axios.get("http://localhost:3001/new-palette");
//       console.log(urlPics);
//       return urlPics;
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }
