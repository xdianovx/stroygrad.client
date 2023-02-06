// @ts-nocheck
import cn from "classnames";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import s from "./Burger.module.scss";

export interface iBurger {
  className?: string;
  isOpen: boolean;
  setIsOpen: Function;
}
export const Burger = ({ className, isOpen, setIsOpen }: iBurger) => {
  const topRef = useRef(null);
  const burger = useRef();
  const bottomRef = useRef(null);
  const [hovA, setHovA] = useState();
  const [openA, setOpenA] = useState();

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuHoverAnimation = () => {};

  const menuHoverOutAnimation = () => {};

  return (
    <div
      className={cn(s.item, className, {
        [s.active]: isOpen,
      })}
      onMouseOver={menuHoverAnimation}
      onMouseLeave={menuHoverOutAnimation}
      onClick={openMenu}
    >
      <div ref={topRef} className={cn(s.top)}></div>
      <div ref={bottomRef} className={s.bottom}></div>
    </div>
  );
};
