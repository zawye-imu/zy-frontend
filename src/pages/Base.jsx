import React from 'react'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'

export default function Base() {
  return (
    <>
    <Menu></Menu>
    <Outlet></Outlet>
    </>
  )
}
