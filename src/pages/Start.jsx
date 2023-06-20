import React from 'react'
import NavBar from './parts/NavBar'
import WelcomeText from './parts/WelcomText'
import Aboutme from './parts/Aboutme'
import Projects from './parts/Projects'

export default function Start() {

  return (
    <div>
      <div className="h-[500px] md:h-screen w-screen bg-[url('src/background006.jpg')] bg-no-repeat bg-cover">
          <NavBar></NavBar>
          <WelcomeText></WelcomeText>
      </div>
      <Aboutme></Aboutme>
      <Projects></Projects>

    </div>
  )
}
