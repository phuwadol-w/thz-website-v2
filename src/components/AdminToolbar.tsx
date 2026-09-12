"use client";

import { useState, useEffect } from "react";
import { useEdit } from "@/lib/puck/EditContext";
import { Pencil, X, LogOut, Eye, Save, Loader2 } from "lucide-react";

// ═══════════════════════════════════════════════════════
// AdminToolbar — Floating toolbar for inline Puck editing
// Shows only when admin is logged in
// ═══════════════════════════════════════════════════════

export default function AdminToolbar() {
  const { isEditing, isAdmin, startEditing, stopEditing, setAdmin } = useEdit();
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logging, setLogging] = useState(false);
  const [error, setError] = useState("");

  // Check if already logged in via cookie
  useEffect(() => {
    const cookie = document.cookie.split(";").find(c => c.trim().startsWith("payload-token="));
    if (cookie) {
      setAdmin(true);
    }
  }, [setAdmin]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLogging(true);
    setError("");
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        setAdmin(true);
        setShowLogin(false);
        setEmail("");
        setPassword("");
      } else {
        setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
      }
    } catch {
      setError("เกิดข้อผิดพลาด");
    } finally {
      setLogging(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/users/logout", { method: "POST" });
    setAdmin(false);
    stopEditing();
  };

  // Don't render anything if not admin and not showing login
  if (!isAdmin && !showLogin) {
    return (
      <>
        {/* Floating admin button */}
        <button
          onClick={() => setShowLogin(true)}
          className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          title="Admin Login"
        >
          <Pencil size={20} />
          <span className="absolute right-16 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium">
            เข้าสู่ระบบแอดมิน
          </span>
        </button>

        {/* Login Modal */}
        {showLogin && (
          <div className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-montserrat text-xl font-bold text-gray-800">Admin Login</h2>
                <button onClick={() => { setShowLogin(false); setError(""); }} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                  <X size={16} />
                </button>
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@thz.co.th" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" disabled={logging} className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                  {logging ? <Loader2 size={18} className="animate-spin" /> : null}
                  {logging ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
                </button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {/* Floating toolbar when logged in */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 items-end">
        {isEditing ? (
          <>
            <button
              onClick={stopEditing}
              className="w-14 h-14 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              title="ยกเลิกการแก้ไข"
            >
              <X size={22} />
            </button>
            <span className="bg-red-500 text-white text-xs px-3 py-1.5 rounded-lg font-medium animate-pulse">
              กำลังแก้ไข — กด Save ใน Puck เพื่อบันทึก
            </span>
          </>
        ) : (
          <>
            <button
              onClick={startEditing}
              className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              title="แก้ไขหน้านี้"
            >
              <Pencil size={20} />
              <span className="absolute right-16 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium">
                แก้ไขหน้านี้
              </span>
            </button>
            <button
              onClick={handleLogout}
              className="w-10 h-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
              title="ออกจากระบบ"
            >
              <LogOut size={16} />
            </button>
          </>
        )}
      </div>
    </>
  );
}
