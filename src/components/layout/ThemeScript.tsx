"use client";

import { useLayoutEffect } from "react";
import {
  applyTheme,
  getStoredTheme,
  onSystemThemeChange,
  resolveTheme,
  themeScript,
} from "@/lib/theme";

/**
 * Sets `data-theme` on <html> before first paint, then keeps it in sync with
 * the system preference until the user makes an explicit choice.
 */
export function ThemeScript() {
  useLayoutEffect(() => {
    // Re-apply after React's dev-mode remount clears the attribute.
    applyTheme(resolveTheme());

    return onSystemThemeChange(() => {
      if (!getStoredTheme()) applyTheme(resolveTheme());
    });
  }, []);

  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}
