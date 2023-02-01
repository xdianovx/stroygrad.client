import s from "./LinkCircle.module.scss";
import Link from "next/link";
import cn from "classnames";

export interface iLinkCircle {
  children: string;
  link: string;
  className?: string;
}

export const LinkCircle = ({ link, className, children }: iLinkCircle) => {
  return (
    <div className={cn(s.link, className)}>
      <Link href={link}>{children}</Link>
    </div>
  );
};
