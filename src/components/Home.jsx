import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link } from 'react-scroll';
 

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
         {/* Container */}
         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#FFFF33] font-bold'>
                Hi, my name is
            </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                Netravati Nittali
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                I'm a Full Stack Developer.
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I’m a full-stack developer specializing in building 
                exceptional digital experiences. Currently, I’m focused on
                building responsive full-stack web applications.
            </p>
            <div>
                <Link to='work' smooth
              duration={500}
              className="group text-white border-2 hover:bg-[#FFFF33] hover:border-[#FFFF33] hover:text-black hover:font-bold  w-fit px-6 py-3 my-2 flex items-center cursor-pointer"
            >
                    View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 ' />
                    </span>
                </Link>
                
            </div>
         </div>
    </div>
  )
}

export default Home