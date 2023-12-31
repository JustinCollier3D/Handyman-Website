import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiHouse } from 'react-icons/gi';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app__logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#services">Services</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>

      <div className="app__navbar-quote">
        <a href="tel:+9054095959" className="p__opensans"> Get A Quote Today</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (

          <div className="app__navbar-smallscreen_overlay flex_center slide-bottom">
            <GiHouse fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />

              <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans>"><a href="#home">Home</a></li>
              <li className="p__opensans>"><a href="#services">Services</a></li>
              <li className="p__opensans>"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>

  );
};

export default Navbar;

