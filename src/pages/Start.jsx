import React from 'react'
import NavBar from './parts/NavBar'
import WelcomeText from './parts/WelcomText'
import Aboutme from './parts/Aboutme'
import Projects from './parts/Projects'
import ContactMe from './parts/ContactMe'

import Bg from '../images/background006.jpg'

export default function Start() {

  return (
    <div>
      <div className="h-[500px] md:h-screen w-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage:`url('${Bg}')`
      }}>
          <NavBar></NavBar>
          <WelcomeText></WelcomeText>
      </div>
      <Aboutme></Aboutme>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  )
}
