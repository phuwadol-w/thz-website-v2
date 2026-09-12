"use client";

import { useEffect, useRef } from "react";

// ═══════════════════════════════════════════════════════
// GrapesJSRenderer — Renders saved GrapesJS HTML/CSS
// on the public frontend website
// ═══════════════════════════════════════════════════════

interface GrapesJSRendererProps {
  html: string;
  css: string;
}

export default function GrapesJSRenderer({ html, css }: GrapesJSRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !css) return;
    // Inject CSS into a style tag
    let styleEl = containerRef.current.querySelector("style");
    if (!styleEl) {
      styleEl = document.createElement("style");
      containerRef.current.prepend(styleEl);
    }
    styleEl.textContent = css;
  }, [css]);

  if (!html) return null;

  return (
    <div
      ref={containerRef}
      className="grapesjs-rendered"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
