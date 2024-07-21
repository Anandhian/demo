import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Image from "../assests/images/banner1.jpg"
import Image1 from "../assests/images/ban5.jpg"
import Image2 from "../assests/images/baner2.jpg"
import Image3 from "../assests/images/ban6.webp"


function Banner() {
  return (
    <div className='relative'>
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} interval={3000}>
    
        <div className='relative'>
            
        <img className='' src={Image} alt='alt image'></img>

        </div>
        <div className='relative'>
            
        <img src={Image1} alt='alt image'></img>

        </div>
        <div className='relative'>
        <img src={Image2} alt='alt image'></img>

        </div>
        <div className='relative'>
        <img src={Image3} alt='alt image'></img>

        </div>

        </Carousel>  
        <div className='w-ful h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20'></div>
       </div>
      
    
  )
}

export default Banner
