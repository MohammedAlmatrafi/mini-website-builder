"use client";
import { designContext } from "@/app/_contexts/design-context";
import { designContextType } from "@/types/types";
import { DndContext, DragEndEvent, pointerWithin } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useContext } from "react";
import { availableSections } from "../availableSections";

const DndWrapper = ({ children }: { children: React.ReactNode }) => {
  const { setCurrentDesign } = useContext(designContext) as designContextType;

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
    <DndContext onDragEnd={handleDragEnd} collisionDetection={pointerWithin}>
      {children}
    </DndContext>
  );
};
export default DndWrapper;
