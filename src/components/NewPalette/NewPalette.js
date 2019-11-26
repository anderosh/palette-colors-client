import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImagePicker from '../ImagePicker/ImagePicker';
import './NewPalette.css';

const handleBotton = e => {
  console.log(e.target.name);
};

function NewPalette() {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.1.56:3001/new-palette')
      .then(({ data }) => setImgs(data));
  }, []);

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
        <h2 className="random-img">Random Images</h2>
      </div>
      <ImagePicker images={imgs} />
    </div>
  );
}

export default NewPalette;
