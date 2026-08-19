import { readProject, renderSource } from "./lib-release.mjs";

const { release, source } = await readProject();
const html = renderSource(source, release);

const requiredFragments = [
  "BITTE STIL Baukasten",
  'id="de"',
  'id="en"',
  'id="prompt"',
  'id="copy"',
  'id="aboutOpen"',
  'id="aboutDialog"',
  "Über diese Anwendung",
  "About this app",
  "Unterstützung von Claude",
  "Diese Anwendung „BITTE STIL Baukasten“ wurde 2026",
  "Claude/Anthropic, Codex/OpenAI",
  "Vielfalt &amp; Stereotype",
  "Diversity &amp; stereotypes",
  "Alternativtext",
  "alt text",
  "https://www.linkedin.com/in/johannes-koch-1964a3240",
  "https://opensource.org/license/mit",
  "rel='license noopener'"
];

for (const fragment of requiredFragments) {
  if (!html.includes(fragment)) throw new Error(`Produktvertrag fehlt: ${fragment}`);
}

if (/<(?:script|img|link)\b[^>]+(?:src|href)=["']https?:\/\//i.test(html)) {
  throw new Error("Externe Laufzeitressource gefunden; die Anwendung muss offline lauffähig bleiben.");
}
if (/\b(?:fetch|XMLHttpRequest)\s*\(/.test(html)) {
  throw new Error("Netzwerkaufruf im Produktcode gefunden.");
}
if (/\[TODO:|FIXME/.test(html)) {
  throw new Error("Unfertiger Platzhalter im Produktcode gefunden.");
}

console.log("Produkt-, Offline- und Lizenzvertrag: OK");
