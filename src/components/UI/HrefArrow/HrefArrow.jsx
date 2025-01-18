import { NavLink } from "react-router-dom";
import s from "./HrefArrow.module.css";

const HrefArrow = ({ name, color }) => {
	return (
		<NavLink
			className={`${s.OurWork__link} ${
				color ? s["OurWork__link--colored"] : ""
			}`}
			style={color ? { "--dynamic-color": color } : undefined}
		>
			{name}
			<svg className={s.OurWork__icon}>
				<use href="/symbol-defs.svg#icon-Arrow-1"></use>
			</svg>
		</NavLink>
	);
};

export default HrefArrow;
