import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ImagePicker = ({ images, imagePicked }) => (
  <div>
    {images &&
      images.length > 0 &&
      images.map(i => (
        <div key={i.id}>
          <img src={i.urls.small} alt={i.id}></img>
          <Link to="/Get_Colors">
            <button onClick={() => imagePicked(i.urls.small)}>Use!</button>
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
