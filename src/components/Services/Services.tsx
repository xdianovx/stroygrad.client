import s from './Services.module.scss'

import cn from 'classnames'

import { Accordition, TextMd } from '@/ui/index'

export const Services = () => {
  const title = 'Сервисы для\nсчастливой жизни'
  const subtitle =
    'Все это время «Стройград» стремительно\nразвивался, выходил на новые рынки.'

  return (
    <section className={cn(s.section)}>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.left}>
            <p className="text-gray">{title}</p>
          </div>

          <div className={s.right}>
            <TextMd>
              Мы стремимся стать одним из крупнейших строительно-инвестиционных
              холдингов федерального уровня.
            </TextMd>
            <p className="mt-[75px] md:mt-8">{subtitle}</p>
          </div>
        </div>
      </div>

      <Accordition className="mt-[115px] sm:mt-[60px]" />
    </section>
  )
}
