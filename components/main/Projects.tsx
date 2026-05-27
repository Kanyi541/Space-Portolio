"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-24 relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#00f0ff] opacity-[0.05] blur-[150px] pointer-events-none z-[-1]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#7042f8] opacity-[0.05] blur-[150px] pointer-events-none z-[-1]" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4 mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-400 to-cyan-400">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-[600px] px-4">
          Explore interactive sandboxes of my latest creations. Click any card to launch a live working preview directly inside the browser.
        </p>
      </motion.div>

      {/* Responsive Glassmorphic Card Grid */}
      <div className="w-full max-w-[1240px] px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-30">
        {/* Project cards for provided URLs */}
        <ProjectCard
          src="/Afriview.png"
          title="AfriView"
          description="A tourism website showcasing African destinations, culture, and travel experiences."
          link="https://tourism-olive-five.vercel.app/"
        />
        <ProjectCard
          src="/Edu.png"
          title="edu-savanna"
          description="A school management system for handling courses, students, and administrative tasks."
          link="https://edu-savanna.vercel.app/"
        />
        <ProjectCard
          src="/stream.png"
          title="stream-it-mocha"
          description="A movie streaming site offering a curated collection of films and series."
          link="https://stream-it-mocha.vercel.app/"
        />
        <ProjectCard
          src="/stay.png"
          title="Stay"
          description="An Airbnb‑style booking platform for managing accommodations and reservations."
          link="https://premiumstay.vercel.app/"
        />
        {/* See more projects button */}
        <ProjectCard
          src="/CardImage.png"
          title="See More Projects"
          description="Explore all my projects on GitHub."
          link="https://github.com/Kanyi541/Space-Portolio"
        />
      </div>

      <div className="mt-8 flex justify-center">
        <a href="https://github.com/Kanyi541/Space-Portolio" target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            See More Projects
          </button>
        </a>
      </div>
    </section>
  );
};

export default Projects;
