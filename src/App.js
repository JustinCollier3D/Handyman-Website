import React from 'react';

import { AboutUs, Harold, FindUs, Footer, Contact, Gallery, Header, Intro, Services } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Services />
    <Contact />
    <Footer />
  </div>
);

export default App;
