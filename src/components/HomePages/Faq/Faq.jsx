import { Accordion } from "../../UI/HrefArrow/Accordion/Accordion.jsx";
import s from "./Faq.module.css";

export const Faq = () => {
	return (
		<div className={`section ${s.Faq__section}`}>
			<div className="container">
				<div className={s.Faq__section_wrap}>
					<div className={s.Faq__section_head}>
						<h3 className={s.Faq__section_title}>Frequently asked questions</h3>
						<p className={s.Faq__section_text}>Contact us for more info</p>
					</div>
					<div className={s.Faq__section_acordion}>
						<Accordion />
					</div>
				</div>
			</div>
		</div>
	);
};
