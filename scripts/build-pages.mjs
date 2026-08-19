import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { projectRoot, readProject, renderSource } from "./lib-release.mjs";

const { release, source } = await readProject();
const html = renderSource(source, release);
const pagesDirectory = resolve(projectRoot, "outputs/pages");

await mkdir(pagesDirectory, { recursive: true });
await writeFile(resolve(pagesDirectory, "index.html"), html, "utf8");
await writeFile(resolve(pagesDirectory, ".nojekyll"), "", "utf8");
await writeFile(resolve(pagesDirectory, "LICENSE.txt"), await readFile(resolve(projectRoot, "LICENSE")));

console.log("GitHub-Pages-Artefakt gebaut: outputs/pages/index.html");
