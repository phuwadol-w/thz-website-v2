"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  EyeOff,
  Save,
  LogOut,
  Loader2,
  CheckCircle,
  Undo2,
} from "lucide-react";
import { useBuilder } from "./BuilderProvider";

// ═══════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════
interface UserData {
  id: string;
  email: string;
  name?: string;
  role?: string;
}

// ═══════════════════════════════════════════════════════
// Component
// ═══════════════════════════════════════════════════════
export default function BuilderToolbar() {
  const {
    isEditMode,
    toggleEditMode,
    isDirty,
    isSaving,
    saveSuccess,
    toastMessage,
  } = useBuilder();

  const [user, setUser] = useState<UserData | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check if user is admin
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/users/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user || data);
          setIsAdmin(data.user?.role === "admin" || data.role === "admin");
        }
      } catch {
        // Not logged in
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  // Don't render if not admin
  if (loading || !isAdmin) return null;

  return (
    <>
      {/* Toolbar */}
      <motion.div
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[9999] h-12 bg-gradient-to-r from-[#1a73e8] to-[#0d47a1] shadow-lg shadow-blue-900/30 flex items-center justify-between px-4"
      >
        {/* Left: Logo + Edit Mode Toggle */}
        <div className="flex items-center gap-4">
          <span className="font-montserrat font-bold text-white text-sm hidden sm:block">
            THZ Page Builder
          </span>

          <div className="h-5 w-px bg-white/30 hidden sm:block" />

          {/* Edit Mode Toggle */}
          <button
            onClick={toggleEditMode}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
              isEditMode
                ? "bg-white text-[#1a73e8] shadow-md"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            {isEditMode ? (
              <>
                <EyeOff size={14} />
                <span>ปิดโหมดแก้ไข</span>
              </>
            ) : (
              <>
                <Eye size={14} />
                <span>เปิดโหมดแก้ไข</span>
              </>
            )}
          </button>
        </div>

        {/* Center: Status */}
        <div className="flex items-center gap-2">
          {isSaving && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-white/80 text-xs"
            >
              <Loader2 size={14} className="animate-spin" />
              <span>กำลังบันทึก...</span>
            </motion.div>
          )}
          {saveSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-green-300 text-xs"
            >
              <CheckCircle size={14} />
              <span>บันทึกสำเร็จ!</span>
            </motion.div>
          )}
          {isDirty && !isSaving && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-yellow-300 text-xs"
            >
              <Undo2 size={14} />
              <span>มีการเปลี่ยนแปลงที่ยังไม่ได้บันทึก</span>
            </motion.div>
          )}
        </div>

        {/* Right: User info */}
        <div className="flex items-center gap-3">
          <span className="text-white/70 text-xs hidden md:block">
            {user?.name || user?.email}
          </span>
          <a
            href="/admin"
            className="flex items-center gap-1.5 bg-white/20 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-white/30 transition-colors"
          >
            <LogOut size={12} />
            <span className="hidden sm:block">Admin</span>
          </a>
        </div>
      </motion.div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-16 left-1/2 z-[10000] bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-xl shadow-green-900/30 font-semibold text-sm flex items-center gap-2"
          >
            <CheckCircle size={18} />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
