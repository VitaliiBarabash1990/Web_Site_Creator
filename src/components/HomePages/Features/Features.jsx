import s from "./Features.module.css";
export const Features = () => {
	return (
		<div className={`section ${s.Features__section}`}>
			<div className="container">
				<div className={s.Features__section_wrap}>
					<div className={s.Features__section_head}>
						<p className={s.Features__section_head_text}>Features</p>
						<h2 className={s.Features__section_head_title}>
							Design that solves problems, one product at a time
						</h2>
					</div>
					<ul className={s.Features__section_body}>
						<li className={s.Features__section_body_item}>
							<svg className={s.Features__section_icon}>
								<use href="/public/symbol-defs.svg#icon-icon_1"></use>
							</svg>
							<h5 className={s.Features__section_body_item_title}>
								Uses Client First
							</h5>
							<p className={s.Features__section_body_item_text}>
								Euismod faucibus turpis eu gravida mi. Pellentesque et velit
								aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
								aliquam sed mi.
							</p>
						</li>
						<li className={s.Features__section_body_item}>
							<svg className={s.Features__section_icon}>
								<use href="/public/symbol-defs.svg#icon-icon_2"></use>
							</svg>
							<h5 className={s.Features__section_body_item_title}>
								Two Free Revision Round
							</h5>
							<p className={s.Features__section_body_item_text}>
								Euismod faucibus turpis eu gravida mi. Pellentesque et velit
								aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
								aliquam sed mi.
							</p>
						</li>
						<li className={s.Features__section_body_item}>
							<svg className={s.Features__section_icon}>
								<use href="/public/symbol-defs.svg#icon-icon_3"></use>
							</svg>
							<h5 className={s.Features__section_body_item_title}>
								Template Customization
							</h5>
							<p className={s.Features__section_body_item_text}>
								Euismod faucibus turpis eu gravida mi. Pellentesque et velit
								aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
								aliquam sed mi.
							</p>
						</li>
						<li className={s.Features__section_body_item}>
							<svg className={s.Features__section_icon}>
								<use href="/public/symbol-defs.svg#icon-icon_4"></use>
							</svg>
							<h5 className={s.Features__section_body_item_title}>
								24/7 Support
							</h5>
							<p className={s.Features__section_body_item_text}>
								Euismod faucibus turpis eu gravida mi. Pellentesque et velit
								aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
								aliquam sed mi.
							</p>
						</li>
						<li className={s.Features__section_body_item}>
							<svg className={s.Features__section_icon}>
								<use href="/public/symbol-defs.svg#icon-icon_5"></use>
							</svg>
							<h5 className={s.Features__section_body_item_title}>
								Quick Delivery
							</h5>
							<p className={s.Features__section_body_item_text}>
								Euismod faucibus turpis eu gravida mi. Pellentesque et velit
								aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
								aliquam sed mi.
							</p>
						</li>
						<li className={s.Features__section_body_item}>
							<svg className={s.Features__section_icon}>
								<use href="/public/symbol-defs.svg#icon-icon_6"></use>
							</svg>
							<h5 className={s.Features__section_body_item_title}>
								Hands-on approach
							</h5>
							<p className={s.Features__section_body_item_text}>
								Euismod faucibus turpis eu gravida mi. Pellentesque et velit
								aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
								aliquam sed mi.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
