"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export default function RevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 24 : 0,
      x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
