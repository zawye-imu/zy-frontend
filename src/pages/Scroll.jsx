import React from 'react'
import './styles/scrollStyles.css';

export default function Scroll() {
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

  return (
    <div style={{height:"1500px"}}>
    <div className="progress"></div>
        <div className="cube-wrap">
        <div className="cube">
            <div className="side top"></div>
            <div className="side bottom"></div>
            <div className="side front"></div>
            <div className="side back"></div>
            <div className="side left"></div>
            <div className="side right"></div>
        </div>
    </div>
    </div>
  )
}
