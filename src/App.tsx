import Skills from "./Skills";
import { t } from "./language";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
	return (
		<>
			<Navbar />
			<main class="p-8 flex flex-col items-center">
				<div class="flex flex-col gap-2 max-w-lg">
					<h1 class="text-2xl font-bold text-center mb-2">{t("intro")}</h1>
					<Skills />
				</div>
				<Projects />
			</main>
			<Footer />
		</>
	);
}

export default App;
