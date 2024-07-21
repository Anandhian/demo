import React from 'react'
import Home from './compoents/home'
import "react-responsive-carousel/lib/styles/carousel.min.css";


import Headerbottom from './compoents/headerbottom';
import Banner from './compoents/banner';

import Navbar from './compoents/navbar'; 


function App() {


  
  return (
    <div>
      <Home></Home>
      <Navbar></Navbar>
        <Headerbottom></Headerbottom>
        <Banner></Banner>
     
     
      

    </div>
  )
}

export default App

