import s from './Burger.module.scss'

import cn from 'classnames'
import { log } from 'console'
import { useTheme } from 'next-themes'

export interface iBurger {
  className?: string
  isOpen: boolean
  setIsOpen: any
}

export const Burger = ({ className, isOpen, setIsOpen }: iBurger) => {
  const { theme, setTheme } = useTheme()

  const openMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={cn(s.item, className, {
        [s.active]: isOpen,
        [s.dark]: theme === 'dark',
      })}
      onClick={openMenu}
    >
      <div className={cn(s.top)}></div>
      <div className={s.bottom}></div>
    </div>
  )
}
