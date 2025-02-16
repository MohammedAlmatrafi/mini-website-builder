"use client";

import { useContext, useState } from "react";
import { availableSections } from "../availableSections";
import dynamic from "next/dynamic";
import { designContext } from "@/app/_contexts/design-context";
import { designContextType } from "@/types/types";
import { PiExportBold } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { AnimatePresence } from "motion/react";
import Image from "next/image";

const DraggableSection = dynamic(() => import("./draggable-section"), {
  ssr: false,
});

const Sidebar = () => {
  const { currentDesign, setCurrentDesign } = useContext(
    designContext
  ) as designContextType;

  const [searchTerm, setSearchTerm] = useState("");

  const handleExport = () => {
    const config = JSON.stringify(currentDesign);
    const blob = new Blob([config], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "config.json";
    link.click();
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setCurrentDesign(JSON.parse(content));

        // Reset the input value to allow re-importing the same file
        event.target.value = "";
      };
      reader.readAsText(file);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <aside className="flex flex-col justify-between items-center border-r px-5 pt-2 pb-5 w-1/5">
      <section className="flex gap-2 flex-col items-center">
        <div className="flex items-center gap-1 border-2 rounded-full px-2 bg-gray-100">
          <IoMdSearch className="text-gray-400" size={20} />
          <input
            type="text"
            placeholder={"Search"}
            className="outline-none bg-transparent"
            onChange={handleSearch}
            value={searchTerm}
          />
        </div>
        <h1 className="font-bold">Sections</h1>
        <ul className="grid md:grid-cols-2 auto-rows-fr gap-1">
          <AnimatePresence>
            {Object.entries(availableSections)
              .filter((section) =>
                section[1].title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((section) => (
                <DraggableSection key={section[0]} id={section[0]}>
                  <h1 className="text-xs uppercase text-gray-500">
                    {section[1].title}
                  </h1>
                  <div className="flex items-center justify-center flex-1">
                    <Image
                      src={section[1].image}
                      alt={section[0]}
                      width={100}
                      height={50}
                    />
                  </div>
                </DraggableSection>
              ))}
          </AnimatePresence>
        </ul>
      </section>
      <div className="grid md:grid-cols-2 items-center gap-2">
        <button
          onClick={handleExport}
          disabled={currentDesign.length === 0}
          className="group cursor-pointer disabled:cursor-not-allowed flex items-center gap-2 p-1 text-white hover:text-white/90 rounded-full bg-black disabled:opacity-50 duration-75 active:scale-95"
        >
          <h1 className="ml-1">Export</h1>
          <PiExportBold
            className="bg-gradient-to-r p-1 rounded-full from-rekaz-100 to-rekaz-200 group-disabled:opacity-50 duration-75"
            color="black"
            size={25}
          />
        </button>
        <label
          htmlFor="import-input"
          className="cursor-pointer text-center py-1 px-2 border border-black rounded-full active:scale-95 duration-75"
        >
          Import
        </label>
        <input
          id="import-input"
          type="file"
          onChange={handleImport}
          className="hidden"
        />
      </div>
    </aside>
  );
};
export default Sidebar;
