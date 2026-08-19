import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { projectRoot, readProject, renderSource, sha256 } from "./lib-release.mjs";

const { release, source } = await readProject();
const html = renderSource(source, release);
const releaseDirectory = resolve(projectRoot, "outputs", `release-${release.build}`);
const currentDirectory = resolve(projectRoot, "versions/aktuell");

await mkdir(releaseDirectory, { recursive: true });
await mkdir(currentDirectory, { recursive: true });

const destinations = [
  resolve(projectRoot, release.artifactFile),
  resolve(projectRoot, release.aliasFile),
  resolve(currentDirectory, release.artifactFile),
  resolve(releaseDirectory, release.artifactFile)
];

for (const destination of destinations) {
  await writeFile(destination, html, "utf8");
}

for (const file of ["README.md", "LICENSE"]) {
  await writeFile(resolve(releaseDirectory, file), await readFile(resolve(projectRoot, file)));
}

const manifest = {
  product: release.product,
  version: release.version,
  build: release.build,
  artifact: release.artifactFile,
  sha256: sha256(html),
  bytes: Buffer.byteLength(html),
  source: release.sourceFile,
  license: release.license
};
await writeFile(resolve(releaseDirectory, "release-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`Gebaut: ${release.artifactFile}`);
console.log(`SHA-256: ${manifest.sha256}`);
