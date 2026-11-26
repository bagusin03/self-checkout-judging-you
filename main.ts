// The Self-Checkout Is Judging You — make.fun entry.
// One original line, in the self-checkout machine's own voice: smug,
// petty, literal. It scans twelve yoghurts and nothing else, notes the
// shopper brought no spoon and no plan, then turns its own catchphrase —
// "please place your item in the bagging area" — back on the shopper.
// Written to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness,
// no environment access.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Twelve yoghurts, no spoon, no plan. Please place your entire personality in the bagging area.";

// The sealed gate allows at most 200 characters; keep the limit in one
// named place so the guard and the comment can never drift apart.
const MAX_CHARS = 200;

// Guard the sealed gate ourselves: one line, 1-MAX_CHARS characters, not
// blank, no stray whitespace at either end, no line breaks of any kind.
// Fail loudly instead of ever writing an entry the scorer would reject.
const chars = [...LINE].length;
const bytes = Buffer.byteLength(LINE, "utf8");
if (
  chars < 1 ||
  chars > MAX_CHARS ||
  !LINE.trim() ||
  LINE !== LINE.trim() ||
  LINE.includes("\n") ||
  LINE.includes("\r")
) {
  throw new Error(`entry fails gate: ${chars} chars, ${bytes} bytes`);
}

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, LINE, "utf8");

// Verify the written file round-trips exactly, byte for byte, with no
// trailing newline added.
const back = fs.readFileSync(outPath, "utf8");
if (back !== LINE || Buffer.byteLength(back, "utf8") !== bytes) {
  throw new Error("entry.txt round-trip mismatch");
}
console.log(`wrote ${chars} chars (${bytes} bytes) to ${outPath}`);
