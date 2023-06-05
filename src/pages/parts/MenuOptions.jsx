import React, {useState} from 'react'


export default function MenuOptions() {

  const ItemClass = "mr-12 font-boola hover:text-teal-300 hover:cursor-pointer";

  return (
    <div className="flex mr-20">
        <span className={ItemClass}>Home</span>
        <span className={ItemClass}>About</span>
        <span className={ItemClass}>Projects</span>
        <span className={ItemClass}>Contact</span>
    </div>
  )
}
