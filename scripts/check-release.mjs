import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { projectRoot, readProject, renderSource, sha256 } from "./lib-release.mjs";

const { release, source } = await readProject();
const expected = renderSource(source, release);
const paths = [
  release.artifactFile,
  release.aliasFile,
  `versions/aktuell/${release.artifactFile}`,
  `outputs/release-${release.build}/${release.artifactFile}`
];

for (const path of paths) {
  const actual = await readFile(resolve(projectRoot, path), "utf8");
  if (actual !== expected) throw new Error(`Release-Parität verletzt: ${path}`);
}

const manifestPath = resolve(projectRoot, `outputs/release-${release.build}/release-manifest.json`);
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
if (manifest.sha256 !== sha256(expected) || manifest.bytes !== Buffer.byteLength(expected)) {
  throw new Error("Release-Manifest stimmt nicht mit der HTML überein.");
}

console.log("Release-Parität und Prüfsumme: OK");
