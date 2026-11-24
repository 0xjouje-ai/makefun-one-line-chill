// One Line, One Chill — entry program (Node 22, stdlib only, no network).
// Writes a single original horror sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I taught my smart speaker to say goodnight in my late wife's voice, and last night it whispered it before I asked.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
