import { access, readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { projectRoot, readProject } from "./lib-release.mjs";

const required = [
  ".agents/plugins/marketplace.json",
  ".github/workflows/check.yml",
  "CHANGELOG.md",
  "CONTRIBUTING.md",
  "LICENSE",
  "README.md",
  "SECURITY.md",
  "docs/GITHUB_BEREITSCHAFT.md",
  "docs/ORDNERSTRUKTUR.md",
  "docs/PLUGIN.md",
  "docs/QUALITAETSGATES.md",
  "docs/VERSIONIERUNG_UND_RELEASES.md",
  "plugins/bitte-stil-baukasten/.codex-plugin/plugin.json",
  "plugins/bitte-stil-baukasten/skills/bitte-stil-baukasten/SKILL.md",
  "quality/release-metadata.json",
  "src/index.html",
  "versions/aktuell",
  "versions/archiv/README.md",
  "versions/aenderungshistorie/README.md"
];

for (const path of required) {
  await access(resolve(projectRoot, path));
}

const { release } = await readProject();
const rootEntries = await readdir(projectRoot, { withFileTypes: true });
const rootHtml = rootEntries.filter((entry) => entry.isFile() && entry.name.endsWith(".html")).map((entry) => entry.name).sort();
const expectedHtml = [release.artifactFile, release.aliasFile].sort();
if (JSON.stringify(rootHtml) !== JSON.stringify(expectedHtml)) {
  throw new Error(`Root-HTML-Vertrag verletzt: ${rootHtml.join(", ")}`);
}

if (rootEntries.some((entry) => entry.name === "Versionen")) {
  throw new Error("Der veraltete Ordner 'Versionen' darf nicht neben 'versions' bestehen.");
}

const marketplace = JSON.parse(await readFile(resolve(projectRoot, ".agents/plugins/marketplace.json"), "utf8"));
const entry = marketplace.plugins.find((plugin) => plugin.name === "bitte-stil-baukasten");
if (!entry || entry.source?.path !== "./plugins/bitte-stil-baukasten") {
  throw new Error("Der Marketplace verweist nicht auf das repository-lokale Plugin.");
}
if (!entry.policy?.installation || !entry.policy?.authentication || !entry.category) {
  throw new Error("Der Marketplace-Eintrag ist unvollständig.");
}

console.log("Ordner- und Marketplace-Struktur: OK");
