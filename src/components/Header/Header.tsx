import s from './Header.module.scss'

import cn from 'classnames'
import { useState } from 'react'

import { Navigation } from '@/components/index'

import { Burger, Logo, ThemeChanger } from '@/ui/index'

export const Header = () => {
	const [showNav, setShowNav] = useState(false)

	const toggleMenu = () => {
		setShowNav(!showNav)
	}

	return (
		<header className={s.header}>
			<Navigation isOpen={showNav} />
			<div className="container">
				<div className={cn(s.wrap, 'relative z-10')}>
					<Logo />
					<ThemeChanger className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
					<Burger className="ml-auto" isOpen={showNav} setIsOpen={toggleMenu} />
				</div>
			</div>
		</header>
	)
}
