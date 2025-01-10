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
        <div className="flex flex-col gap-20">
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
