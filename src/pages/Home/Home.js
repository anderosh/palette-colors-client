import React from 'react';
import TopPalettes from '../../components/TopPalettes';
import LatestPalettes from '../../components/LatestPalettes';

const Home = () => {
  return (
    <div className="container">
      <div>
        <TopPalettes />
        <LatestPalettes />
      </div>
    </div>
  );
};

export default Home;
