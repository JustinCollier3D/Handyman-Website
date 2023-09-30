import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const Contact = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Get in touch" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Contact</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Durham's Most Reliable Handyman</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }} >(905)-409-5959</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 07:00 pm</p>
        <p className="p__opensans">Sat - Sun: Emergency Calls only</p>
      </div>
      <button type="button" className="call__button" style={{ marginTop: '2rem' }}> <a href="tel:+9054095959" > Call Now </a> </button>


    </div>

    <div className="app__wrapper_img">
      <img src={images.H} alt="..." />
    </div>
  </div>

  
);

export default Contact;