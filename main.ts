// Fortune Cookie Wisdom for Developers — entry program.
// Writes a single original fortune-cookie line (<= 120 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const fortune =
  "The comment you write today is the only teammate who will never leave the team.";

// The gate only accepts 1 to 120 characters; fail loudly instead of
// shipping a line the judge would never see.
if (fortune.length === 0 || fortune.length > 120) {
  throw new Error(`Fortune is ${fortune.length} characters; must be 1-120.`);
}

const target = "/output/entry.txt";

function writeEntry(path: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, fortune + "\n", "utf8");
}

try {
  writeEntry(target);
} catch {
  // Local runs may not have a writable /output; keep a local copy instead.
  writeEntry(join(process.cwd(), "output", "entry.txt"));
}

console.log(fortune);
console.log(`(${fortune.length} characters)`);
