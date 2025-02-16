"use client";

import { CSSProperties, useContext, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import {
  FaRegTrashCan,
  FaSquareXTwitter,
  FaLocationDot,
  FaUserLarge,
} from "react-icons/fa6";
import { RiExpandUpDownLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { designContext } from "../page";
import { designContextType } from "@/types/types";
import Image from "next/image";

export const SectionWrapper = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const {
    listeners,
    attributes,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const { setCurrentDesign } = useContext(designContext) as designContextType;

  const style: CSSProperties = {
    transform: transform ? `translateY(${transform.y}px)` : undefined,
    transition,
    zIndex: isDragging ? 50 : undefined,
  };

  const handleDeleteSection = (sectionId: string) => {
    setCurrentDesign((prev) =>
      prev.filter((section) => section.id !== sectionId)
    );
  };

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="hover:border-2 border-blue-600 transition-[border] duration-75 relative"
      ref={setNodeRef}
      style={style}
    >
      {isHovering && (
        <>
          <div
            onClick={() => handleDeleteSection(id)}
            className="absolute z-40 right-1 top-1/2 -translate-y-1/2 flex gap-2 box-border"
          >
            <FaRegTrashCan
              color="red"
              size={30}
              className="border border-black/20 rounded-md bg-white hover:bg-gray-100 duration-75 shadow-md p-1 cursor-pointer"
            />
            <RiExpandUpDownLine
              size={30}
              className="border border-black/20 rounded-md bg-white hover:bg-gray-100 duration-75 shadow-md p-1 cursor-grab"
              {...listeners}
              {...attributes}
            />
          </div>
        </>
      )}
      {children}
    </div>
  );
};
export const Header1 = () => {
  return (
    <div className="flex items-center justify-between p-2 border-b bg-white">
      <h1>Nav Title</h1>
      <button className="border border-black py-1 px-3 rounded-full">
        Sign in
      </button>
    </div>
  );
};

export const Hero1 = () => {
  return (
    <div className="flex h-96 items-center justify-between bg-gray-100">
      <div className="p-3 flex-1">
        <h1 className="font-bold text-xl">Hero</h1>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. um, at.
        </p>
        <button className="capitalize text-sm mt-9 border border-black rounded-full py-1 px-2">
          Start now!
        </button>
      </div>
      <div className="flex-1 h-full relative">
        <Image
          src="/hero-picture.jpg"
          alt="door"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export const About1 = () => {
  return (
    <div className="flex">
      <section className="flex-1 self-stretch bg-gray-100 flex items-center justify-center font-bold">
        Our story
      </section>
      <section className="flex-1 text-center px-5 py-10 bg-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
        necessitatibus provident, vitae ex nulla officiis illum fugiat
        reiciendis consequatur? In!
      </section>
    </div>
  );
};

export const Contact1 = () => {
  return (
    <div className="flex justify-between items-center p-10 bg-indigo-500 text-white">
      <div className="flex items-center gap-1">
        <IoCall />
        <p>+966XXXXXX</p>
      </div>
      <div className="flex items-center gap-1">
        <FaSquareXTwitter />
        <p>SocialMedia</p>
      </div>
      <div className="flex items-center gap-1">
        <FaLocationDot />
        <p>Saudi Arabia, Riyadh</p>
      </div>
    </div>
  );
};

export const Testimonials1 = () => {
  return (
    <div className="flex items-center justify-between p-10 bg-neutral-200">
      <div className="flex flex-col items-center justify-center text-gray-600">
        <FaUserLarge
          size={40}
          className="border-2 rounded-full border-gray-500 p-1"
        />
        <h3 className="text-xs opacity-65">User</h3>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex flex-col items-center justify-center text-gray-600">
        <FaUserLarge
          size={40}
          className="border-2 rounded-full border-gray-500 p-1"
        />
        <h3 className="text-xs opacity-65">User</h3>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex flex-col items-center justify-center text-gray-600">
        <FaUserLarge
          size={40}
          className="border-2 rounded-full border-gray-500 p-1"
        />
        <h3 className="text-xs opacity-65">User</h3>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export const Footer1 = () => {
  return (
    <div className="flex items-center justify-between bg-zinc-700 text-white p-10">
      <h1>Footer</h1>
      <div>
        <h1>Lorem</h1>
        <ul>
          <li>
            <p className="underline opacity-30">ipsum</p>
            <p className="underline opacity-30">ipsum</p>
          </li>
        </ul>
      </div>
      <div>
        <h1>Lorem</h1>
        <ul>
          <li>
            <p className="underline opacity-30">ipsum</p>
            <p className="underline opacity-30">ipsum</p>
          </li>
        </ul>
      </div>
      <div />
    </div>
  );
};
