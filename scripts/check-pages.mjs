import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { projectRoot, readProject, renderSource } from "./lib-release.mjs";

const { release, source } = await readProject();
const expected = renderSource(source, release);
const index = await readFile(resolve(projectRoot, "outputs/pages/index.html"), "utf8");
const license = await readFile(resolve(projectRoot, "outputs/pages/LICENSE.txt"), "utf8");

if (index !== expected) throw new Error("GitHub Pages ist nicht bytegleich mit dem aktuellen Produktstand.");
if (!license.startsWith("MIT License\n") || !license.includes("Copyright (c) 2026 Johannes Koch")) {
  throw new Error("GitHub Pages enthält nicht die verbindliche MIT-Lizenz.");
}

console.log("GitHub-Pages-Artefakt und Lizenz: OK");
