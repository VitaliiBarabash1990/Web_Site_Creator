import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import HrefArrow from "../../UI/HrefArrow/HrefArrow.jsx";
export const ContactForm = () => {
	const initialValues = {
		name: "",
		email: "",
		url: "",
	};

	const onlyWords = /^[a-zA-Z]+$/;

	const validationSchema = Yup.object({
		name: Yup.string()
			.matches(onlyWords, `!onlyWords`)
			.min(3, "Name must be at least 3 characters long")
			.max(20, "Name must not exceed 20 characters")
			.required(),
		email: Yup.string()
			.email("Invalid email address")
			.required("!Поле URL обязательно для заполнения"),
		url: Yup.string()
			.url("Введите корректный URL, например: https://example.com")
			.required("!Поле URL обязательно для заполнения"),
	});
	// useEffect(() => {}, []);

	const handleSubmit = (values) => {
		const formData = {
			name: values.name,
			email: values.email,
			url: values.url,
		};
		console.log("Values", formData);
	};

	return (
		<div className={`section ${s.ContactForm__section}`}>
			<div className="container">
				<div className={s.ContactForm__wrap}>
					<div className={s.ContactForm__wrap_img}>
						<div className={s.ContactForm__wrap_img_front_shadow}>
							<h3 className={s.ContactForm__title}>
								Building stellar websites for early startups
							</h3>
							<p className={s.ContactForm__text}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua ut
								enim.
							</p>
						</div>
					</div>
					<div className={s.ContactForm__wrap_form}>
						<h4 className={s.ContactForm__wrap_form_title}>Send inquiry</h4>
						<p className={s.ContactForm__text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore.
						</p>
						<Formik
							initialValues={initialValues}
							onSubmit={handleSubmit}
							validationSchema={validationSchema}
						>
							<Form className={s.ContactForm}>
								<label className={s.ContactForm__label}>
									<Field
										className={s.ContactForm__field}
										type="text"
										name="name"
										placeholder="Your Name"
									/>
									<div className={s.userSettings__errorMessage}>
										<ErrorMessage
											name="name"
											component="div"
											className={s.ContactForm__error}
										/>
									</div>
								</label>
								<label className={s.ContactForm__label}>
									<Field
										className={s.ContactForm__field}
										type="email"
										name="email"
										placeholder="Email"
									/>
									<div className={s.userSettings__errorMessage}>
										<ErrorMessage
											name="email"
											component="div"
											className={s.ContactForm__error}
										/>
									</div>
								</label>
								<label className={s.ContactForm__label}>
									<Field
										className={s.ContactForm__field}
										type="url"
										name="url"
										placeholder="Paste your Figma design URL"
									/>
									<div className={s.userSettings__errorMessage}>
										<ErrorMessage
											name="url"
											component="div"
											className={s.ContactForm__error}
										/>
									</div>
								</label>

								<button type="submit" className={s.ContactForm__button}>
									Send an Inquiry
								</button>
								<div className={s.ContactForm__button_href}>
									<HrefArrow name="Get in touch with us" color="var(--white)" />
								</div>
							</Form>
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
};
