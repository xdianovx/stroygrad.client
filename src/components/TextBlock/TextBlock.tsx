import s from './TextBlock.module.scss'

import cn from 'classnames'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export interface iTextBlock {
  title: string
  text: string
  className?: string
}

export const TextBlock = ({ title, text, className }: iTextBlock) => {
  const ref = useRef(null)
  useEffect(() => {
    const animation = gsap.from(ref.current, {
      opacity: 0,
      x: -100,
    })

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top center',
      end: 'bottom center',
      // scrub: 0.3,
      animation: animation,
    })
  })
  return (
    <section className={cn(s.block, 'asdf', className)}>
      <div className="container">
        <h2 ref={ref}>{title} </h2>
        <p className="mt-12 relative left-1/2 -translate-x-1/2">{text}</p>
      </div>
    </section>
  )
}
