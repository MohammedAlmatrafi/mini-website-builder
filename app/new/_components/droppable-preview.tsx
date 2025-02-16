"use client";
import { useDroppable } from "@dnd-kit/core";
import { twMerge } from "tailwind-merge";
import { type pageDesign } from "@/types/types";
import { SectionWrapper } from "./sections";
import { availableSections } from "../availableSections";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const DroppablePreview = ({
  currentDesign,
}: {
  currentDesign: pageDesign[];
}) => {
  const { setNodeRef } = useDroppable({ id: "preview" });

  return (
    <main
      ref={setNodeRef}
      className={twMerge(
        "flex-1 duration-75 m-1 rounded-md overflow-y-auto border-2",
        currentDesign.length === 0 &&
          "flex flex-col items-center justify-center"
      )}
    >
      <SortableContext
        items={currentDesign}
        strategy={verticalListSortingStrategy}
      >
        {currentDesign.map((section) => (
          <SectionWrapper id={section.id} key={section.id}>
            {
              availableSections[section.type as keyof typeof availableSections]
                .component
            }
          </SectionWrapper>
        ))}
        {currentDesign.length === 0 && (
          <>
            <h1 className="font-bold text-gray-400">Preview Area</h1>
            <p className="text-sm text-gray-400">
              Please drag and drop UI elements from the panel on the left
            </p>
          </>
        )}
      </SortableContext>
    </main>
  );
};
export default DroppablePreview;
