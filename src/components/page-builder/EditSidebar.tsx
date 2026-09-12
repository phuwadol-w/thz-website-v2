"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Save, Loader2, ChevronDown, ChevronUp, Plus, Trash2, PanelRightClose } from "lucide-react";
import { useBuilder } from "./BuilderProvider";
import { SECTION_CONFIGS, FieldConfig } from "./builder-configs";
import ImageUploader from "./ImageUploader";

// ═══════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════
interface EditSidebarProps {
  currentData: Record<string, unknown>;
}

// ═══════════════════════════════════════════════════════
// Component — Floating right sidebar for editing sections
// ═══════════════════════════════════════════════════════
export default function EditSidebar({ currentData }: EditSidebarProps) {
  const {
    selectedSection,
    sidebarOpen,
    closeSidebar,
    isSaving,
    saveSection,
    markDirty,
  } = useBuilder();

  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [expandedArrays, setExpandedArrays] = useState<Record<string, boolean>>({});

  const config = selectedSection ? SECTION_CONFIGS[selectedSection] : null;

  // Load current data when section changes
  useEffect(() => {
    if (config && currentData) {
      const initialData: Record<string, unknown> = {};
      config.fields.forEach((field) => {
        initialData[field.name] = currentData[field.name] ?? "";
      });
      setFormData(initialData);
    }
  }, [config, currentData]);

  // Handle field change
  const handleFieldChange = useCallback(
    (name: string, value: unknown) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
      markDirty();
    },
    [markDirty]
  );

  // Handle array item change
  const handleArrayItemChange = useCallback(
    (arrayName: string, index: number, fieldName: string, value: unknown) => {
      setFormData((prev) => {
        const arr = Array.isArray(prev[arrayName])
          ? [...(prev[arrayName] as Record<string, unknown>[])]
          : [];
        if (arr[index]) {
          arr[index] = { ...arr[index], [fieldName]: value };
        }
        return { ...prev, [arrayName]: arr };
      });
      markDirty();
    },
    [markDirty]
  );

  // Add array item
  const addArrayItem = useCallback(
    (arrayName: string, template: Record<string, unknown>) => {
      setFormData((prev) => {
        const arr = Array.isArray(prev[arrayName])
          ? [...(prev[arrayName] as Record<string, unknown>[])]
          : [];
        arr.push({ ...template });
        return { ...prev, [arrayName]: arr };
      });
      markDirty();
    },
    [markDirty]
  );

  // Remove array item
  const removeArrayItem = useCallback(
    (arrayName: string, index: number) => {
      setFormData((prev) => {
        const arr = Array.isArray(prev[arrayName])
          ? [...(prev[arrayName] as Record<string, unknown>[])]
          : [];
        arr.splice(index, 1);
        return { ...prev, [arrayName]: arr };
      });
      markDirty();
    },
    [markDirty]
  );

  // Toggle array expansion
  const toggleArrayExpand = useCallback((name: string) => {
    setExpandedArrays((prev) => ({ ...prev, [name]: !prev[name] }));
  }, []);

  // Save handler
  const handleSave = async () => {
    if (!selectedSection) return;
    await saveSection(selectedSection, formData);
  };

  // Array field templates
  const ARRAY_TEMPLATES: Record<string, Record<string, unknown>> = {
    stats: { number: "", label: "", icon: "Award" },
    brands: {
      name: "",
      slug: "",
      description: "",
      image: "",
      color: "#2196F3",
      link: "",
    },
    whyItems: { title: "", description: "", icon: "Shield" },
    testimonials: { name: "", role: "", text: "", rating: 5 },
    navLinks: { label: "", href: "", children: [] },
    productLinks: { label: "", href: "" },
    serviceLinks: { label: "" },
  };

  // Array field sub-fields
  const ARRAY_SUBFIELDS: Record<string, FieldConfig[]> = {
    stats: [
      { name: "number", label: "ตัวเลข", type: "text", path: "" },
      { name: "label", label: "คำอธิบาย", type: "text", path: "" },
      { name: "icon", label: "Icon (Lucide)", type: "text", path: "" },
    ],
    brands: [
      { name: "name", label: "ชื่อแบรนด์", type: "text", path: "" },
      { name: "slug", label: "Slug", type: "text", path: "" },
      { name: "description", label: "คำอธิบาย", type: "text", path: "" },
      { name: "image", label: "รูปภาพ", type: "image", path: "" },
      { name: "color", label: "สี", type: "text", path: "" },
      { name: "link", label: "ลิงก์", type: "text", path: "" },
    ],
    whyItems: [
      { name: "title", label: "หัวข้อ", type: "text", path: "" },
      { name: "description", label: "คำอธิบาย", type: "text", path: "" },
      { name: "icon", label: "Icon (Lucide)", type: "text", path: "" },
    ],
    testimonials: [
      { name: "name", label: "ชื่อ", type: "text", path: "" },
      { name: "role", label: "ตำแหน่ง/ที่อยู่", type: "text", path: "" },
      { name: "text", label: "ข้อความ", type: "textarea", path: "" },
      { name: "rating", label: "คะแนน (1-5)", type: "number", path: "" },
    ],
    navLinks: [
      { name: "label", label: "ชื่อลิงก์", type: "text", path: "" },
      { name: "href", label: "URL", type: "text", path: "" },
    ],
    productLinks: [
      { name: "label", label: "ชื่อลิงก์", type: "text", path: "" },
      { name: "href", label: "URL", type: "text", path: "" },
    ],
    serviceLinks: [{ name: "label", label: "ชื่อบริการ", type: "text", path: "" }],
  };

  if (!config) return null;

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="fixed inset-0 bg-black/20 z-[9998] backdrop-blur-[1px]"
          />

          {/* Right Sidebar */}
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-14 right-0 bottom-0 w-[400px] bg-white z-[9999] shadow-2xl shadow-black/20 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3">
                <span className="text-xl">{config.icon}</span>
                <div>
                  <h3 className="font-montserrat font-bold text-sm text-gray-800">
                    แก้ไข {config.label}
                  </h3>
                  <p className="text-xs text-gray-500">{config.fields.length} ฟิลด์</p>
                </div>
              </div>
              <button
                onClick={closeSidebar}
                className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500"
              >
                <PanelRightClose size={18} />
              </button>
            </div>

            {/* Scrollable form content */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
              {config.fields.map((field) => (
                <div key={field.name}>
                  {/* Simple text/textarea/number fields */}
                  {field.type === "text" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {field.label}
                      </label>
                      <input
                        type="text"
                        value={String(formData[field.name] || "")}
                        onChange={(e) => handleFieldChange(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a73e8]/30 focus:border-[#1a73e8] transition-all"
                      />
                    </div>
                  )}

                  {field.type === "textarea" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {field.label}
                      </label>
                      <textarea
                        value={String(formData[field.name] || "")}
                        onChange={(e) => handleFieldChange(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        rows={4}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a73e8]/30 focus:border-[#1a73e8] transition-all resize-none"
                      />
                    </div>
                  )}

                  {field.type === "number" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {field.label}
                      </label>
                      <input
                        type="number"
                        value={Number(formData[field.name]) || 0}
                        onChange={(e) =>
                          handleFieldChange(field.name, Number(e.target.value))
                        }
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a73e8]/30 focus:border-[#1a73e8] transition-all"
                      />
                    </div>
                  )}

                  {/* Image field */}
                  {field.type === "image" && (
                    <ImageUploader
                      currentImage={
                        formData[field.name]
                          ? typeof formData[field.name] === "object" &&
                            formData[field.name] !== null &&
                            "url" in (formData[field.name] as Record<string, unknown>)
                            ? String(
                                (formData[field.name] as Record<string, unknown>).url
                              )
                            : String(formData[field.name])
                          : undefined
                      }
                      onImageChange={(url) => handleFieldChange(field.name, url)}
                      label={field.label}
                    />
                  )}

                  {/* Array field */}
                  {field.type === "array" && (
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleArrayExpand(field.name)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-sm font-medium text-gray-700">
                          {field.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
                            {Array.isArray(formData[field.name])
                              ? (formData[field.name] as unknown[]).length
                              : 0}
                          </span>
                          {expandedArrays[field.name] ? (
                            <ChevronUp size={16} className="text-gray-500" />
                          ) : (
                            <ChevronDown size={16} className="text-gray-500" />
                          )}
                        </div>
                      </button>

                      {expandedArrays[field.name] && (
                        <div className="p-3 space-y-3 bg-white">
                          {Array.isArray(formData[field.name]) &&
                            (
                              formData[field.name] as Record<string, unknown>[]
                            ).map((item, index) => {
                              const subFields = ARRAY_SUBFIELDS[field.name] || [];
                              return (
                                <div
                                  key={index}
                                  className="border border-gray-100 rounded-lg p-3 space-y-2 relative group"
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-medium text-gray-500">
                                      #{index + 1}
                                    </span>
                                    <button
                                      onClick={() => removeArrayItem(field.name, index)}
                                      className="opacity-0 group-hover:opacity-100 p-1 text-red-400 hover:text-red-600 transition-all"
                                    >
                                      <Trash2 size={14} />
                                    </button>
                                  </div>

                                  {subFields.map((subField) => (
                                    <div key={subField.name}>
                                      {subField.type === "text" && (
                                        <input
                                          type="text"
                                          value={String(item[subField.name] || "")}
                                          onChange={(e) =>
                                            handleArrayItemChange(
                                              field.name,
                                              index,
                                              subField.name,
                                              e.target.value
                                            )
                                          }
                                          placeholder={subField.label}
                                          className="w-full px-2.5 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#1a73e8]/30 focus:border-[#1a73e8] transition-all"
                                        />
                                      )}
                                      {subField.type === "textarea" && (
                                        <textarea
                                          value={String(item[subField.name] || "")}
                                          onChange={(e) =>
                                            handleArrayItemChange(
                                              field.name,
                                              index,
                                              subField.name,
                                              e.target.value
                                            )
                                          }
                                          placeholder={subField.label}
                                          rows={2}
                                          className="w-full px-2.5 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#1a73e8]/30 focus:border-[#1a73e8] transition-all resize-none"
                                        />
                                      )}
                                      {subField.type === "number" && (
                                        <input
                                          type="number"
                                          value={Number(item[subField.name]) || 0}
                                          onChange={(e) =>
                                            handleArrayItemChange(
                                              field.name,
                                              index,
                                              subField.name,
                                              Number(e.target.value)
                                            )
                                          }
                                          placeholder={subField.label}
                                          className="w-full px-2.5 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#1a73e8]/30 focus:border-[#1a73e8] transition-all"
                                        />
                                      )}
                                      {subField.type === "image" && (
                                        <ImageUploader
                                          currentImage={
                                            item[subField.name]
                                              ? String(item[subField.name])
                                              : undefined
                                          }
                                          onImageChange={(url) =>
                                            handleArrayItemChange(
                                              field.name,
                                              index,
                                              subField.name,
                                              url
                                            )
                                          }
                                          label={subField.label}
                                        />
                                      )}
                                    </div>
                                  ))}
                                </div>
                              );
                            })}

                          <button
                            onClick={() =>
                              addArrayItem(
                                field.name,
                                ARRAY_TEMPLATES[field.name] || {}
                              )
                            }
                            className="w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-[#1a73e8] hover:text-[#1a73e8] hover:bg-[#1a73e8]/5 transition-all"
                          >
                            <Plus size={16} />
                            <span>เพิ่มรายการ</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer with save/cancel */}
            <div className="px-5 py-4 border-t border-gray-200 bg-gray-50 flex gap-3">
              <button
                onClick={closeSidebar}
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-900/20"
              >
                {isSaving ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>กำลังบันทึก...</span>
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    <span>บันทึก</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
