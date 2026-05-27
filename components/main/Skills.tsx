"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import SkillText from "../sub/SkillText";

const Skills = () => {
  const { ref: videoRef, inView: videoInView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  // Animation variants for container cascading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-12 h-full relative overflow-hidden py-24"
    >
      {/* Immersive Cosmic Background Elements */}
      <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#7042f8] opacity-[0.08] blur-[150px] pointer-events-none z-[-1]" />
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-[#00f0ff] opacity-[0.05] blur-[150px] pointer-events-none z-[-1]" />

      <SkillText />

      {/* Rebuilt Categorized Glassmorphic Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-[1240px] px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-30"
      >
        {/* Category 1: Frontend Technologies */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col gap-6 rounded-3xl border border-[#7042f833] bg-[#03001430] backdrop-blur-xl p-6 shadow-2xl shadow-purple-900/10 hover:border-[#7042f866] transition-all duration-300 group"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Frontend Architecture
              </h3>
              <span className="py-1 px-3 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 group-hover:bg-purple-500/20 transition-all duration-300">
                Client Side
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Building ultra-fast, semantic, and highly interactive user interfaces.
            </p>
            <div className="h-[2px] w-full bg-gradient-to-r from-purple-500/50 to-transparent mt-2" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {Frontend_skill.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center p-3 rounded-2xl border border-transparent bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#7042f844] transition-all duration-300 group/item cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-12 h-12 flex items-center justify-center filter group-hover/item:drop-shadow-[0_0_10px_rgba(112,66,248,0.5)] transition-all duration-300">
                  <Image
                    src={skill.Image}
                    width={skill.width}
                    height={skill.height}
                    alt={skill.skill_name}
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] font-medium text-gray-400 mt-2 text-center group-hover/item:text-purple-300 transition-colors">
                  {skill.skill_name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category 2: Backend Architecture */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col gap-6 rounded-3xl border border-[#7042f833] bg-[#03001430] backdrop-blur-xl p-6 shadow-2xl shadow-purple-900/10 hover:border-[#7042f866] transition-all duration-300 group"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Backend & databases
              </h3>
              <span className="py-1 px-3 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all duration-300">
                Server Side
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Structuring robust APIs, scalable databases, and server logic.
            </p>
            <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mt-2" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {Backend_skill.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center p-3 rounded-2xl border border-transparent bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#00f0ff44] transition-all duration-300 group/item cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-12 h-12 flex items-center justify-center filter group-hover/item:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all duration-300">
                  <Image
                    src={skill.Image}
                    width={skill.width}
                    height={skill.height}
                    alt={skill.skill_name}
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] font-medium text-gray-400 mt-2 text-center group-hover/item:text-cyan-300 transition-colors">
                  {skill.skill_name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category 3: DevOps, Mobile & Systems */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col gap-6 rounded-3xl border border-[#7042f833] bg-[#03001430] backdrop-blur-xl p-6 shadow-2xl shadow-purple-900/10 hover:border-[#7042f866] transition-all duration-300 group md:col-span-2 lg:col-span-1"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Devops, Mobile & Tools
              </h3>
              <span className="py-1 px-3 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-300 border border-violet-500/20 group-hover:bg-violet-500/20 transition-all duration-300">
                Ecosystem
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Cross-platform development, containerization, and backend languages.
            </p>
            <div className="h-[2px] w-full bg-gradient-to-r from-violet-500/50 to-transparent mt-2" />
          </div>

          {/* Merge Full Stack & Other Skills */}
          <div className="grid grid-cols-3 gap-4">
            {[...Full_stack, ...Other_skill].map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center p-3 rounded-2xl border border-transparent bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#a855f744] transition-all duration-300 group/item cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-12 h-12 flex items-center justify-center filter group-hover/item:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-300">
                  <Image
                    src={skill.Image}
                    width={skill.width}
                    height={skill.height}
                    alt={skill.skill_name}
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] font-medium text-gray-400 mt-2 text-center group-hover/item:text-violet-300 transition-colors">
                  {skill.skill_name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Video Background Layer (Original Ambient Video) */}
      <div
        ref={videoRef}
        className="w-full h-full absolute top-0 left-0 pointer-events-none select-none z-[-2]"
      >
        <div className="w-full h-full opacity-15 flex items-center justify-center">
          {videoInView && (
            <video
              className="w-full h-auto object-cover min-h-full"
              preload="none"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
