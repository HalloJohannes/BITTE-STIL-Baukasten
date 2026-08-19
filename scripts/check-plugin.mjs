import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { projectRoot } from "./lib-release.mjs";

const pluginRoot = resolve(projectRoot, "plugins/bitte-stil-baukasten");
const manifest = JSON.parse(await readFile(resolve(pluginRoot, ".codex-plugin/plugin.json"), "utf8"));
const skill = await readFile(resolve(pluginRoot, "skills/bitte-stil-baukasten/SKILL.md"), "utf8");
const agent = await readFile(resolve(pluginRoot, "skills/bitte-stil-baukasten/agents/openai.yaml"), "utf8");

if (manifest.name !== "bitte-stil-baukasten" || !/^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/.test(manifest.version)) {
  throw new Error("Plugin-Name oder semantische Version ist ungültig.");
}
if (manifest.author?.name !== "Johannes Koch" || manifest.license !== "MIT") {
  throw new Error("Plugin-Autor oder Lizenz ist nicht korrekt geführt.");
}
if (manifest.skills !== "./skills/" || manifest.interface?.displayName !== "BITTE STIL Baukasten") {
  throw new Error("Plugin-Skillpfad oder sichtbarer Name ist nicht korrekt.");
}
if (!skill.startsWith("---\nname: bitte-stil-baukasten\n") || !skill.includes("description:") || skill.includes("[TODO:")) {
  throw new Error("Skill-Frontmatter ist unvollständig.");
}
for (const field of ["display_name:", "short_description:", "default_prompt:"]) {
  if (!agent.includes(field)) throw new Error(`Skill-UI-Metadatum fehlt: ${field}`);
}

console.log("Plugin-Manifest und Skill-Vertrag: OK");
