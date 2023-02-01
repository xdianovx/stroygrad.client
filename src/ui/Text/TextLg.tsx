import s from "./text.module.scss";
import cn from "classnames";

export interface iTextLg {
  children: string;
  className?: string;
  refs?: any;
}

export const TextLg = ({ children, refs, className }: iTextLg) => {
  return (
    <p ref={refs} className={cn(s.lg, className)}>
      {children}
    </p>
  );
};
