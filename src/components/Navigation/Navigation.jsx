import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

export const Navigation = ({ isFooter, isModal, setMenuOpen }) => {
	const handlerSubmit = () => {
		isModal && setMenuOpen(false);
	};

	return (
		<ul
			className={clsx(
				s.navMenu,
				isFooter && s.navMenu_footer,
				isModal && s.navMenu_modal
			)}
		>
			<li className={s.navMenu__item_link}>
				<NavLink
					className={clsx(s.navMenu__link, isFooter && s.navMenu__link_footer)}
					to="/"
					onClick={() => handlerSubmit()}
				>
					Home
				</NavLink>
			</li>
			<li className={s.navMenu__item_link}>
				<NavLink
					className={clsx(s.navMenu__link, isFooter && s.navMenu__link_footer)}
					to="/about_us"
					onClick={() => handlerSubmit()}
				>
					About us
				</NavLink>
			</li>
			<li className={s.navMenu__item_link}>
				<NavLink
					className={clsx(s.navMenu__link, isFooter && s.navMenu__link_footer)}
					to="/features"
					onClick={() => handlerSubmit()}
				>
					Features
				</NavLink>
			</li>
			<li className={s.navMenu__item_link}>
				<NavLink
					className={clsx(s.navMenu__link, isFooter && s.navMenu__link_footer)}
					to="/pricing"
					onClick={() => handlerSubmit()}
				>
					Pricing
				</NavLink>
			</li>
			<li className={s.navMenu__item_link}>
				<NavLink
					className={clsx(s.navMenu__link, isFooter && s.navMenu__link_footer)}
					to="/faq"
					onClick={() => handlerSubmit()}
				>
					FAQ
				</NavLink>
			</li>
			<li className={s.navMenu__item_link}>
				<NavLink
					className={clsx(s.navMenu__link, isFooter && s.navMenu__link_footer)}
					to="/blog"
					onClick={() => handlerSubmit()}
				>
					Blog
				</NavLink>
			</li>
		</ul>
	);
};
