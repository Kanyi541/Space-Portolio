import dynamic from "next/dynamic";
import Hero from "@/components/main/Hero";

const About = dynamic(() => import("@/components/main/About"));
const Skills = dynamic(() => import("@/components/main/Skills"));
const Encryption = dynamic(() => import("@/components/main/Encryption"));
const Projects = dynamic(() => import("@/components/main/Projects"));

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
