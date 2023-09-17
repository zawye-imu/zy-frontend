import React from 'react'
import NavBar from './parts/NavBar'
import WelcomeText from './parts/WelcomText'
import Aboutme from './parts/Aboutme'
import Projects from './parts/Projects'
import ContactMe from './parts/ContactMe'

import Bg from '../images/background006.jpg'
import { useHookstate } from '@hookstate/core';
import GlobalStateRevised from '../states/GlobalStateRevised'

import { useRef, useEffect } from 'react'

export default function Start() {

  const state = useHookstate(GlobalStateRevised);

  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactMeRef = useRef(null);

  useEffect(()=>{

    aboutMeRef.current = document.getElementById("aboutMe")
    projectsRef.current = document.getElementById("projects")
    contactMeRef.current = document.getElementById("contactMe")

    state.scrollRefs.set({
      aboutMeRef: aboutMeRef,
      projectsRef: projectsRef,
      contactMeRef: contactMeRef,
    })

  },[])

  return (
    <div id="cont">
      <div className="h-[500px] md:h-screen w-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage:`url('${Bg}')`
      }}>
          <NavBar></NavBar>
          <WelcomeText></WelcomeText>
      </div>
      <div id="aboutMe">
        <Aboutme></Aboutme>
      </div>
      <div id="projects">
      <Projects></Projects>
      </div>
      <div id="contactMe">
      <ContactMe></ContactMe>
      </div>
    </div>
  )
}
