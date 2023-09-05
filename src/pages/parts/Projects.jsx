import React from 'react'
import "../styles/projectStyle.css";
import ERP from "../../images/ERP.png"

export default function Projects() {

  const mock_data = [
    {
      projectName:"Project Management System",
      img: ""
    },
    {
      projectName:"NLP - emotion detection from twitter posts using ANN",
      img: ""
    },
    {
      projectName:"Customized ERP System",
      img: ERP
    },
    {
      projectName:"Odoo Cloud Development",
      img: "logo512.png"
    },
    {
      projectName: "Knorr Donation Website",
      img: "src/images/Knorr.jpg"
    },
    {
      projectName: "POS website using YII",
      img: ""
    },
    {
      projectName: "Library Management System",
      img: ""
    },
    
  ]

  return (
    <div>
      <h1 className='font-boola text-2xl my-4'>Projects & Experiences</h1>
      <div className="mt-16 w-10/12 m-auto flex flex-wrap items-center">
              {mock_data.map((d,idx) => 
              <div className={`projectCard border-solid border-black border-2 w-[250px] h-[280px] m-8 rounded-lg bg-center bg-cover bg-origin-padding`  + ` bg-[url('${d.img}')]`}>
              <div className='hiddenText'>{d.projectName}</div>
              </div>
              )}
      </div>
    </div>
  )
}
