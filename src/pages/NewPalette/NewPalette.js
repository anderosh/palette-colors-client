import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImagePicker from '../../components/ImagePicker/ImagePicker';
import './NewPalette.css';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

function NewPalette() {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/build-new-palette`, {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      .then(({ data }) => setImgs(data));
  }, []);

  const handleBotton = e => {
    const category = e.target.name;
    axios
      .get(`${baseURL}/build-new-palette:${category}`, {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      .then(({ data }) => setImgs(data));
  };

  return (
    <div className="container">
      <div className="search-container">
        <h2>Search by:</h2>
        <div className="buttons-container">
          <button className="button-tag" name="animals" onClick={handleBotton}>
            Animals
          </button>

          <button className="button-tag" name="flowers" onClick={handleBotton}>
            Flowers
          </button>

          <button className="button-tag" name="cities" onClick={handleBotton}>
            Cities
          </button>

          <button className="button-tag" name="people" onClick={handleBotton}>
            People
          </button>

          <button className="button-tag" name="food" onClick={handleBotton}>
            Food
          </button>
          <button
            className="button-tag"
            name="landscapes"
            onClick={handleBotton}
          >
            Landscapes
          </button>
          <button className="button-tag" name="textures" onClick={handleBotton}>
            Textures
          </button>
        </div>
      </div>
      <ImagePicker images={imgs} />
    </div>
  );
}

export default NewPalette;
