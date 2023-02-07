import s from './text.module.scss'

import cn from 'classnames'

export interface iTextMd {
  children: string
  className?: string
  refs?: any
}

export const TextMd = ({ children, refs, className }: iTextMd) => {
  return (
    <p ref={refs} className={cn(s.md, className)}>
      {children}
    </p>
  )
}
