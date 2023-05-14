import React from 'react'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'

export default function Base() {
  return (
    <>
    <Menu></Menu>
    <div>This is there there right.</div>
    <Outlet></Outlet>
    </>
  )
}
