import { createSignal } from "solid-js";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
	const theme = localStorage.getItem("theme");
	if (theme === "light" || theme === "dark") {
		return theme;
	}
	return "dark";
};

const [theme, setTheme] = createSignal<Theme>(getInitialTheme());

const updateTheme = (newTheme: Theme) => {
	setTheme(newTheme);
	localStorage.setItem("theme", newTheme);
};

const toggleTheme = () => {
	if (theme() === "light") {
		updateTheme("dark");
	} else {
		updateTheme("light");
	}
};

export { theme, updateTheme, toggleTheme };
