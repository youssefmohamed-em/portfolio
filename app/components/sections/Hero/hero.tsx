
"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Mail,
  Terminal,
} from "lucide-react";
import { motion } from "motion/react";

const technologies = [
  "Angular",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
];

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.13c.85 0 1.7.12 2.49.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.02 1.63 1.02 2.75 0 3.92-2.33 4.78-4.56 5.04.36.32.68.95.68 1.91v2.83c0 .27.18.6.69.49A10.24 10.24 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0Z" />
  </svg>
);

const codeLines = [
  {
    number: "01",
    content: "const developer = {",
    color: "text-purple-500 dark:text-purple-300",
  },
  {
    number: "02",
    content: '  name: "Youssef Emam",',
    color: "text-emerald-600 dark:text-emerald-300",
  },
  {
    number: "03",
    content: '  role: "Frontend Developer",',
    color: "text-emerald-600 dark:text-emerald-300",
  },
  {
    number: "04",
    content: '  focus: "Full Stack Engineering",',
    color: "text-emerald-600 dark:text-emerald-300",
  },
  {
    number: "05",
    content: '  backend: ["Node.js", "Express"],',
    color: "text-emerald-600 dark:text-emerald-300",
  },
  {
    number: "06",
    content: '  databases: ["MongoDB", "PostgreSQL"],',
    color: "text-emerald-600 dark:text-emerald-300",
  },
  {
    number: "07",
    content: "  mindset: AlwaysLearning,",
    color: "text-violet-600 dark:text-violet-300",
  },
  {
    number: "08",
    content: "};",
    color: "text-purple-500 dark:text-purple-300",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-400/15 blur-[100px] dark:bg-purple-600/20" />

        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-400/15 blur-[120px] dark:bg-violet-600/15" />

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(139,92,246,0.12)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* Availability badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/80 px-4 py-2 text-sm font-medium text-purple-800 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>

            Frontend Developer · Growing into Full Stack
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-700 dark:text-purple-300">
            Hello, I am Youssef
          </p>

          {/* Main heading */}
          <h1 className="max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
            I build digital
            <span className="block">experiences that</span>
            <span className="mt-2 block bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-300 dark:via-purple-400 dark:to-fuchsia-400">
              make an impact.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg dark:text-zinc-400">
            Frontend Developer focused on building modern, responsive web
            applications with Angular, React, and Next.js. Currently expanding
            into backend development with Node.js and databases to build
            complete, scalable applications.
          </p>

          {/* Technology badges */}
          <div className="mt-7 flex max-w-xl flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-zinc-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition-colors hover:border-purple-300 hover:text-purple-700 sm:text-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-purple-400/50 dark:hover:text-purple-300"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition-all hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-600/25 dark:bg-purple-500 dark:hover:bg-purple-400 dark:hover:text-purple-950"
            >
              Explore My Work

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/60 px-6 py-3.5 text-sm font-semibold text-zinc-800 transition-all hover:-translate-y-0.5 hover:border-purple-400 hover:text-purple-700 dark:border-white/15 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:border-purple-400/50 dark:hover:text-purple-300"
            >
              <Mail size={17} />
            Let&apos;s Connect
            </a>
          </div>

          {/* Social links */}
          <div className="mt-9 flex items-center gap-4">
            <span className="text-sm text-zinc-500 dark:text-zinc-500">
              Find me on
            </span>

            <a
              href="https://github.com/youssefmohamed-em"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg border border-zinc-200 p-2.5 text-zinc-600 transition-all hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 dark:border-white/10 dark:text-zinc-300 dark:hover:bg-purple-400/10 dark:hover:text-purple-300"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/youssef-emam-146418217/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-lg border border-zinc-200 p-2.5 text-zinc-600 transition-all hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 dark:border-white/10 dark:text-zinc-300 dark:hover:bg-purple-400/10 dark:hover:text-purple-300"
            >
              <LinkedInIcon />
            </a>
          </div>
        </motion.div>

        {/* Right: Developer code card */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-purple-500/20 via-violet-500/10 to-fuchsia-500/20 blur-2xl"
          />

          <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-2xl shadow-purple-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-[#160e25]/90 dark:shadow-purple-950/30">
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-4 dark:border-white/10 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <Code2 size={15} />
                developer.ts
              </div>

              <Terminal
                size={17}
                className="text-purple-600 dark:text-purple-300"
              />
            </div>

            {/* Code content */}
            <div className="overflow-x-auto px-3 py-6 sm:px-5 sm:py-8">
              <div className="min-w-max space-y-3 font-mono text-[11px] leading-relaxed sm:text-sm">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={line.number}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.45 + index * 0.08,
                    }}
                    className="flex gap-5"
                  >
                    <span className="select-none text-zinc-400 dark:text-zinc-600">
                      {line.number}
                    </span>

                    <span className={line.color}>{line.content}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Card footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 bg-zinc-50/80 px-4 py-4 dark:border-white/10 dark:bg-white/[0.025] sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  Always learning, always building
                </span>
              </div>

              <span className="text-xs font-medium text-purple-700 dark:text-purple-300">
                {"<FullStackJourney />"}
              </span>
            </div>
          </div>

          {/* Floating frontend card */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-4 top-10 hidden items-center gap-3 rounded-xl border border-zinc-200 bg-white/95 p-3 shadow-xl shadow-purple-950/5 sm:flex lg:-left-8 dark:border-white/10 dark:bg-[#211632]"
          >
            <div className="rounded-lg bg-purple-100 p-2 text-purple-700 dark:bg-purple-400/15 dark:text-purple-300">
              <Code2 size={19} />
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                Frontend
              </p>

              <p className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                UI & Experience
              </p>
            </div>
          </motion.div>

          {/* Floating backend card */}
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -right-2 bottom-10 hidden items-center gap-3 rounded-xl border border-zinc-200 bg-white/95 p-3 shadow-xl shadow-purple-950/5 sm:flex lg:-right-8 dark:border-white/10 dark:bg-[#211632]"
          >
            <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
              <Terminal size={19} />
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                Backend
              </p>

              <p className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                APIs & Databases
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-purple-600 sm:flex dark:text-zinc-400 dark:hover:text-purple-300"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
          Scroll to explore
        </span>

        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
