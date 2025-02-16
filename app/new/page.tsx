import DroppablePreview from "./_components/droppable-preview";
import Sidebar from "./_components/sidebar";
import DesignContextProvider from "../_contexts/design-context";
import DndWrapper from "./_components/dnd-wrapper";

export default function NewDesignPage() {
  return (
    <div className="flex-1 flex max-h-[95vh]">
      <DesignContextProvider>
        <DndWrapper>
          <Sidebar />
          <DroppablePreview />
        </DndWrapper>
      </DesignContextProvider>
    </div>
  );
}
