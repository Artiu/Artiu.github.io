import Skills from "./Skills";
import { t } from "./language";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
	return (
		<>
			<Navbar />
			<main class="p-4">
				<div class="p-4 mx-auto md:px-8">
					<div class="flex flex-col gap-2 max-w-lg">
						<h1 class="text-2xl font-bold text-center mb-2">{t("intro")}</h1>
						<Skills />
					</div>
					<Projects />
				</div>
			</main>
		</>
	);
}

export default App;
