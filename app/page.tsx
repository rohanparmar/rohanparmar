"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import LoadingScreen from "@/components/main/LoadingScreen";
import Background from "@/components/main/Background";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <main className={`h-full w-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Background />
        <div className="flex flex-col">
          <div id="about-me" className="relative">
            <Hero />
          </div>
          
          <div id="work-experience" className="relative min-h-screen">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#C6FE01] to-transparent opacity-50" />
            <Experience />
          </div>
          
          <div id="projects" className="relative min-h-screen">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#C6FE01] to-transparent opacity-50" />
            <Projects />
          </div>
        </div>
      </main>
    </>
  );
}
