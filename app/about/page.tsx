
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Code2,
  Database,
  Layers3,
  Rocket,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
];

const revealUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {
        initial: false as const,
        whileInView: undefined,
        whileHover: undefined,
        transition: { duration: 0 },
      }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        whileHover: undefined,
        transition: {
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  return (
    <main className="min-h-screen overflow-hidden bg-page px-4 pb-20 pt-32 text-zinc-900 transition-colors duration-300 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Back Link */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
        >
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-purple-600 transition-all duration-300 hover:gap-3 dark:text-purple-300"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>

        {/* Page Heading */}
        <motion.section
          className="mb-16"
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={revealUp}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400"
          >
            Get to know me
          </motion.p>

          <motion.h1
            variants={revealUp}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            More than a developer.
            <span className="block text-purple-600 dark:text-purple-400">
              A problem solver.
            </span>
          </motion.h1>

          <motion.p
            variants={revealUp}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg"
          >
            I&apos;m a developer focused on building modern, responsive, and
            user-friendly web applications. My journey started with frontend
            development, and I&apos;m continuously expanding my skills toward
            full-stack engineering.
          </motion.p>
        </motion.section>

        {/* Professional Story */}
        <motion.section
          className="mb-16 grid gap-6 md:grid-cols-[1.2fr_0.8fr]"
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Journey Card */}
          <motion.div
            variants={revealUp}
            transition={{ duration: 0.65 }}
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
            className="rounded-3xl border border-brand-border/40 bg-surface p-7 transition-colors duration-300 sm:p-9"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-text">
              <Code2 size={24} />
            </div>

            <h2 className="mb-4 text-2xl font-bold">
              My professional journey
            </h2>

            <div className="space-y-4 leading-7 text-zinc-600 dark:text-zinc-300">
              <p>
                I focus on frontend development, building reusable UI
                components, responsive layouts, and maintainable applications
                using modern JavaScript and TypeScript technologies.
              </p>

              <p>
                Working with Angular has helped me develop a stronger
                understanding of component architecture, API integration,
                authentication flows, and application structure.
              </p>

              <p>
                I&apos;m also learning backend development with Node.js,
                Express.js, and databases to understand how complete web
                applications work beyond the user interface.
              </p>
            </div>
          </motion.div>

          {/* Motivation Card */}
          <motion.div
            variants={revealUp}
            transition={{ duration: 0.65, delay: 0.1 }}
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
            className="rounded-3xl border border-brand-border/40 bg-surface-hover p-7 transition-colors duration-300 sm:p-9"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-text">
              <Rocket size={24} />
            </div>

            <h2 className="mb-5 text-2xl font-bold">
              What drives me
            </h2>

            <ul className="space-y-4 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              {[
                "Building useful products that solve real problems.",
                "Writing clean, maintainable, reusable code.",
                "Improving performance and user experience.",
                "Learning software engineering beyond the frontend.",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, x: 15 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* Technologies */}
        <motion.section
          className="mb-16"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div
            variants={revealUp}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center gap-3"
          >
            <Layers3
              size={25}
              className="text-purple-600 dark:text-purple-400"
            />

            <h2 className="text-2xl font-bold sm:text-3xl">
              Technologies I work with
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap gap-3"
          >
            {technologies.map((technology) => (
              <motion.span
                key={technology}
                variants={revealUp}
                transition={{ duration: 0.4 }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -4, scale: 1.04 }
                }
                className="rounded-xl border border-brand-border/40 bg-surface px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors duration-300 hover:border-brand-hover hover:text-brand-hover dark:text-purple-100"
              >
                {technology}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        {/* Current Goal */}
        <motion.section
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealUp}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-brand-border/40 bg-gradient-to-br from-brand-soft to-surface p-7 transition-colors duration-300 sm:p-10"
        >
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-text"
          >
            <Database size={24} />
          </motion.div>

          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Where I&apos;m heading
          </h2>

          <p className="max-w-3xl leading-8 text-zinc-600 dark:text-zinc-300">
            My goal is to grow into a well-rounded software engineer by
            strengthening my frontend expertise while building practical
            backend and database skills. I&apos;m focused on understanding
            application architecture, authentication, API design, and data
            modeling to build complete, reliable web applications.
          </p>

          <motion.div
            whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            className="mt-7 inline-flex"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-hover dark:text-purple-950"
            >
              Explore my projects
              <ArrowLeft size={17} className="rotate-180" />
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
