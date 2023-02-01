// @ts-nocheck
import cn from "classnames";
import { useState } from "react";

import s from "./VacancySection.module.scss";

export interface iVacancyItem {
  className?: string;
  data?: any[];
}

export const VacancyItem = ({ className, data }: iVacancyItem) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={cn(s.item, className)}>
      <div
        className="group relative py-[70px] pl-[140px] pr-[170px] flex items-center border-b border-gray duration-200 cursor-pointer  hover:text-white"
        onClick={toggleCard}
      >
        <div className="absolute top-0 left-0 w-full h-0 bg-black group-hover:h-full transition-all duration-500 ease-[cubic-bezier(.77,.14,.11,.88)] -z-10"></div>
        <div>
          <h2 className="text-[56px]">{data.title}</h2>
          <div className="flex items-center gap-[56px] mt-8">
            <div>{data.salary}</div>
            <p>/</p>
            <div>{data.experience}</div>
          </div>
        </div>

        <div className="ml-auto w-4 h-4 rounded-full border-2 border-black"></div>
      </div>

      {isOpen && (
        <div className="bg-black text-white pt-[70px] pl-[120px] pb-[180px] ">
          {data?.content.map((item: any, idx: any) => (
            <div key={idx} className="mb-[80px] last-of-type:mb-0">
              <h3 className="text-[40px] mb-8">{item.title}</h3>
              <ul>
                {item.list.map((li, idx) => (
                  <li key={idx} className="mb-4 pl-8 ">
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
