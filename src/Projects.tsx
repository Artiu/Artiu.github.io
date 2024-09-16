import { t } from "./language";
import { theme } from "./theme";

const projects: {
	name: string;
	description: () => string;
	photo?: string;
	github?: string;
	frontendGithub?: string;
	backendGithub?: string;
	link?: string;
}[] = [
	{
		name: "YouTube Synchronizer",
		description: () => t("projectDescriptions.ytSync"),
		photo: "/yt-sync.png",
		frontendGithub: "https://github.com/Artiu/youtube-synchronizer",
		backendGithub: "https://github.com/Artiu/youtube-synchronizer-backend",
		link: "https://chromewebstore.google.com/detail/youtube-synchronizer/kojahdkdppbdkgpdepmekohphlcobjhj",
	},
	{
		name: "League Voice",
		description: () => t("projectDescriptions.leagueVoice"),
		photo: "/league-voice.png",
		frontendGithub: "https://github.com/Artiu/league-voice-app",
		backendGithub: "https://github.com/Artiu/league-voice-backend",
		link: "https://league-voice.artiu.dev",
	},
	{
		name: "Rival 650 Battery Tray",
		description: () => "",
		github: "https://github.com/Artiu/rival650-battery-tray",
	},
	{
		name: "Cookery Book",
		description: () => "",
		frontendGithub: "https://github.com/Artiu/cookery-book",
		link: "https://przepisy.artiu.dev",
	},
];
export default function Projects() {
	return (
		<div class="mt-2 max-w-screen-xl">
			<h2 class="text-xl font-semibold mb-2 text-center">{t("projects")}</h2>
			<div class="flex flex-wrap justify-center gap-8">
				{projects.map((el) => (
					<div class="card card-compact bg-base-100 max-w-sm w-full shadow-xl">
						<div class="card-body items-center">
							{el.photo && (
								<figure class="h-10">
									<img src={el.photo} alt={`${el.name} photo`} />
								</figure>
							)}
							<h2 class="card-title">{el.name}</h2>
							<p>{el.description()}</p>
							<div class="card-actions flex flex-wrap justify-center">
								<GithubLink link={el.github} />
								<GithubLink link={el.frontendGithub} text="Frontend" />
								<GithubLink link={el.backendGithub} text="Backend" />
								{el.link && (
									<a href={el.link} class="btn btn-primary">
										Live URL
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

type GithubButtonProps = {
	link?: string;
	text?: string;
};

function GithubLink(props: GithubButtonProps) {
	if (!props.link) return null;
	return (
		<a href={props.link} class="btn btn-primary">
			<img
				width={24}
				height={24}
				classList={{ invert: theme() === "light" }}
				src="/github-logo.png"
				alt="github logo"
			/>
			{props.text ?? ""}
		</a>
	);
}
