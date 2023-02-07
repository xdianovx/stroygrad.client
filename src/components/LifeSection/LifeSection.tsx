import s from './LifeSection.module.scss'

export const LifeSection = () => {
  const suptitle = 'Жизнь в Стройград'
  const text =
    'Мы не просто строим дома, мы\nсоздаем место для дружбы,\nлюбви и жизни!'

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.info}>
            <p className={s.suptitle}>{suptitle}</p>
            <p className={s.text}>{text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
