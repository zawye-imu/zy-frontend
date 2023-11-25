import React, {useState} from 'react'
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';
import { Button } from '@chakra-ui/react';



export default function WelcomeText() {

  const textStyle1 = "font-boola text-4xl md:text-7xl  leading-tight";
  const textStyle2 = "font-boola text-4xl md:text-6xl  leading-tight";
  const extraStyle1 = " opacity-50"
  const {t, i18n} = useTranslation();


  const welcomeTextGenerator = () => {
    // Change base on time
    const now = new Date();
    const hour = now.getHours();

    if(hour > 5 && hour < 12)
    {
      return t("goodMorning")
    }
    else if(hour > 12 && hour < 23)
    {
      return t("goodEvening")
    }
    else if(hour > 23 && hour <5)
    {
      return t("goodNight")
    }
    
    return "Hi!"
  }

  

  return (
    <div className="flex mt-32 justify-center">
      <div className="text-left">
        <p className={textStyle2 + extraStyle1}>{welcomeTextGenerator()}</p>
        <p className={textStyle2}>{t("description.introduction")}</p>
        <p className={textStyle1}> {t("myName")}</p>
        <br />
        <Typewriter
            options={{
                loop: true,
              }}
            onInit={(typewriter) => {
              typewriter
              .typeString("<span class='text-xl md:text-4xl leading-loose'>Full-stack Web Developer &#128187;</span> ")
              .pauseFor(3000)
              .deleteAll()
              .typeString("<span class='text-xl md:text-4xl  leading-loose'>Tech Enthusiast &#9995;</span> ")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-xl md:text-4xl  leading-loose'> Nice to meet you here! </span> ")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(4000)
              .start()
            }}
          />
      </div>
        
    </div>
  )
}
