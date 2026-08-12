"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds. Used to stagger siblings. */
  delay?: number;
  className?: string;
  /**
   * Element to render as. Must be `li` when staggering list children —
   * wrapping an <li> in a <div> breaks list semantics for screen readers.
   */
  as?: "div" | "li";
};

/**
 * A single, quiet entrance: fade with a short rise, once, on scroll into view.
 *
 * PRD §17 allows subtle animation only where it improves usability — this
 * exists to sequence a long page, not to decorate it. When the visitor prefers
 * reduced motion it renders a plain element with no transform at all.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const Motion = as === "li" ? motion.li : motion.div;

  return (
    <Motion
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion>
  );
}
