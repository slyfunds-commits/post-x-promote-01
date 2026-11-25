// A working post-x-promote-make-your-own-bounty-01 entry (Node 22, standard library only):
// it copies POST.json from the repository root to /output/POST.json, where the gate reads it.
// That is all the program has to do. The entry is the post itself: one post of your own on X
// that quotes make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646), a photo of its own attached,
// make.fun or the @makefunai tag and your play code in its text; POST.json names the post,
// and the house reads its replies, reposts and quotes from X.
// Nothing this program writes about the post is scored.
//
// The post this entry hands in:
//   https://x.com/call_me_slyy/status/2125596466966065448
// It quotes make.fun's launch post (https://x.com/makefunai/status/2124915864336236646),
// carries a photo of its own, and its text carries the make.fun link, @makefunai and the
// play code makefun-fleece-canopy-sandbar.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
