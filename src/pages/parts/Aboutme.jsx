import React from 'react'
import profileImg from '../../profile_1.png'


export default function Aboutme() {

  return (
    <div className='mt-2'>
      <h1 className='font-boola text-2xl'>About me</h1>
    <div className="w-5/6 m-auto flex md:flex-column static">
      
        <div className="w-4/6 md:w-2/6">
          <img src={profileImg} alt="My Image" className="w-[170px] h-[240px] absolute top-[460px] md:static md:h-full md:w-full" />
        </div>
        <div className="w-2/4 md:w-4/6 font-boola">
          <p className="text-left font-sans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dolore illo, eligendi, nesciunt, quia eaque exercitationem quasi molestiae repellendus eum nam? Sunt est quae quos eveniet quidem veritatis eos id.</p>
        </div>
    </div>
    </div>
  )
}
