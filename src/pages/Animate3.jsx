import React from 'react'
import { animated, useSpring, useScroll } from '@react-spring/web'

export default function Animate3() {
  const [springs, api] = useSpring(()=>({
    from: {x:0},
  }))

  const { scrollYProgress } = useScroll();

  const handleClick = () =>{
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    })
  }

    return (
      <>
      <animated.div
        onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          background: '#ff6d6d',
          borderRadius: 8,
          ...springs
        }}
    />
    <animated.div style={{ opacity: scrollYProgress, minHeight:"1000px", position:"sticky", top:50 }}>
      Hello World
    </animated.div>
      </>
    );
}
