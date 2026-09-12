"use client";

import { ReactNode } from "react";
import PuckRenderer from "@/components/PuckRenderer";
import GrapesJSRenderer from "@/components/grapesjs/GrapesJSRenderer";
import InlinePuckEditor from "@/components/InlinePuckEditor";

// ═══════════════════════════════════════════════════════
// PageRenderer — Detects layout format and renders accordingly
// Supports both GrapesJS (html/css) and Puck (content[]) formats
// ═══════════════════════════════════════════════════════

interface PageRendererProps {
  slug: string;
  layout: any;
  fallback: ReactNode;
}

export default function PageRenderer({ slug, layout, fallback }: PageRendererProps) {
  // Check if layout has GrapesJS HTML content
  if (layout?.html) {
    return (
      <InlinePuckEditor slug={slug} initialLayout={layout}>
        <GrapesJSRenderer html={layout.html} css={layout.css || ""} />
      </InlinePuckEditor>
    );
  }

  // Check if layout has Puck content
  if (layout?.content && layout.content.length > 0) {
    return (
      <InlinePuckEditor slug={slug} initialLayout={layout}>
        <PuckRenderer layout={layout} />
      </InlinePuckEditor>
    );
  }

  // Fallback to hardcoded content
  return (
    <InlinePuckEditor slug={slug} initialLayout={{ content: [], root: {}, zones: {} }}>
      {fallback}
    </InlinePuckEditor>
  );
}
