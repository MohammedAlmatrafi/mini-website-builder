"use client";
import { DndContext, DragEndEvent, pointerWithin } from "@dnd-kit/core";
import DroppablePreview from "./_components/droppable-preview";
import Sidebar from "./_components/sidebar";
import { createContext, useState } from "react";
import { availableSections } from "./availableSections";
import { arrayMove } from "@dnd-kit/sortable";
import { designContextType, pageDesign } from "@/types/types";

export const designContext = createContext<designContextType | null>(null);

export default function NewDesignPage() {
  const [currentDesign, setCurrentDesign] = useState<pageDesign[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (!over || active.id === over.id) return;
    const sectionId = active.id as string;

    //if the dragged item is a preview item
    if (sectionId[0] === "P") {
      setCurrentDesign((prev) => {
        const sectionIdArray = prev.map((section) => section.id);
        const oldIndex = sectionIdArray.indexOf(sectionId);
        const newIndex = sectionIdArray.indexOf(over.id as string);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
    // else it's dragged from the layout panel
    else {
      const uniqueId = "P" + Date.now().toString(36);
      setCurrentDesign((prev) => [
        ...prev,
        {
          id: uniqueId,
          type: sectionId as keyof typeof availableSections,
        },
      ]);
    }
  };

  return (
    <div className="flex-1 flex max-h-[95vh]">
      <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>
        <designContext.Provider value={{ currentDesign, setCurrentDesign }}>
          <Sidebar />

          <DroppablePreview currentDesign={currentDesign} />
        </designContext.Provider>
      </DndContext>
    </div>
  );
}
