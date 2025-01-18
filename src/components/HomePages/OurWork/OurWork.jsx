import s from "./OurWork.module.css";
import HrefArrow from "../../UI/HrefArrow/HrefArrow.jsx";

export const OurWork = () => {
	return (
		<div className={`section ${s.OurWork__section}`}>
			<div className="container">
				<div className={s.OurWork__wrap}>
					<div className={s.OurWork__head}>
						<h3 className={s.OurWork__head_title}>View our projects</h3>
						<HrefArrow color={`var(--dark-blue)`} name="View More" />
					</div>
					<div className={s.OurWork__mein}>
						<div className={s.OurWork__mein_img_1}>
							<div className={s.OurWork__mein_overflow_img_1}>
								<h3 className={s.OurWork__mein_overflow_title}>
									Workhub office Webflow Webflow Design
								</h3>
								<p className={s.OurWork__mein_overflow_text}>
									Euismod faucibus turpis eu gravida mi. Pellentesque et velit
									aliquam
								</p>
								<HrefArrow color={`var(--yellow)`} name="View project" />
							</div>
						</div>
						<div className={s.OurWork__mein_img_2}>
							<div className={s.OurWork__mein_img_2_1}>1</div>
							<div className={s.OurWork__mein_img_2_2}>
								<div className={s.OurWork__mein_overflow_img_2_2}>
									<h3 className={s.OurWork__mein_overflow_title}>
										Unisaas Website Design
									</h3>
									<HrefArrow color={`var(--yellow)`} name="View portfolio" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
