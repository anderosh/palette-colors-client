import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import TopPalettes from './components/TopPalettes';
import LatestPalettes from './components/LatestPalettes';
import NewPalette from './components/NewPalette/NewPalette';
import GetColors from './components/GetColors';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Login from './components/Login/Login.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import GetTopPalettes from "./components/calls/Dbcalls.js";

const App = () => (
  <Provider store={store}>
    <Router history={Router}>
      <Header />
      <Route exact path="/" component={TopPalettes} />
      <Route exact path="/" component={LatestPalettes} />
      <Route path="/Login" component={Login} />
      <Route path="/New_Palette" component={NewPalette} />
      <Route path="/Get_Colors" component={GetColors} />
      <Link exact to="Login">
        Login
      </Link>
      <Footer />
    </Router>
  </Provider>
);

export default App;
