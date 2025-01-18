import { NavLink } from "react-router-dom";
import hwwData from "./HowWeWork.json";
import s from "./HowWeWork.module.css";
export const HowWeWork = () => {
	return (
		<div className={`section ${s.hww__section}`}>
			<div className="container">
				<div className={s.hww__wraper}>
					<div className={s.hww__hww_left}>
						<h2 className={s.hww__title}>How we work</h2>
						<p className={s.hww__text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor.
						</p>

						<NavLink className={s.hww__link}>
							Get in touch with us
							<svg className={s.hww__icon}>
								<use href="/symbol-defs.svg#icon-Arrow-1"></use>
							</svg>
						</NavLink>
					</div>
					<div className={s.hww__hww_right}>
						<ul className={s.hww__hww_right_list}>
							{hwwData.map((data) => {
								return (
									<li key={data.id} className={s.hww__hww_right_item}>
										<div className={s.hww__right_icon_item}>
											<span className={s.hww__right_icon_item_num}>
												{"0" + (data.id + 1)}
											</span>
											<svg className={s.hww__right_icon}>
												<use href="/symbol-defs.svg#icon-pointer-1"></use>
											</svg>
										</div>
										<h3 className={s.hww__title_h3}>{data.title_h3}</h3>
										<p className={s.hww__right_text}>{data.text}</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
