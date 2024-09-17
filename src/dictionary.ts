export const plDictionary = {
	intro: "Artur Oborski",
	skills: "Tworzę:",
	skillsList: [
		"Aplikacje webowe przy użyciu React/SolidJS'a w TypeScript'cie lub używając samego JS'a z wykorzystaniem Tailwind'a",
		"Wtyczki do przeglądarki",
		"Backend przy użyciu Go, Sqlite/Postgres",
		"Aplikacje desktopowe przy użyciu Tauri'ego i frontendowego frameworku",
		"Aplikacje konsolowe w Rust-cie",
		"Aplikacje mobilne przy użyciu Flutter'a",
	],
	additional: "Dodatkowo:",
	additionalList: ["Dockeryzuję aplikacje serwerowe", "Deployuję aplikacje serwerowe"],
	projects: "Projekty",
	projectDescriptions: {
		ytSync: "Rozszerzenie do przeglądarki z SolidJS'em jako frontend i z backendem napisanym w Go. Dowiedziałem się jak działa frontend YouTube'a i jak mogę to wykorzystać w moim rozszerzeniu, a potem stworzyłem rozszerzenie do wspólnego oglądania YouTube.",
		leagueVoice:
			"Projekt stworzony dla komunikacji w grze League of Legends. League of Legends nie obsługuje czatu głosowego w grze między graczami w tej samej drużynie, więc stworzyłem swój projekt. Stworzony z użyciem Next.js jako frontend, Tauri'ego dla aplikacji desktopowej i Node.js jako backend.",
		rivalBatteryTray:
			"Aplikacja na Windowsa stworzona w Rust, która pokazuje stan baterii bezprzewodowej myszy Rival 650. Denerwował mnie fakt, że oficjalna aplikacja ma tylko 3 wskaźniki baterii, więc użyłem inżynierii wstecznej, aby znaleźć sposób komunikacji aplikacji z myszką i stworzyłem własną aplikację, która pokazuje procent baterii.",
		cookeryBook:
			"Aplikacja webowa stworzona z Next.js'em jako frontend i Firebase'em jako backend. Została stworzona dla mojej siostry, aby mogła dzielić się swoimi przepisami z innymi.",
	},
};

export type Dictionary = typeof plDictionary;

export const enDictionary: Dictionary = {
	intro: "Artur Oborski",
	skills: "I make:",
	skillsList: [
		"Web apps using React/SolidJS with TypeScript or plain JS and Tailwind",
		"Browser extensions",
		"Backend using Go, Sqlite/Postgres",
		"Desktop apps with Tauri and frontend framework",
		"CLI apps in Rust",
		"Mobile apps using Flutter",
	],
	additional: "Additionally:",
	additionalList: ["I dockerize server apps", "I deploy server apps"],
	projects: "Projects",
	projectDescriptions: {
		ytSync: "Browser extension made with SolidJS frontend with Go backend. I did research to find out how YouTube frontend works and created extension for watching YouTube together.",
		leagueVoice:
			"Project made for League of Legends in game communication. League of Legends doesn't support voice chat in-game between players in the same team. Made with Next.js as frontend, Tauri for desktop app, and Node.js backend.",
		rivalBatteryTray:
			"Windows app made with Rust, which shows battery status of rival 650 wireless mouse. I was annoyed by the fact that official app has only 3 indicators for battery, so I reversed app's call to mouse and made my own app which shows battery percentage.",
		cookeryBook:
			"Website made with Next.js as frontend and Firebase as backend. It was created for my sister to share her recipes with others.",
	},
};
