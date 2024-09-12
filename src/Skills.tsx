import { t } from "./language";

export default function Skills() {
	return (
		<>
			<h2 class="text-xl font-semibold text-center">{t("skills")}</h2>
			<ul class="list-disc">
				{t("skillsList").map((el) => (
					<li>{el}</li>
				))}
			</ul>
			<h2 class="text-xl font-semibold text-center">{t("additional")}</h2>
			<ul class="list-disc">
				{t("additionalList").map((el) => (
					<li>{el}</li>
				))}
			</ul>
		</>
	);
}
