import React, {useState} from 'react'
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';
import { Button } from '@chakra-ui/react';



export default function WelcomeText() {

  const textStyle1 = "font-boola text-4xl md:text-8xl  leading-tight"
  const extraStyle1 = " opacity-50"

  const {t, i18n} = useTranslation();

  return (
    <div className="flex mt-32 justify-center">
      <div className="text-left">
        <p className={textStyle1 + extraStyle1}>HI!</p>
        <p className={textStyle1}>{t("description.introduction")}</p>
        <p className={textStyle1}> Zaw Ye Htet Naing</p>
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
              .typeString("<span class='text-xl md:text-4xl  leading-loose'> &#127911; &#127864; </span> ")
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
