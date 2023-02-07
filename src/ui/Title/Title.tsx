import s from './Title.module.scss'

import cn from 'classnames'

export interface iTitle {
  className?: string
  children: JSX.Element[] | string
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'lg'
  props?: any
  refProp?: any
  onMouseOver?: any
}

export const Title = ({
  className,
  refProp,
  children,
  tag,
  ...props
}: iTitle) => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={cn(s.h1, className)} ref={refProp} {...props}>
          {children}
        </h1>
      )

    case 'h2':
      return (
        <h2 className={cn(s.h2, className)} ref={refProp} {...props}>
          {children}
        </h2>
      )

    case 'h3':
      return (
        <h3 className={cn(s.h3, className)} ref={refProp} {...props}>
          {children}
        </h3>
      )

    case 'h4':
      return (
        <h4 className={cn(s.h4, className)} ref={refProp} {...props}>
          {children}
        </h4>
      )

    case 'lg':
      return (
        <h2 className={cn(s.lg, className)} ref={refProp} {...props}>
          {children}
        </h2>
      )
  }
}
