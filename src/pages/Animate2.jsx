import React from 'react'
import { animated, useSpring, useScroll } from '@react-spring/web'

export default function Animate3() {
  const [springs, api] = useSpring(()=>({
    from: {x:0},
  }))

  const { scrollYProgress } = useScroll();

    console.log("logging",scrollYProgress);

    return (
      <>
    <animated.div style={{ opacity: scrollYProgress + (scrollYProgress * 0.75), minHeight:"400px" }}>
      Hello World 1
    </animated.div>
    <animated.div style={{ opacity: scrollYProgress + 0.5, minHeight:"400px" }}>
      Hello World 2
    </animated.div>
    <animated.div style={{ opacity: scrollYProgress + 0.25, minHeight:"400px" }}>
      Hello World 3
    </animated.div>
    <animated.div style={{ opacity: scrollYProgress, minHeight:"400px" }}>
      Hello World 4
    </animated.div>
      </>
    );
}
