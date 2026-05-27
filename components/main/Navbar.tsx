"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { BsLinkedin, BsFacebook, BsInstagram, BsWhatsapp, BsDiscord, BsList } from "react-icons/bs";
import type { IconType } from "react-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  type SocialName = "LinkedIn" | "Facebook" | "Instagram" | "WhatsApp" | "Discord";
  const iconMap: Record<SocialName, IconType> = {
    LinkedIn: BsLinkedin,
    Facebook: BsFacebook,
    Instagram: BsInstagram,
    WhatsApp: BsWhatsapp,
    Discord: BsDiscord,
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <div className="relative w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full p-[2px] bg-gradient-to-r from-[#7042f8] to-[#00f0ff] overflow-hidden hover:scale-105 transition-all duration-500">
            {/* Rotating dashed border */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#7042f88b] animate-[spin_20s_linear_infinite]" />
            <Image src="/Elvis.jpeg" alt="logo" fill priority={true} sizes="100vw" className="object-cover" />
          </div>
          <span className="font-bold ml-2 hidden md:block text-gray-300">Elvis Kanyi</span>
        </a>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="cursor-pointer hover:text-[#b49bff] transition-colors">About me</a>
          <a href="#skills" className="cursor-pointer hover:text-[#b49bff] transition-colors">Skills</a>
          <a href="#projects" className="cursor-pointer hover:text-[#b49bff] transition-colors">Projects</a>
        </nav>
        {/* Mobile hamburger */}
        <button className="md:hidden text-gray-300 hover:text-[#b49bff]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <BsList size={28} />
        </button>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="absolute top-[65px] left-0 w-full bg-[#0300145e] border-t border-[#7042f861] flex flex-col items-center py-4 md:hidden">
            <a href="/" className="py-2 w-full text-center hover:text-[#b49bff] transition-colors">About me</a>
            <a href="#skills" className="py-2 w-full text-center hover:text-[#b49bff] transition-colors">Skills</a>
            <a href="#projects" className="py-2 w-full text-center hover:text-[#b49bff] transition-colors">Projects</a>
            <div className="flex gap-4 mt-4">
              {Socials.map((social) => {
                const Icon = iconMap[social.name as SocialName];
                return (
                  <Icon
                    key={social.name}
                    size={24}
                    className="text-gray-300 hover:text-[#b49bff] transition-colors cursor-pointer"
                    onClick={() => window.open(social.url, "_blank")}
                    aria-label={social.name}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Navbar);
