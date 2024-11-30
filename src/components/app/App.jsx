import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Layout } from "../Layout/Layout.jsx";
import { HomePage } from "../../pages/HomePage/HomePage.jsx";
import { AboutUs } from "../../pages/AboutUs/AboutUs.jsx";
import { Features } from "../../pages/Features/Features.jsx";
import { Pricing } from "../../pages/Pricing/Pricing.jsx";
import { Faq } from "../../pages/Faq/Faq.jsx";
import { Blog } from "../../pages/Blog/Blog.jsx";
import { ContactUs } from "../../pages/ContactUs/ContactUs.jsx";
import { NotFound } from "../../pages/NotFound/NotFound.jsx";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="about_us" element={<AboutUs />} />
					<Route path="features" element={<Features />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="faq" element={<Faq />} />
					<Route path="blog" element={<Blog />} />
					<Route path="contacts" element={<ContactUs />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
