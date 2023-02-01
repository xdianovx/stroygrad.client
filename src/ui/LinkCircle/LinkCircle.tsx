import s from "./LinkCircle.module.scss";
import Link from "next/link";
import cn from "classnames";

export interface iLinkCircle {
  children: string;
  link: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const LinkCircle = ({
  link,
  className,
  size = "md",
  children,
}: iLinkCircle) => {
  return (
    <div
      className={cn(s.link, className, {
        [s.sm]: size === "sm",
        [s.md]: size === "md",
        [s.lg]: size === "lg",
      })}
    >
      <Link href={link}>{children}</Link>
    </div>
  );
};
