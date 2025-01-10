"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import LoadingScreen from "@/components/main/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <main className={`h-full w-full cyber-grid transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-col gap-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/50 to-cyber-dark pointer-events-none" />
          
          <div id="about-me" className="relative">
            <Hero />
          </div>
          
          <div id="work-experience" className="relative">
            <Experience />
          </div>
          
          <div id="projects" className="relative">
            <Projects />
          </div>
        </div>
      </main>
    </>
  );
}
