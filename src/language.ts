import { createMemo, createSignal } from "solid-js";
import { enDictionary, plDictionary } from "./dictionary";
import * as i18n from "@solid-primitives/i18n";

const languages = ["pl", "en"];
type Language = (typeof languages)[number];

const getInitialLanguage = (): Language => {
	const lang = localStorage.getItem("language");
	if (lang && languages.includes(lang)) {
		return lang;
	}
	const prefferedLanguage = languages.find((el) => navigator.language.startsWith(el));
	if (prefferedLanguage) {
		return prefferedLanguage;
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
