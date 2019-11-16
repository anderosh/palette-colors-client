import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Top Palettes</h1>
      <TopPalettes />
      <h1>Latest Palettes</h1>
      <LatestPalettes />
    </main>
  </Provider>
);

export default App;
