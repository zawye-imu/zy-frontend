import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";

export default function Animate1() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div style={{height:"1500px"}}>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <h1>
        <code>useScroll</code> with spring smoothing
      </h1>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos praesentium est vitae nisi dolorem? Assumenda consequatur temporibus reprehenderit ipsam pariatur, iusto optio veritatis sed officia fugit, ipsa ut perferendis.
    </div>
  )
}
