import React from 'react'
import "../styles/projectStyle.css";
import ERP from "../../images/ERP.png"

export default function Projects() {

  const mock_data = [
    {
      projectName:"Project Management System",
      img: "src/images/project_mgmt.png"
    },
    {
      projectName:"NLP - emotion detection from twitter posts using ANN",
      img: "src/images/NLP.png"
    },
    {
      projectName:"Customized ERP System",
      img: "src/images/ERP.png"
    },
    {
      projectName:"Odoo Cloud Development",
      img: "src/images/Odoo.png"
    },
    {
      projectName: "Knorr Donation Website",
      img: "src/images/Knorr.jpg"
    },
    {
      projectName: "POS website using YII",
      img: "src/images/YII.jpg"
    },
    {
      projectName: "Library Management System",
      img: "src/images/library_mgmt.jpg"
    },
    
  ]

  return (
    <div>
      <h1 className='font-boola text-2xl my-4'>Projects & Experiences</h1>
      <div className="mt-16 w-10/12 m-auto flex flex-wrap items-center">
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
