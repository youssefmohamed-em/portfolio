
"use client";

import {
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Rocket,
} from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive, accessible interfaces with Angular, React, Next.js, and TypeScript.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Expanding into Node.js, Express, REST APIs, authentication, and database design.",
  },
  {
    icon: Layers3,
    title: "Clean Architecture",
    description:
      "Learning to structure applications into maintainable, reusable, and scalable modules.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description:
      "Improving problem-solving skills and exploring tools that help me build better products.",
  },
];

const technologies = [
  "Angular",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Git",
];

const stats = [
  { value: "2+", label: "Years of frontend experience" },
  { value: "3+", label: "Frontend frameworks explored" },
  { value: "Full Stack", label: "My long-term direction" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#faf9ff] px-4 py-24 transition-colors duration-300 dark:bg-[#10081f] sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-purple-300/15 blur-[110px] dark:bg-purple-600/10" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-violet-300/15 blur-[120px] dark:bg-violet-600/10" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-700 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            About Me
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl dark:text-white">
            More than code.
            <span className="mt-2 block bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-300 dark:via-purple-400 dark:to-fuchsia-400">
              I build experiences.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg dark:text-zinc-400">
            A little about my background, the way I approach development,
            and where I am heading next.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-purple-200/70 bg-white/80 p-6 shadow-lg shadow-purple-950/[0.03] backdrop-blur-sm transition-colors duration-300 sm:p-8 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-purple-950/10">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Who I am
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
                <p>
                  I am Youssef Emam, a Frontend Developer passionate about
                  building modern web applications that combine thoughtful
                  design with reliable functionality.
                </p>

                <p>
                  My frontend experience includes Angular, React, Next.js,
                  JavaScript, and TypeScript. I enjoy turning ideas into
                  responsive interfaces that are easy to use and maintain.
                </p>

                <p>
                  I am also growing my backend skills with Node.js, Express,
                  REST APIs, authentication, MongoDB, and PostgreSQL. My goal
                  is to understand the full application lifecycle and become
                  a well-rounded software engineer.
                </p>
              </div>

              <a
                href="#projects"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 transition-colors hover:text-purple-900 dark:text-purple-300 dark:hover:text-purple-200"
              >
                Explore my projects
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-xl border border-purple-200/70 bg-white/70 p-4 transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.035]"
                >
                  <p className="text-xl font-bold text-purple-700 sm:text-2xl dark:text-purple-300">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights and technologies */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group rounded-2xl border border-purple-200/70 bg-white/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-950/5 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-purple-400/30 dark:hover:bg-purple-400/[0.05]"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700 transition-colors group-hover:bg-purple-600 group-hover:text-white dark:bg-purple-400/10 dark:text-purple-300 dark:group-hover:bg-purple-400 dark:group-hover:text-purple-950">
                      <Icon size={21} />
                    </div>

                    <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Technology stack */}
            <div className="rounded-2xl border border-purple-200/70 bg-white/80 p-6 transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.035]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-400/10 dark:text-purple-300">
                  <Code2 size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    My Tech Stack
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    Tools I use and continue to explore
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-700 transition-colors hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 dark:border-white/10 dark:bg-white/[0.035] dark:text-zinc-300 dark:hover:border-purple-400/30 dark:hover:bg-purple-400/10 dark:hover:text-purple-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
