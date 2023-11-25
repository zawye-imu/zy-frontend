import React from 'react'
import profileImg from '../../profile_1.png'
import LinkedInImg from '../../images/linkedin.png';
import githubImg2 from '../../images/github2.jpg';
import cvImg from '../../images/cv.png';
import { useTranslation } from 'react-i18next';

export default function Aboutme() {
  const {t, i18n} = useTranslation();
  return (
    <div className='mt-2'>
      <h1 className='font-boola text-2xl my-4'>About me</h1>
    <div className="w-5/6 m-auto flex md:flex-column static">
      
        <div className="w-4/6 md:w-2/6">
          <img src={profileImg} alt="My Image" className="w-[170px] h-[240px] md:static md:h-full md:w-full" />
        </div>
        <div className="w-2/4 md:w-4/6 font-boola text-xs md:text-base">
          <p className="text-left font-sans" dangerouslySetInnerHTML={{ __html: t("aboutMe") }}>
          </p>
          <div className="mt-6 flex flex-start justify-start items-center">
            
          <img src={cvImg} alt='cv' className='w-8 h-8 mr-8 hover:cursor-pointer' onClick={()=>{
            window.open("https://2018416e-28a1-4020-be3c-c5deefebfcf5.filesusr.com/ugd/66b817_8d6a3941793c4349a5711f3b7cafd055.pdf","_blank")
          }}>
          </img> 
          <img src={LinkedInImg} className='w-6 h-6 mr-8 hover:cursor-pointer' onClick={()=>{
            window.open("https://www.linkedin.com/in/zawyehtetnaing/","_blank")
          }}></img>
          <img src={githubImg2} className='w-6 h-6 mr-8 hover:cursor-pointer' onClick={()=>{
            window.open("https://github.com/zawye-imu","_blank")
          }}></img>
          </div>
        </div>
        
    </div>
    </div>
  )
}
