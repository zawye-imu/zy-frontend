import React from 'react'
import profileImg from '../../profile_1.png'


export default function Aboutme() {

  return (
    <div className='mt-2'>
      <h1 className='font-boola text-2xl my-4'>About me</h1>
    <div className="w-5/6 m-auto flex md:flex-column static">
      
        <div className="w-4/6 md:w-2/6">
          <img src={profileImg} alt="My Image" className="w-[170px] h-[240px] md:static md:h-full md:w-full" />
        </div>
        <div className="w-2/4 md:w-4/6 font-boola text-xs md:text-base">
          <p className="text-left font-sans">Welcome to my portfolio website!<br /><br />I'm Zaw Ye Htet Naing, a software engineer. Here, you will find a glimpse of my 
          professional world.<br /> <br />
          With a mind for continuous learning, I am always looking to fill this place with more awesome projects. Explore my projects and let's connect to create something awesome together. 
          Hope you enjoy your stay here.
          <br /><br />
          Best Regards, <br />
          <i>Zaw</i>

          </p>
          <div className="mt-6 flex justify-around">CV, Linkedin</div>
        </div>
        
    </div>
    </div>
  )
}
