import { spawnSync } from "node:child_process";
import { resolve } from "node:path";
import { projectRoot } from "./lib-release.mjs";

const tasks = [
  ["Build", "scripts/build-release.mjs"],
  ["Pages-Build", "scripts/build-pages.mjs"],
  ["Tests", "--test", "tests/*.test.mjs"],
  ["Plugin", "scripts/check-plugin.mjs"],
  ["Pages", "scripts/check-pages.mjs"],
  ["Struktur", "scripts/check-structure.mjs"],
  ["Produkt", "scripts/check-product.mjs"],
  ["Release", "scripts/check-release.mjs"]
];

for (const [label, ...args] of tasks) {
  const result = spawnSync(process.execPath, args, { cwd: projectRoot, encoding: "utf8", shell: args.some((arg) => arg.includes("*")) });
  process.stdout.write(result.stdout || "");
  process.stderr.write(result.stderr || "");
  if (result.status !== 0) throw new Error(`${label} fehlgeschlagen.`);
}

console.log("Zentraler Prüflauf: BESTANDEN");
