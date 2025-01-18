import s from "./Testimonials.module.css";
export const Testimonials = () => {
	return (
		<div className={`section ${s.Testimonials__section}`}>
			<div className="container">
				<div className={s.Testimonials__section_wrap}>
					<div className={s.Testimonials__section_descr}>
						<h3 className={s.Testimonials__section_title}>
							What our clients say about us
						</h3>
						<p className={s.Testimonials__section_text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
						</p>
					</div>
					<div className={s.Testimonials__section_queue}>
						<h4 className={s.Testimonials__section_queue_title}>
							&ldquo;The best agency we’ve worked with so far. They understand
							our product and are able to add new features with a great
							focus.&rdquo;
						</h4>
						<div className={s.Testimonials__section_info}>
							<div className={s.Testimonials__section_client}>
								<div className={s.Testimonials__section_client_img}>
									<img src="/img/optimazed/woman-in.png" alt="woman" />
								</div>
								<div className={s.Testimonials__section_client_descr}>
									<h5 className={s.Testimonials__section_client_descr_name}>
										Jenny Wilson
									</h5>
									<p className={s.Testimonials__section_client_descr_position}>
										Vice President
									</p>
								</div>
							</div>
							<div className={s.Testimonials__section_client_arrow}>
								<div className={s.Testimonials__section_client_arrow_block}>
									<svg className={s.Testimonials__section_client_arrow_left}>
										<use href="/symbol-defs.svg#icon-Arrow"></use>
									</svg>
								</div>
								<div className={s.Testimonials__section_client_arrow_block}>
									<svg className={s.Testimonials__section_client_arrow_right}>
										<use href="/symbol-defs.svg#icon-Arrow"></use>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
