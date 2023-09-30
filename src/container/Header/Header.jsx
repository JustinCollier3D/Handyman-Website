import React from 'react';

import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">

    <div className="app__wrapper_info">
      <SubHeading title="Durham's Most Reliable Handyman" />
      <h1 className="app__header-h1"> Harold Collier </h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}> My name is Harold Collier, I'm a handyman that has been servicing Durham Region for over 15 years as well as a licenced plumber and electrician. ~~catchy tagline here~~
      </p>
      <button type="button" onclick = "window.location.href='www.google.com';" className="custom__button" font-family='Arial' font-size='20px'> <a href="tel:+9054095959" > Call Now</a> </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img"/>
    </div>
    
  </div>
);

export default Header;
