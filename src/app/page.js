'use client'

import styles from './page.module.css'
import { projects } from '../data'
import Card from '../components/Card'
import { useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Home() {


  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  }, [])

  return (
    <main className={styles.main}>
      
      {

        projects.map((project, index) => {
          const targetScale = 1 - ((projects.length - index) * 0.05);

          //Beginning of range here is index * ( 1/ length of array [number of images being rendered on screen])
          return <Card key={index} i={index} {...project} progress={scrollYProgress} range={[index * 0.14, 1]} targetScale={targetScale} />
        })

      }
      
    </main>
  )
}