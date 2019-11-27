// import React from 'react';
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export function getMyPalettes() {
  return async function(dispatch) {
    try {
      const palettes = await axios({
        method: 'get',
        url: `${baseURL}/my-palettes`,
        data: {},
        headers: {
          authorization: localStorage.getItem('token')
        }
      });
      return dispatch({
        type: 'GET_MY_PALETTES',
        payload: palettes.data
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getTopPalettes() {
  return async function(dispatch) {
    try {
      const palettes = await axios.get(`${baseURL}/top-palettes`);
      return dispatch({
        type: 'GET_TOP_PALETTES',
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
      const palettes = await axios.get(`${baseURL}/latest-palettes`);
      return dispatch({
        type: 'GET_LATEST_PALETTES',
        payload: palettes.data
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getColors(urlImg) {
  return async function(dispatch) {
    try {
      const colors = await axios.post(`${baseURL}/get-colors`, {
        headers: {
          authorization: localStorage.getItem('token')
        },
        data: {
          url: urlImg
        }
      });
      return dispatch({
        type: 'SET_NEW_COLORS',
        payload: colors.data
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function savePalette(palette) {
  return async function() {
    try {
      await axios({
        method: 'post',
        url: `${baseURL}/new-palette`,
        data: {
          palette
        },
        headers: {
          authorization: localStorage.getItem('token')
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function loginReq({ email, password }) {
  return async function() {
    try {
      await axios
        .post(`${baseURL}/login`, {
          data: {
            email,
            password
          }
        })
        .then(function({ data }) {
          if (data.auth) {
            localStorage.setItem('token', data.token);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };
}
