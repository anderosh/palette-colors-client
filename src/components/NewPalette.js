import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { getRandomPics } from "./calls/Dbcalls";
import ImagePicker from './ImagePicker';

function NewPalette() {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.1.56:3001/new-palette')
      .then(({ data }) => setImgs(data));
  }, []);

  return (
    <main>
      <h2>Random Images</h2>
      <ImagePicker images={imgs} />
      <button name="animals">Animals</button>
      <button name="flowers">Flowers</button>
      <button name="cities">Cities</button>
      <button name="people">People</button>
      <button name="food">Food</button>
      <button name="landscapes">Landscapes</button>
      <button name="textures">Textures</button>
    </main>
  );
}

export default NewPalette;
