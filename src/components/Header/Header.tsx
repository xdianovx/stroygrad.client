import { useState } from "react";
import { Burger, Logo, ThemeChanger } from "../../ui";
import { Navigation } from "../Navigation/Navigation";
import s from "./Header.module.scss";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const pages = [
    { id: 1, title: "asd", link: "asd" },
    { id: 2, title: "asd", link: "asda" },
    { id: 3, title: "asd", link: "asd" },
  ];

  const toggleMenu = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={s.header}>
      <Navigation isOpen={showNav} />
      <div className="container">
        <div className={s.wrap}>
          <Logo />
          <ThemeChanger className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <Burger className="ml-auto" isOpen={showNav} setIsOpen={toggleMenu} />
        </div>
      </div>
    </header>
  );
};
