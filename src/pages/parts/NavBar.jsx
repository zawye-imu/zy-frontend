import React, {useState} from 'react'
import { Icon } from '@chakra-ui/react'
import {AiOutlineMenu} from 'react-icons/ai'
import {CgMenuMotion} from 'react-icons/cg'

import MenuOptions from './MenuOptions'
import { Button } from '@chakra-ui/react'

import { useTranslation } from 'react-i18next'
import { useBreakpointValue } from '@chakra-ui/media-query';


export default function NavBar() {

  const [menuIconClick,setMenuIconClick] = useState(true);
  const {t, i18n} = useTranslation();

  const buttonSize = useBreakpointValue({ base: 'xs', md: 'sm' });

  const handleOnClick = (event) => {
    setMenuIconClick(!menuIconClick);
  }

  return (
    <div className='relative'>
    <div className="grid grid-cols-2 w-2/3 m-auto">
      <div className='flex mt-6 justify-start'>
        <span className="font-boola  text-3xl">ZawYe</span>
      </div>
      <div className="flex justify-end mt-6">
      {!menuIconClick && <MenuOptions />}
      <Icon className="hover:cursor-pointer" as={menuIconClick ? AiOutlineMenu : CgMenuMotion} onClick={handleOnClick} boxSize={6}></Icon>
      <div className='absolute right-2.5 top-5 md:right-20'>
      <Button onClick={()=>
        {
          if(i18n.language === "en") i18n.changeLanguage("ja")
          else i18n.changeLanguage("en")
        }
        } size={buttonSize}>{i18n.language}</Button>
      </div>
      
      </div>
      
    </div>
    </div>
  )
}
