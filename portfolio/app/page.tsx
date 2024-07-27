import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <div id="about-me">
          <Hero />
        </div>
        <div id="work-experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    </main>
  );
}
