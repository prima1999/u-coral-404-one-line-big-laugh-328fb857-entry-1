// One Line, Big Laugh — one funny line, written to the entry file.
// Node 22 runs this file as-is. Standard library only: no clock, no random, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join as joinPath } from "node:path";

const LINE: string = "My grandma's Wi-Fi password is her late husband's birthday, and the network is named after his mistress.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(joinPath(outputDir, "entry.txt"), LINE, "utf8");
