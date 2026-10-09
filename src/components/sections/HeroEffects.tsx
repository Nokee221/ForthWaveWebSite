"use client";

import { type ReactNode, useEffect, useRef } from "react";
import {
  LazyMotion,
  domAnimation,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import * as m from "motion/react-m";
import { useMediaQuery } from "@/lib/useMediaQuery";

// Pointer effects update motion values directly, so moving the pointer never
// re-renders React.

const GLOW_SIZE = 720;
const GLOW_SPRING = { stiffness: 50, damping: 20, mass: 1 };
const SHIFT_SPRING = { stiffness: 40, damping: 18, mass: 1 };

/** Mouse-like pointer on a desktop-width screen, and motion allowed. */
function usePointerEffectsEnabled() {
  const desktopPointer = useMediaQuery(
    "(hover: hover) and (pointer: fine) and (min-width: 64rem)",
  );
  const reduceMotion = useReducedMotion();
  return desktopPointer && !reduceMotion;
}

/**
 * A large, soft light that trails the pointer across the Hero section.
 * It sits behind the text and buttons.
 */
export function HeroGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = usePointerEffectsEnabled();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const visibility = useMotionValue(0);
  const x = useSpring(pointerX, GLOW_SPRING);
  const y = useSpring(pointerY, GLOW_SPRING);
  const opacity = useSpring(visibility, GLOW_SPRING);

  useEffect(() => {
    const section = ref.current?.closest("section");
    if (!enabled || !section) return;

    function onMove(event: PointerEvent) {
      const bounds = section!.getBoundingClientRect();
      const nextX = event.clientX - bounds.left - GLOW_SIZE / 2;
      const nextY = event.clientY - bounds.top - GLOW_SIZE / 2;
      // Start under the pointer instead of sweeping in from the corner.
      if (visibility.get() === 0) {
        x.jump(nextX);
        y.jump(nextY);
      }
      pointerX.set(nextX);
      pointerY.set(nextY);
      visibility.set(0.8);
    }
    function onLeave() {
      visibility.set(0);
    }

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, pointerX, pointerY, visibility, x, y]);

  if (!enabled) return <div ref={ref} hidden />;

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        aria-hidden="true"
        style={{ x, y, opacity, width: GLOW_SIZE, height: GLOW_SIZE }}
        className="pointer-events-none absolute top-0 left-0 bg-[radial-gradient(closest-side,var(--glow),transparent)] will-change-transform"
      />
    </LazyMotion>
  );
}

/**
 * Shifts its children a few pixels away from the pointer, for depth.
 * Layers with a larger `strength` appear closer. Desktop only.
 */
export function HeroPointerShift({
  strength,
  className,
  children,
}: {
  /** Maximum shift in pixels. */
  strength: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = usePointerEffectsEnabled();

  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const x = useSpring(targetX, SHIFT_SPRING);
  const y = useSpring(targetY, SHIFT_SPRING);

  useEffect(() => {
    const section = ref.current?.closest("section");
    if (!enabled || !section) return;

    function onMove(event: PointerEvent) {
      const bounds = section!.getBoundingClientRect();
      // Pointer position from -1 (left/top edge) to 1 (right/bottom edge).
      const fromCenterX =
        ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      const fromCenterY =
        ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
      targetX.set(-fromCenterX * strength);
      targetY.set(-fromCenterY * strength);
    }
    function onLeave() {
      targetX.set(0);
      targetY.set(0);
    }

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, strength, targetX, targetY]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        className={className}
        style={enabled ? { x, y } : undefined}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

/** Moves its children slightly slower than the page on desktop. */
export function HeroParallax({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 64rem)");
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const offset = useTransform(scrollY, [0, 800], [0, 72]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        style={{ y: isDesktop && !reduceMotion ? offset : 0 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
