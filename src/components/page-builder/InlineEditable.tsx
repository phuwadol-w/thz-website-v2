"use client";

import { useState, useRef, useCallback, useEffect, ReactNode } from "react";
import { useBuilder } from "./BuilderProvider";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

// ═══════════════════════════════════════════════════════
// InlineEditable — คลิกเพื่อแก้ไขข้อความบนหน้าเว็บ
// ทำงานเหมือน Elementor: contenteditable + floating toolbar
// ═══════════════════════════════════════════════════════

interface InlineEditableProps {
  /** ชื่อฟิลด์ที่จะบันทึก เช่น "heroHeadline1" */
  field: string;
  /** Section ID ที่สังกัด เช่น "hero" */
  sectionId: string;
  /** ค่าเริ่มต้น */
  defaultValue?: string;
  /** ชนิด tag */
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  /** className เพิ่มเติม */
  className?: string;
  /** placeholder เมื่อว่าง */
  placeholder?: string;
  /** children */
  children?: ReactNode;
  /** ความกว้างสูงสุด */
  maxWidth?: string;
}

export default function InlineEditable({
  field,
  sectionId,
  defaultValue = "",
  tag = "p",
  className = "",
  placeholder = "คลิกเพื่อแก้ไข...",
  children,
  maxWidth,
}: InlineEditableProps) {
  const { isEditMode, addPendingChange, markDirty, showToast } = useBuilder();
  const ref = useRef<HTMLElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [originalValue, setOriginalValue] = useState(defaultValue);
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });

  // Sync defaultValue when it changes (from CMS)
  useEffect(() => {
    setOriginalValue(defaultValue);
    if (ref.current && !isEditing) {
      ref.current.textContent = defaultValue;
    }
  }, [defaultValue, isEditing]);

  // Focus and select all when entering edit mode
  useEffect(() => {
    if (isEditing && ref.current) {
      ref.current.focus();
      // Select all text
      const range = document.createRange();
      range.selectNodeContents(ref.current);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  }, [isEditing]);

  // Position toolbar above element
  const updateToolbarPosition = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setToolbarPosition({
        top: rect.top - 45,
        left: rect.left + rect.width / 2,
      });
    }
  }, []);

  const handleClick = useCallback(() => {
    if (!isEditMode) return;
    setIsEditing(true);
    setShowToolbar(true);
    setTimeout(updateToolbarPosition, 10);
  }, [isEditMode, updateToolbarPosition]);

  const handleBlur = useCallback(() => {
    if (!ref.current) return;
    const newValue = ref.current.textContent?.trim() || "";
    setIsEditing(false);
    setShowToolbar(false);

    if (newValue !== originalValue) {
      addPendingChange(sectionId, { [field]: newValue });
      markDirty();
      showToast(`บันทึก "${field}" แล้ว`);
    }
  }, [originalValue, field, sectionId, addPendingChange, markDirty, showToast]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        ref.current?.blur();
      }
      if (e.key === "Escape") {
        if (ref.current) {
          ref.current.textContent = originalValue;
        }
        setIsEditing(false);
        setShowToolbar(false);
      }
    },
    [originalValue]
  );

  // Text formatting commands
  const execCommand = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
    ref.current?.focus();
  }, []);

  // Not in edit mode — render normally
  if (!isEditMode) {
    return <>{children || defaultValue}</>;
  }

  // In edit mode — render with contenteditable
  const Tag = tag;

  return (
    <div className="relative group/inline" style={maxWidth ? { maxWidth } : undefined}>
      <Tag
        ref={ref as any}
        contentEditable
        suppressContentEditableWarning
        onClick={handleClick}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`${className} ${
          isEditing
            ? "outline-none ring-2 ring-blue-400 ring-offset-2 rounded-sm bg-blue-50/50 cursor-text"
            : "cursor-text hover:ring-2 hover:ring-blue-300 hover:ring-offset-1 rounded-sm transition-all"
        }`}
        data-placeholder={placeholder}
        dangerouslySetInnerHTML={{ __html: defaultValue || placeholder }}
      />

      {/* Floating Text Toolbar */}
      {showToolbar && isEditing && (
        <div
          className="fixed z-[10002] bg-gray-900 rounded-lg shadow-xl p-1.5 flex items-center gap-1 transition-all duration-150"
          style={{
            top: toolbarPosition.top,
            left: toolbarPosition.left,
            transform: "translateX(-50%)",
          }}
        >
          <button
            onMouseDown={(e) => { e.preventDefault(); execCommand("bold"); }}
            className="w-7 h-7 flex items-center justify-center text-white hover:bg-gray-700 rounded transition-colors"
            title="ตัวหนา"
          >
            <Bold size={14} />
          </button>
          <button
            onMouseDown={(e) => { e.preventDefault(); execCommand("italic"); }}
            className="w-7 h-7 flex items-center justify-center text-white hover:bg-gray-700 rounded transition-colors"
            title="ตัวเอียง"
          >
            <Italic size={14} />
          </button>
          <button
            onMouseDown={(e) => { e.preventDefault(); execCommand("underline"); }}
            className="w-7 h-7 flex items-center justify-center text-white hover:bg-gray-700 rounded transition-colors"
            title="ขีดเส้นใต้"
          >
            <Underline size={14} />
          </button>
          <div className="w-px h-5 bg-gray-600 mx-1" />
          <button
            onMouseDown={(e) => { e.preventDefault(); execCommand("justifyLeft"); }}
            className="w-7 h-7 flex items-center justify-center text-white hover:bg-gray-700 rounded transition-colors"
            title="จัดซ้าย"
          >
            <AlignLeft size={14} />
          </button>
          <button
            onMouseDown={(e) => { e.preventDefault(); execCommand("justifyCenter"); }}
            className="w-7 h-7 flex items-center justify-center text-white hover:bg-gray-700 rounded transition-colors"
            title="จัดกลาง"
          >
            <AlignCenter size={14} />
          </button>
          <button
            onMouseDown={(e) => { e.preventDefault(); execCommand("justifyRight"); }}
            className="w-7 h-7 flex items-center justify-center text-white hover:bg-gray-700 rounded transition-colors"
            title="จัดขวา"
          >
            <AlignRight size={14} />
          </button>
        </div>
      )}

      {/* Edit indicator */}
      {!isEditing && (
        <span className="absolute -top-2 -right-2 opacity-0 group-hover/inline:opacity-100 transition-opacity bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded font-medium pointer-events-none z-10">
          แก้ไข
        </span>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// InlineEditableImage — คลิกเพื่อเปลี่ยนรูปภาพ + ปรับขนาด
// ═══════════════════════════════════════════════════════

interface InlineEditableImageProps {
  field: string;
  sectionId: string;
  src?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  /** อนุญาตให้ปรับขนาด */
  resizable?: boolean;
  /** aspect ratio lock */
  aspectRatio?: string;
}

export function InlineEditableImage({
  field,
  sectionId,
  src = "",
  alt = "",
  className = "",
  width = 800,
  height = 600,
  resizable = true,
  aspectRatio,
}: InlineEditableImageProps) {
  const { isEditMode, addPendingChange, markDirty, showToast, uploadImage } = useBuilder();
  const [showPicker, setShowPicker] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 100, height: 100 });
  const [isResizing, setIsResizing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleImageChange = useCallback(
    async (file: File) => {
      setUploading(true);
      try {
        const url = await uploadImage(file);
        if (url) {
          addPendingChange(sectionId, { [field]: url });
          markDirty();
          showToast("เปลี่ยนรูปภาพสำเร็จ!");
          setShowPicker(false);
        }
      } finally {
        setUploading(false);
      }
    },
    [sectionId, field, addPendingChange, markDirty, showToast, uploadImage]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleImageChange(file);
      }
    },
    [handleImageChange]
  );

  const handleUrlInput = useCallback(
    (url: string) => {
      if (url.trim()) {
        addPendingChange(sectionId, { [field]: url.trim() });
        markDirty();
        showToast("เปลี่ยนรูปภาพสำเร็จ!");
        setShowPicker(false);
      }
    },
    [sectionId, field, addPendingChange, markDirty, showToast]
  );

  // Resize handlers
  const handleResizeStart = useCallback((e: React.MouseEvent, direction: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = imgRef.current?.offsetWidth || 0;
    const startHeight = imgRef.current?.offsetHeight || 0;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      let newWidth = startWidth;
      let newHeight = startHeight;

      if (direction.includes("right")) newWidth = startWidth + deltaX;
      if (direction.includes("left")) newWidth = startWidth - deltaX;
      if (direction.includes("bottom")) newHeight = startHeight + deltaY;
      if (direction.includes("top")) newHeight = startHeight - deltaY;

      // Maintain aspect ratio if locked
      if (aspectRatio && imgRef.current) {
        const ratio = startWidth / startHeight;
        if (direction.includes("right") || direction.includes("left")) {
          newHeight = newWidth / ratio;
        } else {
          newWidth = newHeight * ratio;
        }
      }

      // Minimum size
      newWidth = Math.max(100, newWidth);
      newHeight = Math.max(100, newHeight);

      setImageSize({ width: newWidth, height: newHeight });

      if (imgRef.current) {
        imgRef.current.style.width = `${newWidth}px`;
        imgRef.current.style.height = `${newHeight}px`;
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      // Save new dimensions
      if (imgRef.current) {
        addPendingChange(sectionId, {
          [`${field}Width`]: imgRef.current.offsetWidth,
          [`${field}Height`]: imgRef.current.offsetHeight,
        });
        markDirty();
        showToast("ปรับขนาดรูปภาพสำเร็จ!");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, [sectionId, field, addPendingChange, markDirty, showToast, aspectRatio]);

  if (!isEditMode) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={className} width={width} height={height} />;
  }

  return (
    <div className="relative group/img" ref={imgRef}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-pointer hover:ring-4 hover:ring-blue-400 hover:ring-offset-2 transition-all ${isResizing ? "pointer-events-none" : ""}`}
        onClick={() => !isResizing && setShowPicker(true)}
        style={imageSize.width !== 100 ? { width: imageSize.width, height: imageSize.height } : undefined}
      />

      {/* Edit overlay */}
      <div
        className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
        onClick={() => !isResizing && setShowPicker(true)}
      >
        <span className="bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
          เปลี่ยนรูป
        </span>
        {resizable && (
          <span className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
            ปรับขนาด
          </span>
        )}
      </div>

      {/* Resize handles */}
      {resizable && isEditMode && (
        <>
          {/* Corner handles */}
          <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500 border-2 border-white rounded-full cursor-nw-resize opacity-0 group-hover/img:opacity-100 transition-opacity z-20"
            onMouseDown={(e) => handleResizeStart(e, "top-left")} />
          <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 border-2 border-white rounded-full cursor-ne-resize opacity-0 group-hover/img:opacity-100 transition-opacity z-20"
            onMouseDown={(e) => handleResizeStart(e, "top-right")} />
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-blue-500 border-2 border-white rounded-full cursor-sw-resize opacity-0 group-hover/img:opacity-100 transition-opacity z-20"
            onMouseDown={(e) => handleResizeStart(e, "bottom-left")} />
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 border-2 border-white rounded-full cursor-se-resize opacity-0 group-hover/img:opacity-100 transition-opacity z-20"
            onMouseDown={(e) => handleResizeStart(e, "bottom-right")} />

          {/* Edge handles */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-8 bg-blue-500 border-2 border-white rounded-full cursor-ew-resize opacity-0 group-hover/img:opacity-100 transition-opacity z-20"
            onMouseDown={(e) => handleResizeStart(e, "left")} />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-8 bg-blue-500 border-2 border-white rounded-full cursor-ew-resize opacity-0 group-hover/img:opacity-100 transition-opacity z-20"
            onMouseDown={(e) => handleResizeStart(e, "right")} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-blue-500 border-2 border-white rounded-full cursor-ns-resize opacity-0 group-hover/img:opacity-100 transition-opacity z-20"
            onMouseDown={(e) => handleResizeStart(e, "top")} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-blue-500 border-2 border-white rounded-full cursor-ns-resize opacity-0 group-hover/img:opacity-100 transition-opacity z-20"
            onMouseDown={(e) => handleResizeStart(e, "bottom")} />
        </>
      )}

      {/* Image Picker Modal */}
      {showPicker && (
        <ImagePickerModal
          currentImage={src}
          onSelectFile={handleFileSelect}
          onUrlInput={handleUrlInput}
          onClose={() => setShowPicker(false)}
          uploading={uploading}
          fileInputRef={fileInputRef}
        />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// ImagePickerModal
// ═══════════════════════════════════════════════════════

function ImagePickerModal({
  currentImage,
  onSelectFile,
  onUrlInput,
  onClose,
  uploading,
  fileInputRef,
}: {
  currentImage: string;
  onSelectFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUrlInput: (url: string) => void;
  onClose: () => void;
  uploading: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const [urlInput, setUrlInput] = useState("");

  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="font-bold text-gray-800">เปลี่ยนรูปภาพ</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">
            &times;
          </button>
        </div>

        {/* Current image preview */}
        {currentImage && (
          <div className="px-6 py-4">
            <p className="text-xs text-gray-500 mb-2">รูปปัจจุบัน:</p>
            <img
              src={currentImage}
              alt="Current"
              className="w-full h-40 object-cover rounded-lg border"
            />
          </div>
        )}

        {/* Upload section */}
        <div className="px-6 py-4 border-t">
          <p className="text-sm font-medium text-gray-700 mb-3">อัพโหลดรูปใหม่:</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={onSelectFile}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 transition-all disabled:opacity-50"
          >
            {uploading ? "กำลังอัพโหลด..." : "คลิกเพื่อเลือกรูปจากเครื่อง"}
          </button>
        </div>

        {/* URL input */}
        <div className="px-6 py-4 border-t">
          <p className="text-sm font-medium text-gray-700 mb-3">หรือวาง URL รูปภาพ:</p>
          <div className="flex gap-2">
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={() => onUrlInput(urlInput)}
              disabled={!urlInput.trim()}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ใช้
            </button>
          </div>
        </div>

        {/* Existing images gallery */}
        <div className="px-6 py-4 border-t">
          <p className="text-sm font-medium text-gray-700 mb-3">รูปที่มีอยู่:</p>
          <div className="grid grid-cols-4 gap-2 max-h-40 overflow-y-auto">
            {[
              "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg",
              "/images/products/124374999_2742818269293265_2851804580300417570_n.jpg",
              "/images/products/472772789_3852975844944163_5782975775520749990_n.jpg",
              "/images/products/481072543_1171214081676927_1346842185356984644_n.jpg",
              "/images/products/650721761_1321150026711060_532668979833544120_n.jpg",
              "/images/products/769309563_1449583230534405_8478278305857454543_n.jpg",
              "/images/brands/thz-play.jpg",
              "/images/brands/thz-bench.jpg",
              "/images/brands/thz-furniture.jpg",
            ].map((img) => (
              <button
                key={img}
                onClick={() => onUrlInput(img)}
                className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-400 transition-all"
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Close */}
        <div className="px-6 py-3 border-t bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 text-sm font-medium hover:bg-gray-200 rounded-lg transition-colors"
          >
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
}
