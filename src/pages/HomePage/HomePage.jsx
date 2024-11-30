import { Blog } from "../../components/HomePages/Blog/Blog.jsx";
import { ContactForm } from "../../components/HomePages/ContactForm/ContactForm.jsx";
import { Faq } from "../../components/HomePages/Faq/Faq.jsx";
import { Features } from "../../components/HomePages/Features/Features.jsx";
import { Hero } from "../../components/HomePages/Hero/Hero.jsx";
import { HowWeWork } from "../../components/HomePages/HowWeWork/HowWeWork.jsx";
import { OurWork } from "../../components/HomePages/OurWork/OurWork.jsx";
import { Testimonials } from "../../components/HomePages/Testimonials/Testimonials.jsx";

export const HomePage = () => {
	return (
		<div>
			<Hero />
			<HowWeWork />
			<OurWork />
			<Features />
			<Testimonials />
			<Faq />
			<ContactForm />
			<Blog />
		</div>
	);
};
