import test from "node:test";
import assert from "node:assert/strict";
import { readProject, renderSource } from "../scripts/lib-release.mjs";

test("Quelle rendert ohne Release-Platzhalter", async () => {
  const { release, source } = await readProject();
  const html = renderSource(source, release);
  assert.doesNotMatch(html, /__BITTE_STIL_[A-Z_]+__/);
  assert.match(html, new RegExp(`application-version" content="${release.version.replaceAll(".", "\\.")}`));
});

test("deutsche und englische Prompt-Grundlage bleiben vorhanden", async () => {
  const { source } = await readProject();
  assert.match(source, /Beschreibe hier in 1–3 Sätzen deinen Inhalt/);
  assert.match(source, /Describe your content here in 1–3 sentences/);
  assert.match(source, /Mache im Bild selbst sichtbar/);
  assert.match(source, /Make it visible within the image itself/);
});

test("Kernoptionen für verantwortungsvolle Gestaltung bleiben erhalten", async () => {
  const { source } = await readProject();
  for (const label of ["Stereotype allgemein vermeiden", "Behinderung selbstverständlich mitdenken", "Alternativtext mitliefern lassen"]) {
    assert.ok(source.includes(label), `Fehlende Kernoption: ${label}`);
  }
});

test("Namens- und Lizenzlinks sind getrennt und sicher", async () => {
  const { source } = await readProject();
  assert.match(source, /Diese Anwendung „BITTE STIL Baukasten“ wurde 2026/);
  assert.match(source, /Claude\/Anthropic, Codex\/OpenAI/);
  assert.match(source, /linkedin\.com\/in\/johannes-koch-1964a3240/);
  assert.match(source, /opensource\.org\/license\/mit/);
  assert.match(source, /rel='license noopener'/);
});

test("Designsystem und Infodialog bleiben Teil des Produkts", async () => {
  const { source } = await readProject();
  for (const fragment of [
    "--petrol:#123c4a",
    "--teal:#1a9b93",
    "--mint-deep:#badfd8",
    'id="aboutOpen"',
    'id="aboutDialog"',
    "Über diese Anwendung",
    "About this app",
    "Unterstützung von Claude",
    "with Codex"
  ]) {
    assert.ok(source.includes(fragment), `Fehlender Design- oder Infobaustein: ${fragment}`);
  }
});
