"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "@/app/hooks/useTheme";
import { motion, AnimatePresence } from "motion/react";
import {

    Menu,
    X,
    Sun,
    Moon,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

const GitHubIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
    >
        <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.13c.85 0 1.7.12 2.49.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.02 1.63 1.02 2.75 0 3.92-2.33 4.78-4.56 5.04.36.32.68.95.68 1.91v2.83c0 .27.18.6.69.49A10.24 10.24 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
        />
    </svg>
);

const LinkedInIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
    >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0Z"
        />
    </svg>
);
export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);
    const handleNavClick = () => {
        setIsOpen(false);
    };

    const menuRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (!isOpen) return;

  const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
    if (
      menuRef.current &&
      event.target instanceof Node &&
      !menuRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  document.addEventListener("mousedown", handleOutsideClick);
  document.addEventListener("touchstart", handleOutsideClick);
  document.addEventListener("keydown", handleEscape);

  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
    document.removeEventListener("touchstart", handleOutsideClick);
    document.removeEventListener("keydown", handleEscape);
  };
}, [isOpen]);


    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div
            ref={menuRef}
            className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <nav
                    className="
    flex items-center justify-between
    rounded-2xl
    border
    border-zinc-200
    bg-white/80
    px-4 py-3
    shadow-lg shadow-black/5
    backdrop-blur-xl
    transition-all
    duration-300

    dark:border-purple-400/10
    dark:bg-[#170d2b]/80
    dark:shadow-purple-950/20
  "
                >
                    {/* Logo */}
                    <a
                        href="#home"
                        className="text-xl font-bold tracking-tight text-violet-500 dark:text-violet-500"
                    >
                        Y<span className="text-cyan-400">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="
                  text-sm font-medium
              text-zinc-600
transition-colors
hover:text-purple-700

dark:text-purple-200
dark:hover:text-purple-300
                "
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-3 md:flex">
                        <a
                            href="https://github.com/youssefmohamed-em"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="
  rounded-lg p-2
  text-zinc-600
  transition-all duration-300
  hover:bg-purple-100
  hover:text-purple-700
  dark:text-zinc-300
  dark:hover:bg-purple-400/10
  dark:hover:text-purple-300
"
                        >
                            <GitHubIcon />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/youssef-emam-146418217/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                  className="
  rounded-lg p-2
  text-zinc-600
  transition-all duration-300
  hover:bg-purple-100
  hover:text-purple-700
  dark:text-zinc-300
  dark:hover:bg-purple-400/10
  dark:hover:text-purple-300
"
                        >
                            <LinkedInIcon />
                        </a>

                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="
    rounded-lg
    p-2
    text-gray-600
    transition
    hover:bg-black/5
    hover:text-purple-700
    dark:text-purple-200
    dark:hover:bg-purple-500/10
    dark:hover:text-purple-300
  "
                        >
                            {theme === "dark" ? (
                                <Sun size={19} />
                            ) : (
                                <Moon size={19} />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                        className="
              rounded-lg p-2
              text-gray-300
              transition
              hover:bg-white/10
              hover:text-white
              md:hidden
            "
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="
                mt-2
                overflow-hidden
                rounded-2xl
                border border-white/10
                bg-black/90
                p-4
                shadow-xl
                backdrop-blur-xl
                md:hidden
              "
                        >
                            <div className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={handleNavClick}
                                        className="
                      rounded-lg
                      px-4 py-3
                      text-sm font-medium
                      text-gray-300
                      transition
                      hover:bg-white/10
                      hover:text-white
                    "
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile Social Links */}
                            <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
                                <a
                                    href="https://github.com/youssefmohamed-em"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white"
                                >
                                    <GitHubIcon />
                                </a>

                                <a
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white"
                                >
                                    <LinkedInIcon />
                                </a>

                                <button
                                    type="button"
                                    onClick={toggleTheme}
                                    aria-label="Toggle theme"
                                    className="rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white"
                                >
                                    {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}