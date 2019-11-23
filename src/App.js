import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import TopPalettes from './components/TopPalettes';
import LatestPalettes from './components/LatestPalettes';
import NewPalette from './components/NewPalette';
import GetColors from './components/GetColors';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import GetTopPalettes from "./components/calls/Dbcalls.js";

const App = () => (
  <Provider store={store}>
    <Router history={Router}>
      <Route exact={true} path="/" component={TopPalettes} />
      <Route exact={true} path="/" component={LatestPalettes} />
      <Route path="/New_Palette" component={NewPalette} />
      <Route path="/Get_Colors" component={GetColors} />
      <Link to="New_Palette">Create new palette</Link>
    </Router>
  </Provider>
);

export default App;
