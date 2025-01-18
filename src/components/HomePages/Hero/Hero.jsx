import { NavLink } from "react-router-dom";
import s from "./Hero.module.css";

export const Hero = () => {
	return (
		<div className={`section ${s.hero_section__wrap}`}>
			<div className="container">
				<div className={s.hero__wrap}>
					<div className={s.hero__left}>
						<h1 className={s.hero__title}>
							Building stellar websites for early startups
						</h1>
						<p className={s.hero__text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt.
						</p>
						<div className={s.hero__button_block}>
							<NavLink className={s.hero__button_block_work} to="/work">
								View our work
							</NavLink>
							<NavLink className={s.hero__button_block_pricing} to="/pricing">
								View Pricing{" "}
								<svg className={s.hero__icon}>
									<use href="/symbol-defs.svg#icon-Arrow-1"></use>
								</svg>
							</NavLink>
						</div>
					</div>

					<div className={s.hero__right}>
						{" "}
						<img
							className={s.hero__right_img}
							src="/Illustration.svg"
							alt="svg-icon-illustration"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

{
	/* <svg className={s.footer_icon}>
				<use href="/src/assets/symbol-defs.svg#icon-Illustration"></use>
			</svg> */
}
