import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{marginBottom: '1rem'}}>
    <p className="p__cormorant"> {title} </p>
    <img src={images.wrench} alt="img_wrench" className="wrench_img"/>
  </div>
);

export default SubHeading;
