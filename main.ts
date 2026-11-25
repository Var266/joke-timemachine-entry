import { mkdirSync, writeFileSync } from "node:fs";

const label =
  "WARNING: Passengers who kill their own grandfather will be charged a full return fare.";

// Gate self-check: the competition allows 1-120 characters; never write an
// over-gate label silently.
if ([...label].length > 120) {
  throw new Error(`label is ${[...label].length} chars, over the 120-char gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label, "utf8");
