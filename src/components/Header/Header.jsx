import { Navigation } from "../Navigation/Navigation.jsx";
import { Logo } from "../Logo/Logo.jsx";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import BurgerButton from "../UI/HrefArrow/BurgerButton/BurgerButton.jsx";

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const isModal = true;
	console.log("menuOpen", menuOpen);

	const logoSize = {
		width: 122,
		height: 25,
	};

	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add("no-scroll");
			document.documentElement.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
			document.documentElement.classList.remove("no-scroll");
		}
		return () => {
			document.body.classList.remove("no-scroll");
			document.documentElement.classList.remove("no-scroll");
		};
	}, [menuOpen]);

	return (
		<div className={s.header}>
			<div className="container">
				<div className={s.header__container}>
					<Logo logoSize={logoSize} />
					<div className={s.header__navigate}>
						<Navigation />
						<NavLink
							className={`${s.navMenu__link} ${s.navMenu__button}`}
							to="/contacts"
						>
							Contact us
						</NavLink>
					</div>
					<div className={s.headerBurgerButton}>
						<BurgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
					</div>
				</div>
			</div>

			<div className={`${s.menu_burger} ${menuOpen ? s.open : ""}`}>
				<Navigation isModal={isModal} setMenuOpen={setMenuOpen} />
			</div>
		</div>
	);
};
