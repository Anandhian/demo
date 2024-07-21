


import { HiOutlineSearch } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";



//import one from "../assests/images/log2.png"np



import React from 'react'

const Navbar = () => {
  return (
    <div className='  flex  items-center justify-between p-3 bg-gray-950   mt-3  '>
      
      <div>
        <h1 className='text-white md:text-2xl lg:font-bold md:2xl'>Shop Verse</h1>
      </div>
      <div className=' flex '>
        <input className='bg-white sm:w-28 lg:w-96 md:full ' type="text" placeholder="Search your products" />
        <span className=" text-white bg-yellow-600 p-2 rounded outline-none  border border-black">
          <HiOutlineSearch />
        </span>


      </div>
      <div className='text-white flex items-center justify-between gap-6 '>
        <div className=" lg:hidden  md:hidden" >
          <span className="text-2xl"><IoMdMenu /></span>
        
        </div>
        <div className='  hidden lg:block flex flex-col items-center justify-center '>
          <span className="text-2xl" >
            <GrFavorite />

          </span>

          <h1>Favorite</h1>

        </div>
        <div className=' hidden lg:block flex flex-col items-center justify-center'>
          <span className="text-3xl">
            <CiShoppingCart />

          </span>

          <h1>adto card</h1>


        </div>
        <div className=' hidden  lg:block flex flex-col items-center justify-center'>
          <span className="text-2xl">
            <IoMdContact />

          </span>

          <h1>login</h1>


        </div>





      </div>





    </div>
  )
}

export default Navbar





