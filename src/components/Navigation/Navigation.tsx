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
			id="nav"
			className={cn(s.menu, {
				[s.active]: isOpen,
			})}
		>
			<div className="grid grid-cols-2 h-full">
				{links.map((item) => (
					<div
						className="border-r border-b border-gray flex items-end pl-[70px] pr-[120px] pb-16"
						key={item.id}
					>
						<Link href={item.to} className="text-[60px] leading-[120%] mt-auto">
							{item.title}
						</Link>
						<p className="ml-auto mb-3">{item.num}</p>
					</div>
				))}
				<div className="border-r border-b border-gray flex items-end pl-[70px] pb-16">
					<div>
						<p>Работаем</p>
						<p>каждый день с 09:00 - 19:00</p>
					</div>

					<div className="flex flex-col ml-auto pr-[120px] text-[27px]">
						<Link href="tel:8 (8652)-23-90-33">8 (8652)-23-90-33</Link>
						<Link
							href="tel:8 (918)
            948-85-92"
						>
              8 (918) 948-85-92
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
