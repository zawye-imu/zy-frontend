import React, {useState} from 'react'
import { Icon } from '@chakra-ui/react'
import {AiOutlineMenu} from 'react-icons/ai'
import {CgMenuMotion} from 'react-icons/cg'

import MenuOptions from './MenuOptions'


export default function NavBar() {

  const [menuIconClick,setMenuIconClick] = useState(true);

  const handleOnClick = (event) => {
    setMenuIconClick(!menuIconClick);
  }

  return (
    <div className="grid grid-cols-2 w-2/3 m-auto">
      <div className='flex mt-6 justify-start'>
        <span className="font-boola  text-3xl">ZawYe</span>
        </div>
      <div className="flex justify-end mt-6">
      {!menuIconClick && <MenuOptions />}
      <Icon className="hover:cursor-pointer" as={menuIconClick ? AiOutlineMenu : CgMenuMotion} onClick={handleOnClick} boxSize={6}></Icon>
      </div>
    </div>
  )
}
