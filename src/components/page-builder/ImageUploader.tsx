"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, X, Loader2, Image as ImageIcon } from "lucide-react";
import { useBuilder } from "./BuilderProvider";

// ═══════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════
interface ImageUploaderProps {
  currentImage?: string;
  onImageChange: (url: string) => void;
  label?: string;
}

// ═══════════════════════════════════════════════════════
// Component
// ═══════════════════════════════════════════════════════
export default function ImageUploader({
  currentImage,
  onImageChange,
  label = "รูปภาพ",
}: ImageUploaderProps) {
  const { uploadImage, showToast } = useBuilder();
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      showToast("กรุณาเลือกไฟล์รูปภาพเท่านั้น");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      showToast("ขนาดไฟล์ต้องไม่เกิน 5MB");
      return;
    }

    // Show local preview immediately
    const localPreview = URL.createObjectURL(file);
    setPreview(localPreview);

    // Upload to server
    setUploading(true);
    try {
      const url = await uploadImage(file);
      if (url) {
        onImageChange(url);
        showToast("อัพโหลดรูปภาพสำเร็จ!");
      } else {
        // Revert preview on failure
        setPreview(currentImage || null);
      }
    } catch {
      setPreview(currentImage || null);
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onImageChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      {/* Preview */}
      {preview && (
        <div className="relative group">
          <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
            <img
              src={preview}
              alt={label}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay controls */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-white text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="เปลี่ยนรูปภาพ"
            >
              <Upload size={16} />
            </button>
            <button
              onClick={handleRemove}
              className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
              title="ลบรูปภาพ"
            >
              <X size={16} />
            </button>
          </div>

          {/* Uploading overlay */}
          {uploading && (
            <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
              <div className="flex items-center gap-2 text-white">
                <Loader2 size={20} className="animate-spin" />
                <span className="text-sm font-medium">กำลังอัพโหลด...</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Upload button */}
      {!preview && (
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="w-full h-40 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 text-gray-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
        >
          {uploading ? (
            <Loader2 size={24} className="animate-spin" />
          ) : (
            <>
              <ImageIcon size={24} />
              <span className="text-sm font-medium">คลิกเพื่ออัพโหลดรูปภาพ</span>
              <span className="text-xs text-gray-400">JPG, PNG, WebP (สูงสุด 5MB)</span>
            </>
          )}
        </button>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
}
