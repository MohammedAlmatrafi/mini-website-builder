"use client";

import { useDraggable } from "@dnd-kit/core";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
const DraggableSection = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const { setNodeRef, attributes, listeners, transform, isDragging } =
    useDraggable({ id });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: isDragging ? 50 : undefined,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-grab active:cursor-grabbing"
    >
      <motion.div
        animate={{ scale: [0.9, 1] }}
        exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
        className={twMerge(
          "select-none bg-white border-2 rounded-md p-3 flex flex-col gap-2 h-full",
          isDragging && "border-blue-600"
        )}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default DraggableSection;
