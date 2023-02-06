import cn from "classnames";
import s from "./Burger.module.scss";

export interface iBurger {
  className?: string;
  isOpen: boolean;
  setIsOpen: any;
}
export const Burger = ({ className, isOpen, setIsOpen }: iBurger) => {
	const openMenu = () => {
		setIsOpen(!isOpen);
	};


	return (
		<div
			className={cn(s.item, className, {
				[s.active]: isOpen,
			})}
			onClick={openMenu}
		>
			<div  className={cn(s.top)}></div>
			<div  className={s.bottom}></div>
		</div>
	);
};
