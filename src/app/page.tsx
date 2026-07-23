import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { ExploreEvents } from "@/components/sections/ExploreEvents";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return <><Navbar /><main id="top"><Hero /><Services /><ExploreEvents /><About /></main><Footer /></>;
}
