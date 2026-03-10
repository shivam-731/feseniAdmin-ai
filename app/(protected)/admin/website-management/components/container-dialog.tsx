import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Container } from '../types/container';

interface ContainerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  form: {
    name: string;
    order: string;
    className: string;
    style: string;
    htmlContent: string;
    image: File | null;
  };
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSave: (e: React.FormEvent) => void;
  onCancel: () => void;
  dialogLabel: string;
  editing: boolean;
}

export function ContainerDialog({ open, onOpenChange, form, onFormChange, onSave, onCancel, dialogLabel, editing }: ContainerDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <button
          className="px-5 py-2 rounded-lg font-semibold bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {dialogLabel}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <div className="pb-4 border-b mb-4">
          <h2 className="text-xl font-bold text-gray-900">{editing ? "Edit Container" : dialogLabel}</h2>
        </div>
        <form onSubmit={onSave} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="name" className="text-base font-medium mb-1">Container Name</Label>
              <Input id="name" name="name" value={form.name} onChange={onFormChange} required />
            </div>
            <div>
              <Label htmlFor="order" className="text-base font-medium mb-1">Order Number</Label>
              <Input id="order" name="order" type="number" value={form.order} onChange={onFormChange} required />
            </div>
            <div>
              <Label htmlFor="className" className="text-base font-medium mb-1">Class Name</Label>
              <Input id="className" name="className" value={form.className} onChange={onFormChange} required />
            </div>
            <div>
              <Label htmlFor="style" className="text-base font-medium mb-1">Style</Label>
              <Textarea id="style" name="style" value={form.style} onChange={onFormChange} />
            </div>
            <div>
              <Label htmlFor="htmlContent" className="text-base font-medium mb-1">HTML Content</Label>
              <Textarea id="htmlContent" name="htmlContent" value={form.htmlContent} onChange={onFormChange} />
            </div>
            <div>
              <Label htmlFor="image" className="text-base font-medium mb-1">Image Upload</Label>
              <Input id="image" name="image" type="file" accept="image/*" onChange={onFormChange} />
            </div>
          </div>
          {/* Footer buttons must be wrapped in a parent element */}
          <div className="flex justify-end gap-3 mt-6 border-t pt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-150"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg font-semibold bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {editing ? "Save Changes" : "Add Container"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
// Remove duplicate JSX block below
// (Removed duplicate JSX block)
}
