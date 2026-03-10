"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Container } from './types/container';
import { initialContainers } from './data/mock-containers';
import { ContainerCard } from './components/container-card';
import { ContainerDialog } from './components/container-dialog';

export default function WebsiteManagementPage() {
  const [activeTab, setActiveTab] = useState("home");
  const [containers, setContainers] = useState<Container[]>(initialContainers);
  const [openDialog, setOpenDialog] = useState(false);
  const [form, setForm] = useState({
    name: "",
    order: "",
    className: "",
    style: "",
    htmlContent: "",
    image: null as File | null,
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const tabs = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "services", label: "Services" },
    { key: "contact", label: "Contact" },
  ];

  const handleEditContainer = (id: number) => {
    const container = containers.find((c) => c.id === id);
    if (container) {
      setForm({
        name: container.name,
        order: container.order.toString(),
        className: container.className,
        style: container.style ?? "",
        htmlContent: container.htmlContent ?? "",
        image: container.image || null,
      });
      setEditingId(id);
      setOpenDialog(true);
    }
  };

  const handleDeleteContainer = (id: number) => {
    setContainers((prev) => prev.filter((c) => c.id !== id));
    // If editing the deleted container, reset dialog
    if (editingId === id) {
      handleDialogClose();
    }
  };

  const handleDialogOpen = () => {
    setEditingId(null);
    setForm({ name: "", order: "", className: "", style: "", htmlContent: "", image: null });
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
    setForm({ name: "", order: "", className: "", style: "", htmlContent: "", image: null });
    setEditingId(null);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as any;
    if (name === "image" && files) {
      setForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSaveContainer = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId !== null) {
      // Update existing container
      setContainers((prev) =>
        prev.map((c) =>
          c.id === editingId
            ? {
                ...c,
                name: form.name,
                order: Number(form.order),
                className: form.className,
                style: form.style,
                htmlContent: form.htmlContent,
                image: form.image,
              }
            : c
        )
      );
    } else {
      // Add new container
      setContainers((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: form.name,
          order: Number(form.order),
          className: form.className,
          style: form.style,
          htmlContent: form.htmlContent,
          image: form.image,
        },
      ]);
    }
    handleDialogClose();
  };

  // Dynamic Add Container label based on active tab
  const dialogLabel = `+ Add ${tabs.find(t => t.key === activeTab)?.label} Container`;
  const editing = editingId !== null;

  // Filter containers by active tab
  const filteredContainers = containers.filter(c => c.className.toLowerCase() === activeTab);

  return (
    <div className="flex flex-col gap-8 px-4 py-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Website Management</h1>
        <ContainerDialog
          open={openDialog}
          onOpenChange={setOpenDialog}
          form={form}
          onFormChange={handleFormChange}
          onSave={handleSaveContainer}
          onCancel={handleDialogClose}
          dialogLabel={dialogLabel}
          editing={editing}
        />
      </div>

      {/* Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList variant="line" size="lg" className="mb-6">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.key}
              value={tab.key}
              className="text-lg font-semibold px-6 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-150"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.key} value={tab.key}>
            {/* Container Management Section */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-2xl font-bold text-gray-800">{tab.label} Containers</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredContainers.map((container) => (
                  <ContainerCard
                    key={container.id}
                    container={container}
                    onEdit={handleEditContainer}
                    onDelete={handleDeleteContainer}
                  />
                ))}
                {filteredContainers.length === 0 && (
                  <div className="col-span-full text-center text-gray-500 py-12 text-lg">No containers found for this section.</div>
                )}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
