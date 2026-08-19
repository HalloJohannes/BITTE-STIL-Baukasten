import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export async function readProject() {
  const packageJson = JSON.parse(await readFile(resolve(projectRoot, "package.json"), "utf8"));
  const release = JSON.parse(await readFile(resolve(projectRoot, "quality/release-metadata.json"), "utf8"));

  if (packageJson.name !== "bitte-stil-baukasten") {
    throw new Error("Unerwartete Paketkennung.");
  }
  if (packageJson.version !== release.version) {
    throw new Error("package.json und release-metadata.json führen unterschiedliche Versionen.");
  }
  if (packageJson.license !== "MIT" || release.license !== "MIT") {
    throw new Error("Die MIT-Lizenz muss in Paket und Release-Metadaten geführt werden.");
  }

  const source = await readFile(resolve(projectRoot, release.sourceFile), "utf8");
  return { packageJson, release, source };
}

export function renderSource(source, release) {
  const replacements = new Map([
    ["__BITTE_STIL_VERSION__", release.version],
    ["__BITTE_STIL_BUILD__", release.build],
    ["__BITTE_STIL_RELEASE_DATE__", release.releaseDate]
  ]);

  let html = source;
  for (const [token, value] of replacements) {
    html = html.replaceAll(token, value);
  }
  if (/__BITTE_STIL_[A-Z_]+__/.test(html)) {
    throw new Error("Nicht ersetzter Release-Platzhalter in der HTML.");
  }
  return html;
}

export function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}
