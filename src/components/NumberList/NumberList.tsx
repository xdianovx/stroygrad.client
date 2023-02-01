import cn from "classnames";
import s from "./NumberList.module.scss";

export interface iNumberList {
  className?: string;
  data?: any;
}

export const NumberList = ({ className, data }: iNumberList) => {
  return (
    <section className={cn(s.section, className)}>
      <div className={s.wrap}>
        {data.map((item: any) => (
          <div className={s.item} key={item.id}>
            <div className="container">
              <div className={s.inner}>
                <p>{item.title}</p>
                <div>{item.number}</div>
                <span>{item.num}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
