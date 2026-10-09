"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * The current year, so a copyright line never goes out of date. It is read
 * in the browser: the page is pre-rendered, and a year baked in at build
 * time would be wrong after New Year. Renders nothing until then.
 */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return year;
}
