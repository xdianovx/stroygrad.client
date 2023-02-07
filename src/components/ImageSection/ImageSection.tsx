import s from './ImageSection.module.scss'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const ImageSection = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(imageRef.current, {
      height: '100vh',
      width: '100vw',
      scrollTrigger: {
        trigger: sectionRef.current,
        end: 'bottom',
        pin: true,
        scrub: 0.5,
      },
    })
  }, [])

  return (
    <section className={s.section} ref={sectionRef}>
      <div className={s.image} ref={imageRef}>
        <Image src="/img/houses.jpg" fill alt="asd" />
      </div>
    </section>
  )
}
