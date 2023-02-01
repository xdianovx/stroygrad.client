import cn from "classnames";
import s from "./PersonalSection.module.scss";

export interface iPersonalSection {
  className?: string | string[];
  data?: any;
}

export const PersonalSection = ({ className, data }: iPersonalSection) => {
  return (
    <section className={cn(s.section, className)}>
      <div className="container">
        <div className="flex">
          <h2></h2>
        </div>
      </div>
    </section>
  );
};
