import { Dispatch, SetStateAction } from "react";

export type pageDesign = {
  id: string;
  type: sectionType;
};

export type sectionType =
  | "header1"
  | "hero1"
  | "about1"
  | "contact1"
  | "testimonials1"
  | "footer1";

export type designContextType = {
  currentDesign: pageDesign[];
  setCurrentDesign: Dispatch<SetStateAction<pageDesign[]>>;
};
