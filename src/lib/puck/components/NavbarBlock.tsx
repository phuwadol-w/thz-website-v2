"use client";

export default function NavbarBlock({ brandName }: { brandName?: string }) {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-montserrat font-bold text-text-dark">{brandName || "THZ"}</span>
          </div>
          <div className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
            Navbar — แก้ไขผ่าน Puck Editor
          </div>
        </div>
      </div>
    </nav>
  );
}
