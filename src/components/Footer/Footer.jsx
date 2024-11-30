import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo.jsx";
import s from "./Footer.module.css";
import { Navigation } from "../Navigation/Navigation.jsx";

export const Footer = () => {
	const logoSize = {
		width: 160,
		height: 33,
	};

	const isFooter = true;

	return (
		<div className={s.footerWrap}>
			<div className="container">
				{" "}
				<div className={s.footerWrap__head}>
					<div className={s.footerWrap__head_left}>
						<div className={s.footer__logo}>
							<Logo logoSize={logoSize} />
						</div>

						<p className={s.footer__paragraf}>
							We are always open to discuss your project and improve your online
							presence.
						</p>
						<address className={s.footerAddress}>
							<ul className={s.footerAddress__list}>
								<li className={s.footerAddress__item}>
									<p className={s.footer__paragraff_email}>Email me at</p>
									<NavLink
										className={s.footerAddress__link}
										to="mailto:contact@website.com"
									>
										contact@website.com
									</NavLink>
								</li>
								<li className={s.footerAddress__item}>
									<p className={s.footer__paragraff_tel}>Call us</p>
									<NavLink
										className={s.footerAddress__link}
										to="tel:0927 6277 28525"
									>
										0927 6277 28525
									</NavLink>
								</li>
							</ul>
						</address>
					</div>{" "}
					<div className={s.footerWrap__head_right}>
						<h3 className={s.footerWrap__head_right_title}>Lets Talk!</h3>
						<p className={s.footerWrap__paragraff}>
							We are always open to discuss your project, improve your online
							presence and help with your UX/UI design challenges.
						</p>
						<ul className={s.footer__soc}>
							<li className={s.footer__soc_item}>
								<NavLink
									className={s.footer__soc_icon}
									to="http://facebook.com"
									target="_blank"
								>
									<svg className={s.footer_icon}>
										<use href="/src/assets/symbol-defs.svg#facebook"></use>
									</svg>
								</NavLink>
							</li>
							<li className={s.footer__soc_item}>
								<NavLink
									className={s.footer__soc_icon}
									to="http://twitter.com"
									target="_blank"
								>
									<svg className={s.footer_icon}>
										<use href="/src/assets/symbol-defs.svg#twitter"></use>
									</svg>
								</NavLink>
							</li>
							<li className={s.footer__soc_item}>
								<NavLink
									className={s.footer__soc_icon}
									to="http://instagram.com"
									target="_blank"
								>
									<svg className={s.footer_icon}>
										<use href="/src/assets/symbol-defs.svg#instagram"></use>
									</svg>
								</NavLink>
							</li>
							<li className={s.footer__soc_item}>
								<NavLink
									className={s.footer__soc_icon}
									to="http://linkedin.com"
									target="_blank"
								>
									<svg className={s.footer_icon}>
										<use href="/src/assets/symbol-defs.svg#linkedin"></use>
									</svg>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={s.footerWrap__nav}>
				<p className={s.footerWrap__nav_text}>Copyright 2021, Finsweet.com</p>

				<div className={s.footerWrap__nav_nav}>
					<Navigation isFooter={isFooter} />
				</div>
			</div>
		</div>
	);
};
