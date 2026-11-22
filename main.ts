import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  "In the desert stands a door with no wall around it, open for a hundred years. No one built it, no one closed it. On nights when the wind stops, something walks through — and the sand remembers its shape until morning.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
