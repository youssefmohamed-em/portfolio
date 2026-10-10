
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  Palette,
  Server,
  Database,
  Wrench,
  ShieldCheck,
  GitBranch,
  Globe,
  Layers,
  Terminal,
  Smartphone,
  Workflow,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const skillGroups = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building modern, accessible, and responsive web applications.",
    icon: Code2,
    featured: true,
    skills: [
      { name: "HTML5", detail: "Semantic markup" },
      { name: "CSS3", detail: "Modern layouts" },
      { name: "JavaScript", detail: "ES6+ & async" },
      { name: "TypeScript", detail: "Typed applications" },
      { name: "Angular", detail: "Components & services" },
      { name: "React", detail: "Reusable UI" },
      { name: "Next.js", detail: "Full-stack React framework" },
    ],
  },
  {
    id: "styling",
    title: "Styling & UI",
    description: "Creating consistent interfaces with responsive layouts.",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", detail: "Utility-first styling" },
      { name: "Bootstrap", detail: "Responsive components" },
      { name: "SCSS", detail: "Maintainable styles" },
      { name: "Responsive Design", detail: "Mobile-first UI" },
      { name: "Animations", detail: "Motion & interactions" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Learning to build reliable APIs and server-side applications.",
    icon: Server,
    skills: [
      { name: "Node.js", detail: "JavaScript runtime" },
      { name: "Express.js", detail: "REST API development" },
      { name: "REST APIs", detail: "HTTP methods & integration" },
      { name: "Authentication", detail: "JWT & access control" },
      { name: "Middleware", detail: "Request processing" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Working with data models, queries, and persistence.",
    icon: Database,
    skills: [
      { name: "MongoDB", detail: "NoSQL & Mongoose" },
      { name: "PostgreSQL", detail: "Relational databases" },
      { name: "SQL", detail: "Queries & relationships" },
    ],
  },
  {
    id: "engineering",
    title: "Tools & Engineering",
    description: "Tools and practices that support a clean development workflow.",
    icon: Wrench,
    skills: [
      { name: "Git", detail: "Version control" },
      { name: "GitHub", detail: "Code collaboration" },
      { name: "VS Code", detail: "Development environment" },
      { name: "Debugging", detail: "Finding & fixing issues" },
      { name: "Component Architecture", detail: "Reusable code" },
    ],
  },
  {
    id: "security",
    title: "Web Fundamentals",
    description: "Core concepts for building dependable web applications.",
    icon: ShieldCheck,
    skills: [
      { name: "HTTP & HTTPS", detail: "Web communication" },
      { name: "JWT", detail: "Token-based authentication" },
      { name: "CORS", detail: "Cross-origin requests" },
      { name: "Cookies", detail: "Browser-based storage" },
      { name: "Async JavaScript", detail: "Promises & async/await" },
    ],
  },
];

const highlights = [
  {
    icon: Globe,
    title: "Responsive UI",
    description: "Interfaces that adapt to different screen sizes.",
  },
  {
    icon: Layers,
    title: "Reusable Components",
    description: "Organized, maintainable frontend architecture.",
  },
  {
    icon: Workflow,
    title: "API Integration",
    description: "Connecting frontend applications with backend services.",
  },
  {
    icon: GitBranch,
    title: "Continuous Learning",
    description: "Expanding from frontend toward full-stack development.",
  },
];

export default function SkillsPage() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#faf7ff] text-zinc-900 transition-colors duration-300 dark:bg-[#10081f] dark:text-white">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-400/15 blur-[120px] dark:bg-violet-600/20" />
        <div className="absolute top-[700px] -left-40 h-80 w-80 rounded-full bg-fuchsia-400/10 blur-[120px] dark:bg-fuchsia-600/10" />
        <div className="absolute right-0 top-[1200px] h-96 w-96 rounded-full bg-purple-400/10 blur-[140px] dark:bg-purple-600/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 lg:px-10 lg:pt-36">
        {/* Hero */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={reveal}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/70 bg-violet-100/70 px-4 py-2 text-sm font-medium text-violet-800 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-200">
            <Sparkles size={15} />
            What I work with
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            My Technical{" "}
            <span className="bg-gradient-to-r from-violet-800 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent dark:from-violet-300 dark:via-purple-400 dark:to-fuchsia-400">
              Skills.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            The technologies and engineering concepts I use to build
            responsive user interfaces, integrate APIs, and grow toward
            full-stack development.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#frontend"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-700/20 transition hover:-translate-y-0.5 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-500"
            >
              Explore my skills
              <ArrowUpRight size={17} />
            </a>

         
          </div>
        </motion.section>

        {/* Quick highlights */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
              },
            },
          }}
          className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={reveal}
                className="rounded-2xl border border-violet-200/80 bg-white/70 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-400 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-violet-400/40"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
                  <Icon size={21} />
                </div>

                <h2 className="font-semibold">{item.title}</h2>

                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.section>

        {/* Skills heading */}
        <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">
              My toolbox
            </p>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Technologies &amp; Expertise
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            A growing toolkit for building modern applications from the UI
            to the database.
          </p>
        </div>

        {/* Skill categories */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.08,
              },
            },
          }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.id}
                id={group.id}
                variants={reveal}
                className={`scroll-mt-28 rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/5 dark:hover:shadow-black/20 sm:p-7 ${
                  group.featured
                    ? "border-violet-300 bg-gradient-to-br from-violet-100/90 via-white to-fuchsia-50/70 dark:border-violet-400/30 dark:from-violet-950/50 dark:via-[#190e2b] dark:to-fuchsia-950/20"
                    : "border-violet-200/70 bg-white/70 dark:border-white/[0.08] dark:bg-white/[0.025]"
                }`}
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-200 bg-violet-100 text-violet-800 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300">
                    <Icon size={23} />
                  </div>

                  {group.featured && (
                    <span className="rounded-full border border-violet-300/70 bg-violet-200/60 px-3 py-1 text-xs font-semibold text-violet-900 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-200">
                      Core skills
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold">{group.title}</h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {group.description}
                </p>

                <div className="my-5 h-px bg-violet-200/80 dark:bg-white/[0.08]" />

                <div className="flex flex-col gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill flex items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-3 transition hover:border-violet-200 hover:bg-violet-50/80 dark:hover:border-violet-400/15 dark:hover:bg-violet-500/[0.06]"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-violet-600 dark:bg-violet-400" />

                        <span className="truncate text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-right text-xs text-zinc-500 dark:text-zinc-500">
                        {skill.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.section>

        {/* Closing CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mt-20 overflow-hidden rounded-3xl border border-violet-300/70 bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 p-8 dark:border-violet-400/20 dark:from-violet-950/70 dark:via-[#190e2b] dark:to-fuchsia-950/30 sm:p-12"
        >
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-violet-800 dark:text-violet-300">
                <Terminal size={17} />
                Always building. Always learning.
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Turning ideas into useful products.
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
                I&apos;m continuing to strengthen my frontend expertise while
                expanding into backend development, APIs, and databases.
              </p>
            </div>

         
          </div>
        </motion.section>

        <p className="mt-10 text-center text-xs text-zinc-500 dark:text-zinc-600">
          <Smartphone className="mr-1 inline-block" size={13} />
          Designed for desktop, tablet, and mobile.
        </p>
      </div>
    </main>
  );
}
