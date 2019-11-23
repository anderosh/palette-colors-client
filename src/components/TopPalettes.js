import React, { useEffect } from 'react';
import Palette from './Palette/Palette';
import { connect } from 'react-redux';
import { getTopPalettes } from './serverReq';

const TopPalettes = ({ topPalettes, getTopPalettes }) => {
  useEffect(() => {
    getTopPalettes();
  }, []);
  return (
    <section>
      <h2>Top Palettes</h2>
      <Palette palette={topPalettes} />
    </section>
  );
};

const mapStateToProps = state => ({
  topPalettes: state.topPalettes
});

const mapDispatchToProps = {
  getTopPalettes
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPalettes);
