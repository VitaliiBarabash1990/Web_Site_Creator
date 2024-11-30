import { createRoot } from "react-dom/client";

import App from "./components/app/App.jsx";
import { BrowserRouter } from "react-router-dom";

import "modern-normalize";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
