import cn from "classnames";
import { Accordition, TextMd } from "../../ui";
import s from "./Services.module.scss";

export const Services = () => {
  const title = "Сервисы для\nсчастливой жизни";
  const subtitle =
    "Все это время «Стройград» стремительно\nразвивался, выходил на новые рынки.";

  return (
    <section className={cn(s.section)}>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.left}>
            <p>{title}</p>
          </div>

          <div className={s.right}>
            <TextMd>
              Мы стремимся стать одним из крупнейших строительно-инвестиционных
              холдингов федерального уровня.
            </TextMd>
            <p className="mt-[75px]">{subtitle}</p>
          </div>
        </div>
      </div>

      <Accordition className="mt-[115px]"/>
    </section>
  );
};
