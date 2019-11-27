import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './ImagePicker.css';

const ImagePicker = ({ images, imagePicked }) => (
  <div className="container">
    {images &&
      images.length > 0 &&
      images.map(i => (
        <div className="img-picker-container" key={i.id}>
          <img className="image" src={i.urls.small} alt={i.id}></img>
          <Link to="/Get_Colors">
            <button
              className="img-use-button"
              onClick={() => imagePicked(i.urls.small)}
            >
              Get colors
            </button>
          </Link>
        </div>
      ))}
  </div>
);

const mapStateToProps = state => ({
  imagePicked: state.imagePicked,
  colorsNewPalette: state.colorsNewPalette
});

const mapDispatchToProps = dispatch => ({
  imagePicked(url) {
    dispatch({
      type: 'SET_IMG_PICKED',
      payload: url
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagePicker);
