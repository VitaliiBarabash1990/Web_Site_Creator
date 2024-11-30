import { NavLink } from "react-router-dom";
import s from "./Logo.module.css";

export const Logo = ({ logoSize }) => {
	return (
		<NavLink className={s.navLogo} to="/">
			<svg width={logoSize.width} height={logoSize.height} className={s.logo}>
				<use href="/src/assets/symbol-defs.svg#Logo"></use>
			</svg>
		</NavLink>
	);
};
