import cn from "classnames";
import { VacancyItem } from "./VacancyItem";
import s from "./VacancySection.module.scss";

export interface iVacancySecttion {
  className?: string | string[];
  data: any;
}

export const VacancySection = ({ className, data }: iVacancySecttion) => {
  const title = "Актуальные\nвакансии на сегодня";

  return (
    <section className={cn(s.section, className)}>
      <div className="container">
        <div className="flex items-end justify-between">
          <h2 className="text-[56px] leading-[68px]">{title}</h2>
          <div className="underline">Ростов-на-Дону</div>
        </div>
      </div>

      <div className="mt-20 border-t border-gray grid grid-cols-[680px_1fr]">
        <div className="border-r border-gray pl-[120px] pt-[72px]">
          <p>(16+ свободных вакансий )</p>
        </div>

        <div className="">
          {data.map((item: any) => (
            <VacancyItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
