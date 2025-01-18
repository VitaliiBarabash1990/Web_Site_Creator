import HrefArrow from "../../UI/HrefArrow/HrefArrow.jsx";
import s from "./Blog.module.css";

export const Blog = () => {
	return (
		<div className={`section ${s.Blog__section}`}>
			<div className="container">
				<div className={s.Blog__section_wrap}>
					<h3 className={s.Blog__section_wrap_title}>Our blog</h3>
					<ul className={s.Blog__section_list}>
						<li className={s.Blog__section_item}>
							<div className={s.Blog__section_item_img}>
								<picture>
									<source
										srcSet="/img/optimazed/apple-monitors_x1.jpg 1x, /img/optimazed/apple-monitors_x2.jpg 2x"
										type="image/jpeg"
									/>
									<img
										src="/img/optimazed/apple-monitors_x1.jpg"
										alt="Описание изображения"
									/>
								</picture>
							</div>
							<p className={s.Blog__section_date}>19 Jan 2022</p>
							<h4 className={s.Blog__section_title}>
								How one Webflow user grew his single person consultancy from
								$0-100K in 14 months
							</h4>
							<p className={s.Blog__section_text}>
								See how pivoting to Webflow changed one person’s sales strategy
								and allowed him to attract
							</p>
							<HrefArrow name="Read More" color="var(--dark-blue)" />
						</li>

						<li className={s.Blog__section_item}>
							<div className={s.Blog__section_item_img}>
								<picture>
									<source
										srcSet="/img/optimazed/woman-in-white_x1.jpg 1x, /img/optimazed/woman-in-white_x2.jpg 2x"
										type="image/jpeg"
									/>
									<img
										src="/img/optimazed/woman-in-white_x1.jpg"
										alt="Описание изображения"
									/>
								</picture>
							</div>
							<p className={s.Blog__section_date}>19 Jan 2022</p>
							<h4 className={s.Blog__section_title}>
								How one Webflow user grew his single person consultancy from
								$0-100K in 14 months
							</h4>
							<p className={s.Blog__section_text}>
								See how pivoting to Webflow changed one person’s sales strategy
								and allowed him to attract
							</p>
							<HrefArrow name="Read More" color="var(--dark-blue)" />
						</li>

						<li className={s.Blog__section_item}>
							<div className={s.Blog__section_item_img}>
								<picture>
									<source
										srcSet="/img/optimazed/arabic-businessman_x1.jpg 1x, /img/optimazed/arabic-businessman_x2.jpg 2x"
										type="image/jpeg"
									/>
									<img
										src="/img/optimazed/arabic-businessman_x1.jpg"
										alt="Описание изображения"
									/>
								</picture>
							</div>
							<p className={s.Blog__section_date}>19 Jan 2022</p>
							<h4 className={s.Blog__section_title}>
								How one Webflow user grew his single person consultancy from
								$0-100K in 14 months
							</h4>
							<p className={s.Blog__section_text}>
								See how pivoting to Webflow changed one person’s sales strategy
								and allowed him to attract
							</p>
							<HrefArrow name="Read More" color="var(--dark-blue)" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
// <div class="about-item about-pic">
// 	<picture>
// 		<source
// 			srcset="
//         ./images/about/desk@1x.webp 1x,
//         ./images/about/desk@2x.webp 2x
//       "
// 			type="image/webp"
// 			media="(min-width: 1280px)"
// 		/>
// 		<source
// 			media="(min-width: 1280px)"
// 			srcset="./images/about/desk@1x.png 1x, ./images/about/desk@2x.png 2x"
// 		/>
// 		<source
// 			srcset="./images/about/tab@1x.webp 1x, ./images/about/tab@2x.webp 2x"
// 			type="image/webp"
// 			media="(min-width: 768px) and (max-width: 1279px)"
// 		/>

// 		<source
// 			media="(min-width: 768px) and (max-width: 1279px)"
// 			srcset="./images/about/tab@1x.png 1x, ./images/about/tab@2x.png 2x"
// 		/>
// 		<source
// 			srcset="./images/about/mob@1x.webp 1x, ./images/about/mob@2x.webp 2x"
// 			type="image/webp"
// 			media="(max-width: 767px)"
// 		/>

// 		<source
// 			media="(max-width: 767px)"
// 			srcset="./images/about/mob@1x.png 1x, ./images/about/mob@2x.png 2x"
// 		/>
// 		<img
// 			src="./images/about/desk@1x-min-min.png"
// 			alt="watch"
// 			class="image-portfolio"
// 		/>
// 	</picture>
// </div>;
