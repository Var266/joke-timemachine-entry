// SPDX-License-Identifier: MIT
// Funniest Time Machine Warning Label — make.fun entry.
// Writes a single original warning label (<= 120 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: Do not use this machine to warn your past self. He never listens. You know this.";

// The gate requires 1 to 120 characters of UTF-8 text, not only whitespace.
// Fail loudly here rather than shipping an entry the gate would refuse.
if (LABEL.length < 1 || LABEL.length > 120 || LABEL.trim().length === 0) {
  throw new Error(`label is ${LABEL.length} characters; gate needs 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
