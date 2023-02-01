import cn from "classnames";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

  useEffect(() => {
    const toggle = gsap
      .timeline({
        defaults: { ease: "powe1.out", duration: 0.2 },
        paused: true,
      })
      .to(bottomRef.current, {
        width: 50,
      })
      .to(bottomRef.current, {
        y: -3,
      })
      .to(
        topRef.current,
        {
          y: 3,
        },
        "-=.2"
      )
      .to(bottomRef.current, {
        rotation: 90,
      })
      .to(
        topRef.current,
        {
          rotation: 90,
        },
        "-=.2"
      )
      .to(bottomRef.current, {
        x: -4,
      })
      .to(
        topRef.current,
        {
          x: 4,
        },
        "-=.2"
      );

    let ctx = gsap.context((self) => {
      self.add("hoverOn", () => {
        toggle.play();
      });

      self.add("hoverOff", () => {
        toggle.reverse();
      });

      self.add("active", () => {
        // open.play();
        // setIsOpen(!isOpen);
      });
    }, burger);

    burger.current.addEventListener("mouseenter", () => ctx.hoverOn());
    burger.current.addEventListener("mouseleave", () => ctx.hoverOff());
    // burger.current.addEventListener("click", () => ctx.active());

    console.log(burger.current);
  }, [isOpen]);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={cn(s.item, className, {
        [s.active]: isOpen,
      })}
      onClick={openMenu}
      ref={burger}
    >
      <div ref={topRef} className={cn(s.top)}></div>
      <div ref={bottomRef} className={s.bottom}></div>
    </div>
  );
};
