import React from 'react'
import NavBar from './parts/NavBar'
import WelcomeText from './parts/WelcomText'

export default function Start() {

  return (
    <div className="h-screen w-screen bg-[url('src/background006.jpg')] bg-no-repeat bg-cover">
        <NavBar></NavBar>
        <WelcomeText></WelcomeText>
    </div>
  )
}
