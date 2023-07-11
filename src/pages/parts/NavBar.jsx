import React, {useState} from 'react'
import { Icon } from '@chakra-ui/react'
import {AiOutlineMenu} from 'react-icons/ai'
import {CgMenuMotion} from 'react-icons/cg'

import MenuOptions from './MenuOptions'
import { Button } from '@chakra-ui/react'

import { useTranslation } from 'react-i18next'
import { useBreakpointValue } from '@chakra-ui/media-query';
import { useMediaQuery } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'


export default function NavBar() {

  const [menuIconClick,setMenuIconClick] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {t, i18n} = useTranslation();

  const buttonSize = useBreakpointValue({ base: 'xs', md: 'sm' });

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  const handleOnClick = (event) => {
    if(isLargerThan800)
    {
      setMenuIconClick(!menuIconClick);
    }
    else{
      onOpen();
    }
    

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
    <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody className='flex flex-col font-boola m-2'>
            <a>About</a>
            <a>Projects</a>
            <a>Contacts</a>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
