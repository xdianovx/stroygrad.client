import cn from "classnames";
import Link from "next/link";
import s from "./Navigation.module.scss";

export interface iNavigation {
  isOpen: boolean;
}

export const Navigation = ({ isOpen }: iNavigation) => {
  const links = [
    { id: 1, title: "О нас", to: "/about", num: "/01" },
    { id: 2, title: "Новости", to: "/news", num: "/02" },
    { id: 3, title: "Проекты ", to: "/projects", num: "/03" },
    { id: 4, title: "Вакансии", to: "/vacancy", num: "/04" },
    { id: 5, title: "Контакты ", to: "/contacts", num: "/05" },
  ];

  return (
    <nav
      className={cn(s.menu, {
        [s.active]: isOpen,
      })}
    >
      <div className="grid grid-cols-2 h-full">
        {links.map((item) => (
          <div className="border-r border-gray" key={item.id}>
            <Link href={item.to}>{item.title}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
};
