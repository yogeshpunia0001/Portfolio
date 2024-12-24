import React from 'react'
import pic from '../../public/roundphoto.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandGmail } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
const Home = () => {
  return (
    <div name='Home' className=' max-w-screen-2xl container mx-auto px-4 md:px-6 my-20 ' >
      <div className='flex flex-col md:flex-row'>
        {/* LEFT */}
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className='text-xl'>Welcome to my feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl '><h1>Hello, I am a</h1>
        {/* <span className='text-red-700'>Developer</span> */}
        <ReactTyped className='text-red-700'
          
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={20}
          loop={true}
        />
        </div>
         <br />
        <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque adipisci quasi amet. Doloribus dolorum nobis suscipit laborum? Unde ipsum ratione harum fugit saepe similique nobis debitis praesentium ab quaerat.</p>
        <br />
        <div className='flex flex-col items-center md:flex-row md:justify-between space-y-2'>
        <div className='space-y-2 '>
          <h1 className='font-bold'>Available On</h1>
          <div >
              <ul className='flex space-x-2'>
              <li>
               
                <a href="https://www.linkedin.com/in/yogeshkumar0001/" target='blank'><FaLinkedin className='text-xl md:text-3xl hover:scale-110 cursor-pointer'/></a>
              </li>
              <li>
              <a href="https://www.instagram.com/" target='blank'><AiFillInstagram className='text-xl md:text-3xl hover:scale-110 cursor-pointer'/></a>
              </li>
              <li>
              <a href="https://mail.google.com/" target='blank'><TbBrandGmail className='text-xl md:text-3xl hover:scale-110 cursor-pointer'/></a>              
              </li>              
            </ul>
          </div>
        </div>
        <div className='space-y-2 '>
          <h1 className='font-bold '> Currently Working On</h1>
          <div className='flex space-x-6 '>
            <SiMongodb className='text-xl md:text-3xl hover:scale-110 cursor-pointer' />
            <SiExpress className='text-xl md:text-3xl hover:scale-110 cursor-pointer' />
            <FaReact className='text-xl md:text-3xl hover:scale-110 cursor-pointer' />
            <FaNodeJs className='text-xl md:text-3xl hover:scale-110 cursor-pointer' />

          </div>
        </div>
        </div>
        </div>
        {/* RIGHT */}
        <div className='md:w-1/2 md:mt-20 md:ml-32 order-1 md:order-2'>
        <img src={pic} className='rounded-full md:w-[450px] md:h-[250px]' alt="" /></div>
      </div>
      <hr />
    </div>
    

  )
}

export default Home