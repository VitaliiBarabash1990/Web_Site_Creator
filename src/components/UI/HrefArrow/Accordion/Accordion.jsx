import { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import sections from "./Sections.json";
import s from "./Acordion.module.css";

export function Accordion() {
	const [openIndex, setOpenIndex] = useState(null); // Хранит индекс открытого элемента

	function handleToggle(index) {
		setOpenIndex(openIndex === index ? null : index); // Закрываем, если кликнули на уже открытый
	}

	return (
		<div id="questions" className={`container ${s.accordion__container}`}>
			<div className={s.accordion__section}>
				{sections.map((section, index) => (
					<AccordionItem
						key={index}
						index={index}
						content={section.content}
						isOpen={openIndex === index} // Проверяем, открыт ли этот элемент
						onToggle={() => handleToggle(index)} // Передаём функцию для переключения
						title={section.title}
					/>
				))}
			</div>
		</div>
	);
}
