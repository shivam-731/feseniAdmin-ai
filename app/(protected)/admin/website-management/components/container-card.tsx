import React from "react";
import { Container } from '../types/container';

interface ContainerCardProps {
  container: Container;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export function ContainerCard({ container, onEdit, onDelete }: ContainerCardProps) {
  return (
    <div className="w-full">
      <div
        className="bg-white border border-gray-200 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-2xl hover:-translate-y-2 cursor-pointer flex flex-col gap-5 p-7 group"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-150">{container.name}</span>
        </div>
        <div className="flex items-center gap-2 text-base text-gray-700">
          <span className="font-semibold">Order:</span>
          <span className="px-2 py-1 rounded bg-gray-100 text-gray-800 text-sm">{container.order}</span>
        </div>
        <div className="flex items-center gap-2 text-base text-gray-700">
          <span className="font-semibold">Class:</span>
          <span className="px-2 py-1 rounded bg-gray-100 text-gray-800 text-sm">{container.className}</span>
        </div>
        <div className="flex gap-4 mt-6">
          <button
            className="px-5 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => onEdit(container.id)}
            type="button"
          >
            Edit
          </button>
          <button
            className="px-5 py-2 rounded-lg font-medium bg-red-600 text-white hover:bg-red-700 transition-colors duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={() => onDelete(container.id)}
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
