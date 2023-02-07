import s from './Accordition.module.scss'

import cn from 'classnames'

export interface iAccordition {
  className?: string
  data?: any
}

export const Accordition = ({ className }: iAccordition) => {
  const testData = [
    { id: 1, title: 'Уровень', content: ['123'], num: '01' },
    { id: 2, title: 'Страхование', content: ['123'], num: '02' },
    { id: 3, title: 'Оценка', content: ['123'], num: '03' },
  ]
  return (
    <div className={cn(s.wrap, className)}>
      {testData.map((item) => (
        <div className={s.item} key={item.id}>
          <div className="container">
            <div className={s.item__inner}>
              <div className={s.head}>
                <div className={s.number}>{item.num}</div>
                <div className={s.title__wrap}>
                  <div className={s.title}>{item.title}</div>
                  <div className={s.circle}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
