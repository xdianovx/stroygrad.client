import s from './ButtonArrow.module.scss'

import IconSvg from './Icon.svg'
import cn from 'classnames'

export interface iButtonArrow {
  className?: string
}

export const ButtonArrow = ({ className }: iButtonArrow): JSX.Element => {
  return (
    <button className={cn(s.btn, className)}>
      <IconSvg />
    </button>
  )
}
