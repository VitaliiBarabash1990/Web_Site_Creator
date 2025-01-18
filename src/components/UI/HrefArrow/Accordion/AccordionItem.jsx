import { motion } from "framer-motion";
import s from "./Acordion.module.css";

export function AccordionItem({ content, isOpen, onToggle, title, index }) {
	return (
		<div className={s.accordion__wraper}>
			<div
				className={s.accordion__togle}
				onClick={onToggle} // Используем функцию переключения из пропсов
				onKeyDown={(e) => e.key === "Enter" && onToggle()}
				role="button"
				tabIndex={0}
			>
				<div className={s.accordion__togle_num}>
					0{index + 1}
					<h3 className={s.accordion__toggle_title}>{title}</h3>
				</div>

				<div>
					<svg
						className={
							isOpen
								? `${s.accordion__icon_arrow}`
								: `${s.accordion__icon_arrow_top}`
						}
					>
						<use href="/symbol-defs.svg#icon-x" />
					</svg>
				</div>
			</div>

			{isOpen && (
				<motion.div
					animate={{ height: "auto", opacity: 1 }}
					className={s.isOpen}
					exit={{ height: 0, opacity: 0 }}
					initial={{ height: 0, opacity: 0 }}
					style={{ overflow: "hidden" }}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 10 }}
						transition={{ delay: 0.2, duration: 0.3 }}
					>
						{content}
					</motion.div>
				</motion.div>
			)}
		</div>
	);
}
