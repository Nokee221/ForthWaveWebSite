import { Container } from "@/components/ui/Container";

/**
 * Marks the start of a section: a hairline across the content width with a
 * short purple segment at its left end. Place it as the first child of a
 * `relative` section.
 */
export function SectionDivider() {
  return (
    <div aria-hidden="true" className="absolute inset-x-0 top-0">
      <Container>
        <div className="relative h-px bg-border">
          <span className="absolute top-0 left-0 h-px w-16 bg-accent-gradient" />
        </div>
      </Container>
    </div>
  );
}
