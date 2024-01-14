import React from 'react'
import pic from '../assets/aqeel_pic.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'





export default function Home() {
  return (
    <>
  
    <div name="Home" className="w-full h-screen bg-gradient-to-b from-gray-800 via-black to-black ">
       

         <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full '>
                <h2 className='text-2xl sm:text-6xl font-bold text-white '>Hi, I'm  
                AQEEL</h2>
                <p className='text-gray-500 py-4 max-w-md italic font-bold text-lg'>
                    I have an experience of building Web and Mobile applications. Currently, I'm a Front-End Developer.
                </p>
                <div>
                    <Link to='Portfolio' smooth duration={500} className='group text-white text-lg  w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
                        PortFolio
                        <span className='group-hover:rotate-90 duration-300' >
                        <MdKeyboardArrowRight size={25} className='ml-1'/>
                            </span>
                    </Link>
                </div>
                
            </div>
            <div >
                    <img src={pic} alt="MY-Profile" className='rounded-2xl mx-auto w-2/3 md:w-full  '/>
                </div>
         </div>
    </div>
    </>
  )
}