export const plDictionary = {
	intro: "Artur Oborski",
	skills: "Tworzę:",
	skillsList: [
		"Aplikacje webowe przy użyciu React/SolidJS'a w TypeScript'cie lub używając samego JS'a",
		"Wtyczki do przeglądarki",
		"Backend przy użyciu Go",
		"Aplikacje desktopowe przy użyciu Tauri'ego i frontendowego frameworku",
		"Aplikacje konsolowe w Rust-cie",
		"Aplikacje mobilne przy użyciu Flutter'a",
	],
	additional: "Dodatkowo:",
	additionalList: ["Dockeryzuję aplikacje serwerowe", "Deployuję aplikacje serwerowe"],
	projects: "Projekty",
	projectDescriptions: {
		ytSync: "",
		leagueVoice: "",
	},
};

export type Dictionary = typeof plDictionary;

// sql i mongo, git, github
//zmienic opisy seo
export const enDictionary: Dictionary = {
	intro: "Artur Oborski",
	skills: "I make:",
	skillsList: [
		"Web apps using React/SolidJS with TypeScript or plain JS",
		"Browser extensions",
		"Backend using Go",
		"Desktop apps with Tauri and frontend framework",
		"CLI apps in Rust",
		"Mobile apps using Flutter",
	],
	additional: "Additionally:",
	additionalList: ["I dockerize server apps", "I deploy server apps"],
	projects: "Projects",
	projectDescriptions: {
		ytSync: "I made this extension to watch YouTube with friends. It's made using SolidJS for ",
		leagueVoice: "",
	},
};
