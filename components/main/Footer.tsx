import React from "react";
import {
  RxDiscordLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-30 mt-auto w-full border-t border-white/10 bg-[#030014cc] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-white">Elvis Kanyi</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
              Full-stack engineer building performant web experiences and
              scalable digital products.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400 items-center md:items-start">
              <a href="#hero" className="transition-colors hover:text-white">
                Home
              </a>
              <a href="#skills" className="transition-colors hover:text-white">
                Skills
              </a>
              <a
                href="#projects"
                className="transition-colors hover:text-white"
              >
                Projects
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Connect
            </h4>
            <div className="mt-4 flex items-center gap-4 text-xl text-gray-300">
              <a
                href="https://github.com/Kanyi541"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/elvis-kanyi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-white"
              >
                <RxLinkedinLogo />
              </a>
              <a
                href="https://www.instagram.com/elviskanyi?igsh=aThneTA5dmt3ZjRw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-white"
              >
                <RxInstagramLogo />
              </a>
              <a
                href="https://discord.gg/u599xnXpQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="transition-colors hover:text-white"
              >
                <RxDiscordLogo />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">elviskanyi8@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 text-center text-sm text-gray-400">
          Tekivo Technologies .2026 All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;