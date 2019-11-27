import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import NewPalette from './pages/NewPalette/NewPalette';
import Home from './pages/Home/Home.js';
import GetColors from './pages/GetColors/GetColors';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Login from './pages/Login/Login';
import MyPalettes from './components/MyPalettes.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import GetTopPalettes from "./components/calls/Dbcalls.js";

const App = () => (
  <Provider store={store}>
    <Router history={Router}>
      <Header />
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/New_Palette" component={NewPalette} />
        <Route path="/Get_Colors" component={GetColors} />
        <Route path="/my_palettes" component={MyPalettes} />
        <Route path="/" component={Home} />
      </Switch>
      <Link exact to="Login">
        Login
      </Link>
      <Footer />
    </Router>
  </Provider>
);

export default App;
