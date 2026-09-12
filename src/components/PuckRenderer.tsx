"use client";

import { Render } from "@puckeditor/core";
import { puckConfig } from "@/lib/puck/config";

// ═══════════════════════════════════════════════════════
// PuckRenderer — Renders Puck layout data on public pages
// ═══════════════════════════════════════════════════════
export default function PuckRenderer({ layout }: { layout: any }) {
  if (!layout || !layout.content || layout.content.length === 0) {
    return null;
  }

  return (
    <div className="puck-renderer">
      <Render config={puckConfig} data={layout} />
    </div>
  );
}
