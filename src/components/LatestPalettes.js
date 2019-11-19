import React, { useEffect } from "react";
import Palette from "./Palette";
import { connect } from "react-redux";
import { getLatestPalettes } from "./calls/Dbcalls";

const LatestPalettes = ({ latestPalettes, getLatestPalettes }) => {
  useEffect(() => {
    getLatestPalettes();
  }, []);
  return (
    <section>
      <h2>Latest Palettes</h2>
      <Palette palette={latestPalettes} />
    </section>
  );
};

const mapStateToProps = state => ({
  latestPalettes: state.latestPalettes
});

const mapDispatchToProps = {
  getLatestPalettes
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestPalettes);
