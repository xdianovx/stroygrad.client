import cn from "classnames";
import Link from "next/link";
import s from "./ComplexSolutions.module.scss";

export const ComplexSolutions = () => {
  const title = "Комплексные\nрешения";
  const subtitle =
    "Кроме комплексных решений, в качестве\nотдельных задач, мы можем выполнить\nкачественно и в срок следующие виды работ";
  const drawerContent = [
    {
      id: 1,
      num: "/01",
      suotitle: "Уютные квартиры со скидкой",
      title:
        "Успейте купить квартиру\nс минимальной переплатой\nпо уникальной ставке 0,01%",
      text: "Кроме комплексных решений, в качестве отдельных задач, мы можем выполнить качественно и в срок следующие виды работ",
      link: "/",
      linkTitle: "Калькулятор",
    },
    {
      id: 2,
      num: "/02",
      suotitle: "Ипотека 0,01%",
      title:
        "Успейте купить квартиру\nс минимальной переплатой\nпо уникальной ставке 0,01%",
      text: "Кроме комплексных решений, в качестве отдельных задач, мы можем выполнить качественно и в срок следующие виды работ",
      link: "/",
      linkTitle: "Калькулятор",
    },

    {
      id: 3,
      num: "/03",
      suotitle: "Уютные квартиры со скидкой",
      title:
        "Успейте купить квартиру\nс минимальной переплатой\nпо уникальной ставке 0,01%",
      text: "Кроме комплексных решений, в качестве отдельных задач, мы можем выполнить качественно и в срок следующие виды работ",
      link: "/",
      linkTitle: "Калькулятор",
    },

    {
      id: 4,
      num: "/04",
      suotitle: "Ипотека 0,01%",
      title:
        "Успейте купить квартиру\nс минимальной переплатой\nпо уникальной ставке 0,01%",
      text: "Кроме комплексных решений, в качестве отдельных задач, мы можем выполнить качественно и в срок следующие виды работ",
      link: "/",
      linkTitle: "Калькулятор",
    },
  ];

  return (
    <section className={cn(s.section)}>
      <div className="container">
        <div className={s.top}>
          <div className={s.title}>{title}</div>
          <p className={s.subtitle}>{subtitle}</p>
        </div>

        <div className={s.drawer}>
          {drawerContent.map((item) => (
            <div className={s.item} key={item.id}>
              <div className={s.head}>
                <span>{item.num}</span>
                <h3>{item.suotitle}</h3>
              </div>

              <div className={s.content}>
                <sup className={s.suptitle}>{item.suotitle}</sup>
                <h3 className={s.title}>{item.title}</h3>
                <p className={s.text}>{item.text}</p>
                {item.link && <Link href={item.link}>{item.linkTitle}</Link>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
