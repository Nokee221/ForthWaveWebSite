import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Whether a file exists in /public, given its URL path (e.g. "/images/a.jpg").
 * Server-only. Lets a section show a placeholder until an image is added.
 */
export function publicFileExists(src: string) {
  return existsSync(join(process.cwd(), "public", src));
}
