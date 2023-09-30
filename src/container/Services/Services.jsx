import React from 'react';

import { images } from '../../constants';
import './Services.css';

const Services = () => (
  <div className="app__services app__bg flex__center section__padding" id="services">

    <div className="app__services-overlay flex__center">
      {/*<img src={images.logo_transparent} alt="Background Letter"/>*/}
    </div>

    <div className="app__services-content flex__center">

      <div className="app__services-content_services">
        <h1 className="headtext__cormorant">Services</h1>
        <img src={images.wrench} alt="services_wrench" className="wrench_img"/>
        <p className="p__opensans"> I offer a variety of handyman services across the Durham Region. Some of these services include:</p>
        <ul className='app__services_list'>

          <li className="app__services_list_item"> Electrical Troubleshooting / Installations</li>
          <li className="app__services_list_item"> Plumbing Maintenence / Installation</li>
          <li className="app__services_list_item"> Handyman Repairs </li>
          <li className="app__services_list_item"> Small Home Projects </li>

        </ul>

      </div>

    <div className="app__services-content_wrench flex__center">
      <img src={images.plumber_wrench} alt="services_plumber_wrench"/>
    </div>

    <div className="app__services-content_services_2">
        <h1 className="headtext__cormorant">Availability</h1>
        <img src={images.wrench} alt="services_wrench" className="wrench_img"/>
        <p className="p__opensans"> I am available year round from Mon-Fri every week, I have also been known to take emergency calls on weekends if you ever find yourself in a tight spot with no one to call!</p>
    </div>
    

    </div>
  </div>
);

export default Services;
