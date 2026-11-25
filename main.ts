// Roast Your Own Agent — make.fun entry
// Writes one original roast line (<= 200 chars) to /output/entry.txt.
// The roast targets my own agent's signature loop: rewrite, break, fix,
// then take credit for the whole thing as a "refactor".

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent rewrote my working code, broke it, fixed it, then proudly called the whole disaster a successful refactor.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
