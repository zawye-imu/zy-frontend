import React, {useState} from 'react'


export default function MenuOptions(props) {

  const { handleNavClick } = props;

  const ItemClass = "mr-12 font-boola hover:text-teal-300 hover:cursor-pointer";

  return (
    <div className="flex mr-20">
        <span className={ItemClass}>Home</span>
        <span className={ItemClass} onClick={()=>handleNavClick("about")}>About</span>
        <span className={ItemClass} onClick={()=>handleNavClick("projects")}>Projects</span>
        <span className={ItemClass} onClick={()=>handleNavClick("contact")}>Contact</span>
    </div>
  )
}
