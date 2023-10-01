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

import { useTranslation } from 'react-i18next';
import ProjectInfoModal from './ProjectInfoModal';

import { useState } from 'react';

export default function Projects() {

  const {t, i18n} = useTranslation();
  const [modalOpen,setModalOpen] = useState(false);
  const [clickedProject,setClickedProject] = useState("");

  const mock_data = [
    {
      projectName:"Project Management System",
      img: projectMgmt,
      detailInfo: {
        usedLanguage: "django, react, docker, AWS",
        period: "2021 Feb - now",
        type: "subscription based web service",
        duties: "feature development, maintenance, thrid-party API integrations, bug fixes, documentation, infrastructural development",
        membersCount: 6,
        explanation: "I learned a lot from this job and able to level-up my frotend, backend and even system infrastructure knowledge and skills."
      }
    },
    {
      projectName:"NLP - emotion detection from twitter posts using ANN",
      img:  NLP,
      detailInfo: {
        usedLanguage: "flask, python, keras",
        period: "2019 May - 2019 Dec",
        type: "university dessertation",
        duties: "research, write dessertation, comparison between algorithms",
        membersCount: 0,
        explanation: "In this project, I had a chance to learn about AI and NLP and also cultivate my researching skills."
      }
    },
    {
      projectName:"Customized ERP System",
      img: ERP,
      detailInfo: {
        usedLanguage: "PHP YII, Javascript, HTML, CSS, SQL",
        period: "2021 Sep - 2022 Feb",
        type: "development service for clients",
        duties: "customizing the system as the client's needs, solving bugs, maintenance, new features development",
        membersCount: 5,
        explanation: "I had a chance to work at big ERP systems for big clients in Singapore and Malaysia. And also learn a lot about PHP and YII framework."
      }
    },
    {
      projectName:"Odoo Cloud Development",
      img: Odoo,
      detailInfo: {
        usedLanguage: "Python, Odoo XML-RPC, XML",
        period: "2019 Dec - 2020 Dec",
        type: "development service for clients",
        duties: "customizing the system as the client's needs, maintenance, gathering customer's requirements, teaching the system",
        membersCount: 3,
        explanation: "First job after leaving university, and I learn not only the coding side but also the business related part of software development."
      }
    },
    {
      projectName: "Knorr Donation Website",
      img: Knorr,
      detailInfo: {
        usedLanguage: "Hosting, Javascript, HTML, CSS",
        period: "2021 May - 2021 Jul",
        type: "development service for client",
        duties: "developing the website, working together with the design team to meet the needs",
        membersCount: 0,
        explanation: "My first freelance job and I'm very proud that the project is finished in a short period of time without any significant obstacles."
      }
    },
    {
      projectName: "POS website using YII",
      img: YII,
      detailInfo: {
        usedLanguage: "PHP YII, Javascript, HTML, CSS",
        period: "2021 Aug",
        type: "personal project development",
        duties: "developing the website with POS features",
        membersCount: 0,
        explanation: "While learing about YII, developed the POS system and I'm proud that the system is actually usable with plenty of features."
      }
    },
    {
      projectName: "Library Management System",
      img: Library,
      detailInfo: {
        usedLanguage: "Flask, HTML, CSS, SQL",
        period: "around 2019 Oct",
        type: "university's group project",
        duties: "team management, website development, documentation",
        membersCount: 4,
        explanation: "Eventhough this is not a working experience, I had a chance to practice team management principles and performed as a team leader."
      }
    },
    
  ]

  const projectCardOnClick = (projectName) => {
    setClickedProject(mock_data.find(d => d.projectName === projectName));
    setModalOpen(true)
  }

  const modalOnClose =  () => {
    setModalOpen(false);
  }

  return (
    <div>
      <h1 className='font-boola text-2xl my-4'>{t("projectExperiences")}</h1>
      <div className="mt-16 flex flex-wrap justify-center">
              {mock_data.map((d,idx) => 
              <div style={{
                backgroundImage:`url(${d.img})`
              }} 
              className={`projectCard border-solid border-black border-2 w-[250px] h-[280px] m-8 rounded-lg bg-center bg-cover bg-origin-padding bg-no-repeat`}
              onClick={() => projectCardOnClick(d.projectName)}>
              <div className='hiddenText'>{d.projectName}</div>
              </div>
              )}
      </div>
      <ProjectInfoModal modalOpen={modalOpen} modalOnClose={modalOnClose} data={clickedProject}></ProjectInfoModal>
    </div>
  )
}
