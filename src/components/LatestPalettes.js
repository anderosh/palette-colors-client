import React, { useEffect } from 'react';
import Palette from './Palette/Palette';
import { connect } from 'react-redux';
import { getLatestPalettes } from './serverReq';
import './Palette-container.css';

const LatestPalettes = ({ latestPalettes, getLatestPalettes }) => {
  useEffect(() => {
    getLatestPalettes();
  }, []);
  return (
    <div className="Palette-container">
      <h3 className="top-title">
        <i class="fas fa-stopwatch"></i> Latest Palettes
      </h3>
      {latestPalettes.slice(0, 6).map(p => (
        <Palette palette={p} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  latestPalettes: state.latestPalettes
});

const mapDispatchToProps = {
  getLatestPalettes
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestPalettes);
