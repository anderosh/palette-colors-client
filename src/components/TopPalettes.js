import React, { useEffect } from 'react';
import Palette from './Palette/Palette';
import { connect } from 'react-redux';
import { getTopPalettes } from './serverReq';
import './Palette-container.css';

const TopPalettes = ({ topPalettes, getTopPalettes }) => {
  useEffect(() => {
    getTopPalettes();
  }, []);
  return (
    <div className="Palette-container">
      <h3 className="top-title">
        <i class="fas fa-trophy"></i> Top Palettes
      </h3>
      {topPalettes.slice(0, 6).map(p => (
        <Palette palette={p} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  topPalettes: state.topPalettes
});

const mapDispatchToProps = {
  getTopPalettes
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPalettes);
