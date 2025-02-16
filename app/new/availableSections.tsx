import {
  About1,
  Contact1,
  Footer1,
  Header1,
  Hero1,
  Testimonials1,
} from "./_components/sections";
import { sectionType } from "@/types/types";

export const availableSections: Record<
  sectionType,
  { title: string; component: React.ReactNode; image: string }
> = {
  header1: {
    title: "Header",
    component: <Header1 />,
    image: "/header1.png",
  },
  hero1: { title: "Hero", component: <Hero1 />, image: "/hero1.png" },
  about1: { title: "About", component: <About1 />, image: "/about1.png" },
  contact1: {
    title: "Contact",
    component: <Contact1 />,
    image: "/contact1.png",
  },
  testimonials1: {
    title: "Testimonials",
    component: <Testimonials1 />,
    image: "/testimonials1.png",
  },
  footer1: { title: "Footer", component: <Footer1 />, image: "/footer1.png" },
};
