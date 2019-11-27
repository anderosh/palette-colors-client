import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getColors, savePalette } from '../../components/serverReq';
import { Link } from 'react-router-dom';
import Palette from '../../components/Palette/Palette';
import './GetColors.css';

const GetColors = ({
  imagePicked,
  getColors,
  colorsNewPalette,
  savePalette
}) => {
  const [paletteName, setPaletteName] = useState('');

  useEffect(() => {
    getColors(imagePicked);
  }, []);

  const handleName = event => {
    setPaletteName(event.target.value);
  };

  const handleSubmit = () => {
    const palette = {
      name: paletteName,
      label: colorsNewPalette,
      colors: colorsNewPalette.tags,
      likes: 0
    };
    savePalette(palette);
  };

  return (
    <div className="container">
      <div className="new-palette">
        <img src={imagePicked}></img>
        <div>
          <h2>{paletteName}</h2>
          {colorsNewPalette &&
            colorsNewPalette.tags &&
            colorsNewPalette.tags.length > 0 && (
              <Palette palette={{ colors: colorsNewPalette.tags }} />
            )}

          <input
            type="text"
            name="paletteName"
            placeholder="Name"
            onChange={handleName}
          ></input>
          <Link to="/">
            <button className="save-palette" onClick={handleSubmit}>
              Save Palette
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  imagePicked: state.imagePicked,
  colorsNewPalette: state.colorsNewPalette
});
const mapDispatchToProps = {
  getColors,
  savePalette
};
export default connect(mapStateToProps, mapDispatchToProps)(GetColors);
