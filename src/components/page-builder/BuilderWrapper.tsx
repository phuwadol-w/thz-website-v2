"use client";

import { BuilderProvider } from "./BuilderProvider";
import BuilderToolbar from "./BuilderToolbar";

// ═══════════════════════════════════════════════════════
// Client-side wrapper for Page Builder
// Wraps the app with BuilderProvider + BuilderToolbar
// ═══════════════════════════════════════════════════════
export default function BuilderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <BuilderProvider>
      <BuilderToolbar />
      {children}
    </BuilderProvider>
  );
}
