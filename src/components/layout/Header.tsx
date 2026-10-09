"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  AnimatePresence,
  LazyMotion,
  MotionConfig,
  domAnimation,
} from "motion/react";
import * as m from "motion/react-m";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { duration, ease } from "@/lib/motion";
import { useMediaQuery } from "@/lib/useMediaQuery";

const MENU_ID = "mobile-menu";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function useScrolled() {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 8,
    () => false,
  );
}

export function Header() {
  const scrolled = useScrolled();
  const isDesktop = useMediaQuery("(min-width: 64rem)");
  const [menuRequested, setMenuRequested] = useState(false);
  const menuOpen = menuRequested && !isDesktop;
  const triggerRef = useRef<HTMLButtonElement>(null);

  // While the menu is open: lock page scroll, take the page content out of the
  // tab order, and close on Escape.
  useEffect(() => {
    if (!menuOpen) return;

    const main = document.querySelector("main");
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setMenuRequested(false);
      triggerRef.current?.focus();
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <header
          className={cn(
            "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-(--duration-normal) ease-standard",
            menuOpen
              ? "border-border bg-background"
              : scrolled
                ? "border-border bg-background/80 backdrop-blur-md"
                : "border-transparent",
          )}
        >
          <Container
            className={cn(
              "flex h-16 items-center justify-between gap-6 transition-[height] duration-(--duration-normal) ease-standard",
              !scrolled && "lg:h-20",
            )}
          >
            <a
              href="#top"
              className="text-lg font-extrabold tracking-tight"
              onClick={() => setMenuRequested(false)}
            >
              FourthWave
            </a>

            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-9">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm font-medium text-muted transition-colors duration-(--duration-fast) ease-standard hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <div className="ml-2 hidden sm:block">
                <Button href="#contact">Let&apos;s Talk</Button>
              </div>
              <button
                ref={triggerRef}
                type="button"
                aria-expanded={menuOpen}
                aria-controls={MENU_ID}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuRequested(!menuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-pill lg:hidden"
              >
                <span aria-hidden="true" className="relative block h-3 w-5">
                  <span
                    className={cn(
                      "absolute inset-x-0 top-0 h-0.5 rounded-pill bg-foreground transition-[translate,rotate] duration-(--duration-normal) ease-standard",
                      menuOpen && "translate-y-[5px] rotate-45",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-0.5 rounded-pill bg-foreground transition-[translate,rotate] duration-(--duration-normal) ease-standard",
                      menuOpen && "-translate-y-[5px] -rotate-45",
                    )}
                  />
                </span>
              </button>
            </div>
          </Container>

          <AnimatePresence>
            {menuOpen && (
              <m.div
                id={MENU_ID}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: duration.fast, ease: ease.standard }}
                className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto bg-background"
              >
                <Container className="flex min-h-full flex-col justify-between gap-12 pt-6 pb-10">
                  <nav aria-label="Mobile">
                    <ul>
                      {navigation.map((item, index) => (
                        <m.li
                          key={item.href}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: duration.normal,
                            ease: ease.emphasized,
                            delay: 0.04 * index,
                          }}
                          className="border-b border-border"
                        >
                          <a
                            href={item.href}
                            onClick={() => setMenuRequested(false)}
                            className="block py-5 text-subheading font-semibold"
                          >
                            {item.label}
                          </a>
                        </m.li>
                      ))}
                    </ul>
                  </nav>

                  <Button
                    href="#contact"
                    size="lg"
                    className="w-full"
                    onClick={() => setMenuRequested(false)}
                  >
                    Let&apos;s Talk
                  </Button>
                </Container>
              </m.div>
            )}
          </AnimatePresence>
        </header>
      </MotionConfig>
    </LazyMotion>
  );
}
