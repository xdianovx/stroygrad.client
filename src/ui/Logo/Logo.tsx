import s from './Logo.module.scss'

import cn from 'classnames'
import Link from 'next/link'

export interface iLogo {
  className?: string
}

export const Logo = ({ className }: iLogo) => {
  return (
    <Link
      href="/"
      className={cn(
        s.logo,
        className,
        'fill-black dark:fill-white w-[95px] h-[46px] md:w-[64px] md:h-auto xs:w-[51px]',
      )}
    >
      <svg viewBox="0 0 95 46">
        <rect y="0.712891" width="10.6484" height="44.6971" />
        <path d="M44.6992 0.712891L35.4311 11.3613L0.00208633 11.3613L0.00208664 0.712889L44.6992 0.712891Z" />
        <path d="M49.3047 0.712891L59.2301 0.712891L58.964 35.9054L49.3047 45.41L49.3047 0.712891Z" />
        <path d="M94.0039 0.712891L82.7433 11.8588L58.115 11.3551L55.0256 7.74612L49.3068 0.712889L94.0039 0.712891Z" />
        <path d="M35.4311 34.7598L44.6992 45.4082L0.00208633 45.4082L0.00208664 34.7598L35.4311 34.7598Z" />
      </svg>
    </Link>
  )
}
