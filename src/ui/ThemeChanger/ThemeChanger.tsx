import s from './ThemeChanger.module.scss'

import cn from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export interface iThemeChanger {
  className?: string
}

export const ThemeChanger = ({ className }: iThemeChanger) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const swithTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={cn(s.wrap, className)}>
      <div
        className={cn(s.light, {
          [s.active]: theme == 'light',
          [s.darkmode]: theme == 'dark',
        })}
        onClick={swithTheme}
      ></div>
      <div
        className={cn(s.dark, {
          [s.active]: theme == 'dark',
          [s.darkmode]: theme == 'dark',
        })}
        onClick={swithTheme}
      ></div>
    </div>
  )
}
