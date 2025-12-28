/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Upload, X } from "lucide-react";
import type { ChangeEvent } from "react";

interface UploadDocumentsStepProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function UploadDocumentsStep({
  formData,
  setFormData,
  onNext,
  onBack,
}: UploadDocumentsStepProps) {
  //   const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
  //     const files = e.target.files;
  //     if (files) {
  //       const newPhotos = Array.from(files).map((file, index) => ({
  //         id: Date.now() + index,
  //         name: file.name,
  //         type: "photo",
  //       }));
  //       setFormData({
  //         ...formData,
  //         photos: [...(formData.photos || []), ...newPhotos],
  //       });
  //     }
  //     e.target.value = "";
  //   };

  const handleDocumentUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newDocuments = Array.from(files).map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
      }));
      setFormData({
        ...formData,
        documents: [...(formData.documents || []), ...newDocuments],
      });
    }
    e.target.value = "";
  };

  const handleRemovePhoto = (id: number) => {
    setFormData({
      ...formData,
      photos: formData.photos.filter((p: any) => p.id !== id),
    });
  };

  const handleRemoveDocument = (id: number) => {
    setFormData({
      ...formData,
      documents: formData.documents.filter((d: any) => d.id !== id),
    });
  };

  return (
    <div>
      {/* Heading */}

      <div className="mb-8 ">
        <h2 className="text-xl font-medium text-gray-900">Upload Documents</h2>
        <p className="text-[#717182] text-base mt-2 border-b border-gray-200 inline-block shadow-xs  pb-3">
          Please upload any relevant documents
        </p>
      </div>

      {/* Upload Photos */}
      <div className="mb-8 mt-10">
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          Upload your photo
        </label>
        <label className="w-full px-4 py-4 bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-blue-100 transition-colors">
          <Upload size={20} className="text-gray-400" />
          <span className="text-gray-500 ">Upload photo</span>
          {/* <input
            type="file"
            multiple
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          /> */}
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => {
              if (!e.target.files) return;
              const filesArray = Array.from(e.target.files);
              setFormData((prev: any) => ({
                ...prev,
                photos: [...(prev.photos || []), ...filesArray],
              }));
            }}
          />
        </label>
        {formData.photos && formData.photos.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {formData.photos.map((photo: any) => (
              <div
                key={photo.id}
                className="bg-white border border-gray-300 px-3 py-1 rounded-lg flex items-center gap-2"
              >
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                <span className="text-sm text-gray-700">{photo.name}</span>
                <button
                  onClick={() => handleRemovePhoto(photo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Upload Documents */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          Upload your Documents
        </label>
        <label className="w-full px-4 py-4 bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-blue-100 transition-colors">
          <Upload size={20} className="text-gray-400" />
          <span className="text-gray-500">Upload pdf</span>
          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx"
            onChange={handleDocumentUpload}
            className="hidden"
          />
        </label>
        {formData.documents && formData.documents.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {formData.documents.map((doc: any) => (
              <div
                key={doc.id}
                className="bg-white border border-gray-300 px-3 py-2 rounded-lg flex items-center gap-2"
              >
                <span className="text-red-500">📄</span>
                <span className="text-sm text-gray-700">{doc.name}</span>
                <button
                  onClick={() => handleRemoveDocument(doc.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Budget */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Estimated Budget ($)
        </label>
        <input
          type="text"
          placeholder="$ 5000-7000"
          value={formData.estimatedBudget}
          onChange={(e) =>
            setFormData({ ...formData, estimatedBudget: e.target.value })
          }
          className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="px-6 py-2 border-2 cursor-pointer border-gray-300 text-gray-500 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 cursor-pointer bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
