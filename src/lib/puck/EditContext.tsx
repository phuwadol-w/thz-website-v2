"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

// ═══════════════════════════════════════════════════════
// EditContext — Manages inline Puck editing state
// ═══════════════════════════════════════════════════════

interface EditContextType {
  isEditing: boolean;
  isAdmin: boolean;
  pageSlug: string;
  startEditing: () => void;
  stopEditing: () => void;
  setAdmin: (v: boolean) => void;
  setPageSlug: (slug: string) => void;
}

const EditContext = createContext<EditContextType>({
  isEditing: false,
  isAdmin: false,
  pageSlug: "/",
  startEditing: () => {},
  stopEditing: () => {},
  setAdmin: () => {},
  setPageSlug: () => {},
});

export function EditProvider({ children }: { children: ReactNode }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [pageSlug, setPageSlug] = useState("/");

  const startEditing = useCallback(() => setIsEditing(true), []);
  const stopEditing = useCallback(() => setIsEditing(false), []);
  const setAdmin = useCallback((v: boolean) => setIsAdmin(v), []);

  return (
    <EditContext.Provider value={{ isEditing, isAdmin, pageSlug, startEditing, stopEditing, setAdmin, setPageSlug }}>
      {children}
    </EditContext.Provider>
  );
}

export function useEdit() {
  return useContext(EditContext);
}
