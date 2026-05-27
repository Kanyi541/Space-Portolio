"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon, PlayIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleActivateLive = () => {
    if (!link) return;
    setIsLoading(true);
    setIsLive(true);
  };

  const handleToggleBack = () => {
    setIsLive(false);
    setIsLoading(false);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative flex flex-col overflow-hidden rounded-3xl border border-[#7042f833] bg-[#03001430] backdrop-blur-xl shadow-2xl shadow-purple-900/10 hover:border-[#7042f866] transition-all duration-300 w-full group">
      
      {/* Media Window Container (Aspect 16:9) */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#03001480] border-b border-[#7042f822]">
        
        {!isLive ? (
          // Static Image Preview Mode
          <div className="relative w-full h-full cursor-pointer" onClick={handleActivateLive}>
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Interactive Live Sandbox Activation Overlay */}
            {link && (
              <div className="absolute inset-0 bg-[#030014b3] backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 gap-3 z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-purple-500/50 transform scale-75 group-hover:scale-100 transition-all duration-500">
                  <PlayIcon className="h-6 w-6 text-white ml-[3px]" />
                </div>
                <span className="text-white text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  Launch Interactive Sandbox
                </span>
              </div>
            )}
          </div>
        ) : (
          // Live Iframe Interactive Mode
          <div className="relative w-full h-full">
            {isLoading && (
              // Floating Cosmic Loader
              <div className="absolute inset-0 bg-[#030014] z-10 flex flex-col items-center justify-center gap-3">
                <div className="relative w-12 h-12">
                  <div className="absolute w-full h-full rounded-full border-4 border-dashed border-[#7042f8] animate-[spin_10s_linear_infinite]" />
                  <div className="absolute w-full h-full rounded-full border border-cyan-400/40 animate-pulse" />
                </div>
                <span className="text-[10px] text-purple-300 tracking-widest uppercase animate-pulse">
                  Syncing Core Sandbox...
                </span>
              </div>
            )}
            
            <iframe
              src={link}
              title={title}
              className="w-full h-full border-none bg-white"
              sandbox="allow-scripts allow-same-origin"
              onLoad={handleIframeLoad}
            />
          </div>
        )}
      </div>

      {/* Description and Action Area */}
      <div className="flex-1 flex flex-col p-6 gap-4">
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-bold text-white tracking-wide">
            {title}
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Dynamic Action Buttons */}
        {link && (
          <div className="mt-auto pt-4 border-t border-[#7042f811] flex items-center justify-between gap-4">
            
            {/* Left Trigger: Sandbox Controller */}
            {!isLive ? (
              <button
                onClick={handleActivateLive}
                className="flex items-center gap-2 text-xs font-semibold py-2 px-4 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/25 hover:border-purple-500/40 transition-all duration-300"
              >
                <PlayIcon className="h-4 w-4" />
                Activate Sandbox
              </button>
            ) : (
              <button
                onClick={handleToggleBack}
                className="flex items-center gap-2 text-xs font-semibold py-2 px-4 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/25 hover:border-cyan-500/40 transition-all duration-300 animate-pulse"
              >
                <ArrowPathIcon className="h-4 w-4" />
                Reset Snapshot
              </button>
            )}

            {/* Right Trigger: View Full Page */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold py-2 px-4 rounded-xl bg-white/[0.03] text-gray-300 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all duration-300"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              Open Live Site
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
