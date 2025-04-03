const fs = require("node:fs");
const path = require("node:path");

const data = path.join(__dirname, "data");
const templates = path.join(__dirname, "templates");
const docs = path.join(__dirname, "docs");

const episodes = JSON.parse(
	fs.readFileSync(path.join(data, "episodes.json"), "utf8")
).episodes;
const latestEpisode = episodes[0];

try {
	fs.mkdirSync(path.join(docs, "episodes"), { recursive: true });
} catch (error) {
	if (error.code !== "EEXIST") {
		throw error;
	}
}

episodes.forEach((episode) => {
	const episodeHtml = fs
		.readFileSync(path.join(templates, "episode.html"), "utf8")
		.replace("Episode Title", episode.title)
		.replace("Guest Name", episode.guest)
		.replace("YYYY-MM-DD", episode.date)
		.replace(
			'src=""',
			`src="https://share.descript.com/embed/${episode.descriptId}"`
		)
		.replace("Episode description goes here.", episode.description);

	fs.writeFileSync(
		path.join(docs, "episodes", `${episode.id}.html`),
		episodeHtml
	);
});

const mainHtml = fs
	.readFileSync(path.join(templates, "index.html"), "utf8")
	.replace("XoQdDVHpWTj", latestEpisode.descriptId);

const episodeList = episodes
	.map(
		(episode) => `
					<li>
						<a href="/episodes/${episode.id}.html">
							${episode.title} - ${episode.guest} (${episode.date})
						</a>
					</li>
`
	)
	.join("");

const finalHtml = mainHtml.replace(
	`
					<!-- Episode list will be generated from episodes.json -->
`,
	episodeList
);

fs.writeFileSync(path.join(docs, "index.html"), finalHtml);

console.log("Build complete!");
