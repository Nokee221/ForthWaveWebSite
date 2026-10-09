"use client";

import {
  type ComponentProps,
  type KeyboardEvent,
  type ReactNode,
  createContext,
  use,
  useRef,
} from "react";
import { cn } from "@/lib/cn";

const OpenModalContext = createContext<() => void>(() => {});

/**
 * The site's modal. Wrap the content that opens it as `children`; anything
 * inside can open the modal with <ModalTrigger> or useOpenModal(). `content`
 * is what appears in the modal.
 *
 * Built on the native <dialog>: it traps focus, closes on Escape and returns
 * focus to whatever opened it. It also closes on a backdrop click, locks page
 * scrolling while open, and is full screen on phones.
 */
export function Modal({
  labelledBy,
  label,
  className,
  onOpenChange,
  onKeyDown,
  content,
  children,
}: {
  /** id of the element inside `content` that titles the modal. */
  labelledBy?: string;
  /** Accessible name, when there is no visible title to point at. */
  label?: string;
  className?: string;
  onOpenChange?: (open: boolean) => void;
  /** Key presses anywhere in the open modal, including on its close button. */
  onKeyDown?: (event: KeyboardEvent<HTMLDialogElement>) => void;
  content: ReactNode;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function open() {
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
    onOpenChange?.(true);
  }

  return (
    <OpenModalContext value={open}>
      {children}

      <dialog
        ref={dialogRef}
        aria-labelledby={labelledBy}
        aria-label={label}
        onKeyDown={onKeyDown}
        onClose={() => {
          document.body.style.overflow = "";
          onOpenChange?.(false);
        }}
        // A click on the dialog element itself is a click on the backdrop.
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className={cn(
          "m-auto max-h-[calc(100dvh-3rem)] w-[min(100%-3rem,64rem)] max-w-none overflow-y-auto overscroll-contain rounded-xl border border-border bg-background text-foreground shadow-lg",
          // Enter and exit: fade, rise and settle to full size.
          "translate-y-4 scale-[0.97] opacity-0 transition-[opacity,translate,scale,overlay,display] transition-discrete duration-(--duration-normal) ease-emphasized open:translate-y-0 open:scale-100 open:opacity-100 starting:open:translate-y-4 starting:open:scale-[0.97] starting:open:opacity-0",
          // The dimmed page behind fades with it.
          "backdrop:bg-black/60 backdrop:opacity-0 backdrop:transition-[opacity,overlay,display] backdrop:transition-discrete backdrop:duration-(--duration-normal) open:backdrop:opacity-100 starting:open:backdrop:opacity-0",
          "max-sm:h-dvh max-sm:max-h-none max-sm:w-full max-sm:rounded-none max-sm:border-0",
          className,
        )}
      >
        {/* First in the dialog so it receives focus when the dialog opens. */}
        <button
          type="button"
          aria-label="Close"
          onClick={() => dialogRef.current?.close()}
          className="absolute top-4 right-4 z-10 inline-flex size-10 items-center justify-center rounded-pill border border-border bg-background text-foreground transition-colors duration-(--duration-fast) ease-standard hover:bg-surface"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
            className="size-4"
          >
            <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
          </svg>
        </button>

        {content}
      </dialog>
    </OpenModalContext>
  );
}

/** Returns a function that opens the surrounding modal. */
export function useOpenModal() {
  return use(OpenModalContext);
}

/** A plain button that opens the surrounding modal. */
export function ModalTrigger(props: ComponentProps<"button">) {
  const open = useOpenModal();
  return <button type="button" onClick={open} {...props} />;
}
