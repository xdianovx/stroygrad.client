import s from './Navigation.module.scss'

import cn from 'classnames'
import Link from 'next/link'

export interface iNavigation {
  isOpen: boolean
}

export const Navigation = ({ isOpen }: iNavigation) => {
  const links = [
    { id: 1, title: 'О нас', to: '/about', num: '/01' },
    { id: 2, title: 'Новости', to: '/news', num: '/02' },
    { id: 3, title: 'Проекты ', to: '/projects', num: '/03' },
    { id: 4, title: 'Вакансии', to: '/vacancy', num: '/04' },
    { id: 5, title: 'Контакты ', to: '/contacts', num: '/05' },
  ]

  return (
    <nav
      id="nav"
      className={cn(s.menu, 'bg-white dark:bg-black', {
        [s.active]: isOpen,
      })}
    >
      <div className="grid grid-cols-2 h-full md:grid-cols-1">
        {links.map((item) => (
          <div
            className={cn(s.item, 'border-gray dark:border-gray ')}
            key={item.id}
          >
            <Link
              href={item.to}
              className="text-[60px] leading-[120%] mt-auto lg:text-5xl md:text-2xl md:max-w-[1000px]"
            >
              {item.title}
            </Link>
            <p className="ml-auto mb-3">{item.num}</p>
          </div>
        ))}

        <div
          className={cn(
            s.item,
            s.item__last,
            'border-r border-b border-gray dark:border-gray',
          )}
        >
          <div>
            <p>Работаем</p>
            <p>каждый день с 09:00 - 19:00</p>
          </div>

          <div className="flex flex-col ml-auto pr-[120px] text-[27px] md:text-xl md:pr-0 md:ml-0 md:mt-[32px]">
            <Link href="tel:8 (8652)-23-90-33">8 (8652)-23-90-33</Link>
            <Link
              href="tel:8 (918)
            948-85-92"
            >
              8 (918) 948-85-92
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
