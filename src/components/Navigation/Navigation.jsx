import { NavLink } from "react-router-dom";
import linkDatas from "./navigation.json";
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
			{linkDatas.map((linkData) => {
				return (
					<li key={linkData.id} className={s.navMenu__item_link}>
						<NavLink
							className={clsx(
								s.navMenu__link,
								isFooter && s.navMenu__link_footer
							)}
							to={linkData.link}
							onClick={() => handlerSubmit()}
						>
							{linkData.text}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};
