import React from 'react';

import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">

    <div className="app__wrapper_info">
      <SubHeading title="Durham's Most Reliable Handyman" />
      <h1 className="app__header-h1"> Harold Collier </h1>
    </div>

    <div className="app__wrapper_img">
      
    </div>
    
  </div>
);

export default Header;
