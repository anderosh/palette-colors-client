import React from 'react';
import logo from './img/colorSceneLogo.png';
import './Header.css';

const Header = () => (
  <header>
    <div>
      <a href="/">
        <img src={logo} alt="ColorScene logo" className="logo" />
      </a>
    </div>
    <nav className="navigator">
      <ul>
        <li>
          <a href="#">Perfil</a>
        </li>
        <li>
          <a href="/my_palettes">My Palettes</a>
        </li>
        <li>
          <a href="/New_Palette" className="New-palette">
            NEW PALETTE!
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
