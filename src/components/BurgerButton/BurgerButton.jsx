import s from "./BurgerButton.module.css";

export const BurgerButton = () => {
	return (
		<button
			className={s.header_burger__open_menu_btn}
			type="button"
			data-menu-open
		>
			<svg className={s.header_burger__open_menu_img}>
				<use href="/src/assets/symbol-defs.svg#icon-menu"></use>
			</svg>
		</button>
	);
};
