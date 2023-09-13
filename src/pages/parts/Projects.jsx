import React from 'react'
import "../styles/projectStyle.css";

// Images
import ERP from "../../images/ERP.png"
import projectMgmt from "../../images/project_mgmt.png"
import NLP from "../../images/NLP.png"
import Odoo from "../../images/Odoo.png"
import Knorr from "../../images/Knorr.jpg"
import YII from "../../images/YII.jpg"
import Library from "../../images/library_mgmt.jpg"

export default function Projects() {

  const mock_data = [
    {
      projectName:"Project Management System",
      img: projectMgmt
    },
    {
      projectName:"NLP - emotion detection from twitter posts using ANN",
      img:  NLP
    },
    {
      projectName:"Customized ERP System",
      img: ERP
    },
    {
      projectName:"Odoo Cloud Development",
      img: Odoo
    },
    {
      projectName: "Knorr Donation Website",
      img: Knorr
    },
    {
      projectName: "POS website using YII",
      img: YII
    },
    {
      projectName: "Library Management System",
      img: Library
    },
    
  ]

  return (
    <div>
      <h1 className='font-boola text-2xl my-4'>Projects & Experiences</h1>
      <div className="mt-16 flex flex-wrap justify-center">
              {mock_data.map((d,idx) => 
              <div style={{
                backgroundImage:`url(${d.img})`
              }} 
              className={`projectCard border-solid border-black border-2 w-[250px] h-[280px] m-8 rounded-lg bg-center bg-cover bg-origin-padding bg-no-repeat`}>
              <div className='hiddenText'>{d.projectName}</div>
              </div>
              )}
      </div>
    </div>
  )
}
