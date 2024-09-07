import { createMemo, createSignal } from "solid-js";
import { enDictionary, plDictionary } from "./dictionary";
import * as i18n from "@solid-primitives/i18n";

type Language = "pl" | "en";

const getInitialLanguage = (): Language => {
	const lang = localStorage.getItem("language");
	if (lang === "pl" || lang === "en") {
		return lang;
	}
	return "pl";
};

const [language, setLanguage] = createSignal<Language>(getInitialLanguage());
const dictionary = createMemo(() =>
	i18n.flatten(language() === "pl" ? plDictionary : enDictionary)
);
const t = i18n.translator(dictionary);

const updateLanguage = (newLanguage: Language) => {
	setLanguage(newLanguage);
	localStorage.setItem("language", newLanguage);
};

const toggleLanguage = () => {
	if (language() === "pl") {
		updateLanguage("en");
	} else {
		updateLanguage("pl");
	}
};

export { t, language, updateLanguage, toggleLanguage };
