import s from './IndexHero.module.scss'

import cn from 'classnames'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

import { Title } from '@/ui/index'

export interface iIndexHero {
  className?: string
  title: string
}
export const IndexHero = ({ className, title }: iIndexHero) => {
  const [active, setActive] = useState(false)
  const titleRef = useRef(null)
  const showPoster = () => {
    setActive(!active)
  }

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      duration: 1,
      ease: '',
    })
  }, [])
  return (
    <section className={cn(className)}>
      <div className="container">
        <Title refProp={titleRef} onMouseOver={showPoster} tag="h1">
          {title}
        </Title>
      </div>
    </section>
  )
}
