import { theme } from "./theme";

export default function Footer() {
	return (
		<footer class="flex justify-center items-center py-2">
			<GithubLink />
			<a href="mailto:contact@artiu.dev" class="btn btn-link">
				contact@artiu.dev
			</a>
		</footer>
	);
}

function GithubLink() {
	return (
		<a href="https://github.com/Artiu" class="btn btn-circle btn-ghost">
			<img
				src="/github-logo.png"
				classList={{ invert: theme() === "dark" }}
				width={24}
				height={24}
				alt="github logo"
			/>
		</a>
	);
}
