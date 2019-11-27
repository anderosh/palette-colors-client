import React, { useEffect } from 'react';
import Palette from './Palette/Palette';
import { connect } from 'react-redux';
import { getMyPalettes } from './serverReq';
import './Palette-container.css';

const MyPalettes = ({ myPalettes, getMyPalettes }) => {
  useEffect(() => {
    getMyPalettes();
  }, []);
  return (
    <div className="container">
      <h3 className="top-title">My palettes</h3>
      {myPalettes.slice(0, 6).map(p => (
        <Palette palette={p} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  myPalettes: state.myPalettes
});

const mapDispatchToProps = {
  getMyPalettes
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPalettes);
