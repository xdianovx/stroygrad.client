import cn from "classnames";
import { useState } from "react";
import s from "./Accordition.module.scss";

export interface iAccordition {
  className?: string;
  data?: any;
}

export const Accordition = ({ data, className }: iAccordition) => {
  const testData = [
    { id: 1, title: "Уровень", content: ["123"] },
    { id: 2, title: "Страхование", content: ["123"] },
    { id: 3, title: "Оценка", content: ["123"] },
  ];
  return (
    <div className={cn(s.wrap, className)}>
      {testData.map((item) => (
        <div className={s.item} key={item.id}>
          <div className="container">
            <div className={s.item__inner}>
              <div className={s.head}>
                <div className={s.number}>01</div>
                <div className={s.title}>{item.title}</div>
                <div className={s.circle}></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
