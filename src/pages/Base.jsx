import React from 'react'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'

export default function Base() {
  return (
    <>
    <Menu></Menu>
    <div>
      Font test <br />
      <p className='font-neuFace'>Neutral Face</p>
      <p className='font-sans'>Sans</p>
      <p className='font-serif'>Serif</p>
      <p className='font-mono'>Mono</p>
    </div>
    <Outlet></Outlet>
    </>
  )
}
