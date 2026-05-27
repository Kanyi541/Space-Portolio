"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center px-4 md:px-20 py-20 w-full z-[30] relative overflow-hidden"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-[-10%] w-[300px] h-[300px] rounded-full bg-[#7042f8] opacity-20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[300px] h-[300px] rounded-full bg-[#00f0ff] opacity-10 blur-[120px] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1200px] gap-12"
      >
        {/* Left Content (Text) */}
        <div className="flex-[1.2] flex flex-col gap-6 text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] flex items-center gap-2 self-start"
          >
            <SparklesIcon className="text-[#b49bff] h-5 w-5 animate-pulse" />
            <h2 className="Welcome-text text-[13px] font-semibold tracking-wider uppercase text-purple-300">
              Discover My Story
            </h2>
          </motion.div>

          <motion.h3
            variants={slideInFromLeft(0.5)}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Sailing the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-400 to-cyan-400">
              {" "}
              Digital Cosmos{" "}
            </span>
            & Coding Masterpieces
          </motion.h3>

          <motion.p
            variants={slideInFromLeft(0.7)}
            className="text-gray-300 leading-relaxed text-base md:text-lg border-l-2 border-[#7042f8] pl-4 bg-white/5 py-3 rounded-r-lg"
          >
            I am a dedicated **Full Stack Software Engineer** specializing in crafting immersive, 
            high-performance digital experiences. My engineering philosophy revolves around 
            clean design principles, modular architectures, and smooth intuitive user interfaces.
          </motion.p>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-gray-400 text-sm md:text-base leading-relaxed"
          >
            By bridging technical logic with interactive excellence, I transform complex concepts 
            into responsive, responsive web applications. Whether leveraging Next.js for flawless 
            routing, styling with modern frameworks, or building robust server configurations, 
            I construct software that makes a meaningful, elegant impact.
          </motion.p>

          {/* Quick Stats Grid */}
          <motion.div
            variants={slideInFromLeft(0.9)}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4"
          >
            <div className="p-4 rounded-xl border border-[#7042f833] bg-[#03001480] backdrop-blur-md hover:border-[#7042f888] transition-all duration-300 group">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                100%
              </span>
              <p className="text-xs text-gray-400 uppercase mt-1 group-hover:text-gray-200 transition-colors">
                Responsive Design
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#7042f833] bg-[#03001480] backdrop-blur-md hover:border-[#00f0ff88] transition-all duration-300 group">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-purple-400">
                Full-Stack
              </span>
              <p className="text-xs text-gray-400 uppercase mt-1 group-hover:text-gray-200 transition-colors">
                Integration
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#7042f833] bg-[#03001480] backdrop-blur-md hover:border-[#7042f888] transition-all duration-300 col-span-2 md:col-span-1 group">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#00f0ff]">
                Premium
              </span>
              <p className="text-xs text-gray-400 uppercase mt-1 group-hover:text-gray-200 transition-colors">
                UX & Animation
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Content (Image with orbiting glowing border) */}
        <motion.div
          variants={slideInFromRight(0.7)}
          className="flex-1 flex justify-center items-center relative mt-10 lg:mt-0"
        >
          {/* Rotating Cosmic Ring */}
          <div className="absolute w-[320px] h-[320px] rounded-full border-2 border-dashed border-[#7042f88b] animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-[290px] h-[290px] rounded-full border border-purple-500/30 animate-[spin_20s_linear_infinite_reverse]" />
          
          {/* Inner Glowing Aura */}
          <div className="absolute w-[260px] h-[260px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 blur-xl animate-pulse" />

          {/* Styled Profile Image Container */}
          <div className="relative w-[250px] h-[250px] rounded-full p-[3px] bg-gradient-to-r from-[#7042f8] to-[#00f0ff] shadow-2xl shadow-purple-500/20 overflow-hidden hover:scale-105 transition-all duration-500 group">
            <div className="w-full h-full rounded-full bg-[#030014] overflow-hidden relative">
              <Image
                src="/Elvis.jpeg"
                alt="Developer Profile Image"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
