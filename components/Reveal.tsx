"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds. Used to stagger siblings. */
  delay?: number;
  className?: string;
};

/**
 * A single, quiet entrance: fade with a short rise, once, on scroll into view.
 *
 * PRD §17 allows subtle animation only where it improves usability — this
 * exists to sequence a long page, not to decorate it. When the visitor prefers
 * reduced motion it renders a plain element with no transform at all.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
