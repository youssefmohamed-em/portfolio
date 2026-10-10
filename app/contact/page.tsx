
"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.61 1.22 3.25.93.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.61 5.24-5.1 5.51.4.35.76 1.02.76 2.06v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.74H4.97V9.2h2.96v9.54ZM6.45 7.9a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02 3.44Zm12.3 10.84H15.8V14.1c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.72H9.52V9.2h2.84v1.3h.04a3.11 3.11 0 0 1 2.8-1.54c2.99 0 3.55 1.97 3.55 4.53v5.25Z" />
    </svg>
  );
}


const EMAIL = "youssefemam258@gmail.com";

const socialLinks = [
  {
    name: "GitHub",
    description: "Explore my code and projects",
    href: "https://github.com/youssefmohamed-em",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    description: "Connect with me professionally",
    href: "https://www.linkedin.com/in/youssef-emam-146418217/",
    icon: LinkedInIcon,
  },
];

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (EMAIL === "youssefemam258@gmail.com") {
      setError("Please configure your email address in the page code first.");
      return;
    }

    const subject =
      form.subject.trim() || `Portfolio contact from ${form.name.trim()}`;

    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      "",
      "Message:",
      form.message.trim(),
    ].join("\n");

    const mailtoUrl =
      `mailto:${EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <main
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#faf7ff] text-zinc-900 transition-colors duration-300 dark:bg-[#10081f] dark:text-white"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-400/15 blur-[120px] dark:bg-violet-600/20" />
        <div className="absolute left-0 top-[650px] h-80 w-80 rounded-full bg-fuchsia-400/10 blur-[120px] dark:bg-fuchsia-600/10" />
        <div className="absolute right-0 top-[350px] h-96 w-96 rounded-full bg-purple-400/10 blur-[140px] dark:bg-purple-600/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 lg:px-10 lg:pt-36">
        {/* Page heading */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={reveal}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/70 bg-violet-100/70 px-4 py-2 text-sm font-medium text-violet-800 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-200">
            <Sparkles size={15} />
            Let&apos;s connect
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-violet-800 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent dark:from-violet-300 dark:via-purple-400 dark:to-fuchsia-400">
              Great.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Have a project in mind, an opportunity to discuss, or just want
            to connect? I&apos;d love to hear from you.
          </p>
        </motion.section>

        {/* Contact content */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Left column */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-violet-200/70 bg-white/70 p-6 backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.03] sm:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-800 dark:bg-violet-500/15 dark:text-violet-300">
                <MessageCircle size={23} />
              </div>

              <h2 className="text-2xl font-bold">Get in touch</h2>

              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                I&apos;m interested in frontend opportunities, collaborative
                projects, and opportunities to grow as a software engineer.
                Feel free to reach out.
              </p>

              <a
                href={`mailto:${EMAIL}`}
                className="mt-6 flex items-start gap-4 rounded-2xl border border-violet-200/70 bg-violet-50/70 p-4 transition hover:border-violet-400 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-violet-400/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                  <Mail size={19} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                    Email me
                  </span>
                  <span className="mt-1 block break-all text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {EMAIL === "youssefemam258@gmail.com"
                      ? "Set your email address"
                      : EMAIL}
                  </span>
                </span>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-violet-700 dark:text-violet-300"
                />
              </a>

              <div className="mt-4 flex items-start gap-4 rounded-2xl border border-violet-200/70 bg-violet-50/70 p-4 dark:border-white/[0.08] dark:bg-white/[0.03]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                  <MapPin size={19} />
                </span>

                <span>
                  <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                    Location
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    Egypt
                  </span>
                  <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                    Open to suitable opportunities
                  </span>
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-violet-200/70 bg-white/70 p-6 backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.03] sm:p-8">
              <h2 className="text-lg font-bold">Find me online</h2>

              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Explore my work or connect with me on professional platforms.
              </p>

              <div className="mt-5 space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition hover:border-violet-200 hover:bg-violet-50 dark:hover:border-violet-400/20 dark:hover:bg-violet-500/[0.06]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-800 dark:bg-violet-500/10 dark:text-violet-300">
                        <Icon size={20} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold">
                          {social.name}
                        </span>
                        <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                          {social.description}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-700 dark:group-hover:text-violet-300"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.aside>

          {/* Right column: contact form */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            className="rounded-3xl border border-violet-200/70 bg-white/80 p-6 shadow-xl shadow-violet-950/[0.04] backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-black/10 sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-violet-700 dark:text-violet-300">
                Send a message
              </p>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Tell me about your idea.
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Fill out the form and your default email application will
                open with your message prepared.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your name <span className="text-violet-600">*</span>
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-violet-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-[#190e2b] dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-violet-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your email <span className="text-violet-600">*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-violet-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-[#190e2b] dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-violet-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  maxLength={150}
                  value={form.subject}
                  onChange={(event) =>
                    setForm({ ...form, subject: event.target.value })
                  }
                  placeholder="Job opportunity, collaboration..."
                  className="w-full rounded-xl border border-violet-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-[#190e2b] dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-violet-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium"
                >
                  Your message <span className="text-violet-600">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={5}
                  maxLength={5000}
                  rows={6}
                  value={form.message}
                  onChange={(event) =>
                    setForm({ ...form, message: event.target.value })
                  }
                  placeholder="Hi Youssef, I'd like to discuss..."
                  className="w-full resize-y rounded-xl border border-violet-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-[#190e2b] dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-violet-400"
                />

                <p className="mt-2 text-right text-xs text-zinc-500 dark:text-zinc-500">
                  {form.message.length}/5000
                </p>
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-400/20 dark:bg-red-500/10 dark:text-red-300"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-700/20 transition hover:-translate-y-0.5 hover:bg-violet-800 active:translate-y-0 dark:bg-violet-600 dark:hover:bg-violet-500 sm:w-auto"
              >
                Prepare email
                <Send size={17} />
              </button>

              <p className="flex items-start gap-2 text-xs leading-5 text-zinc-500 dark:text-zinc-500">
                <CheckCircle2
                  size={15}
                  className="mt-0.5 shrink-0 text-violet-600 dark:text-violet-400"
                />
                Your message stays in your email application until you
                choose to send it.
              </p>
            </form>
          </motion.section>
        </div>

        {/* Closing section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mt-20 text-center"
        >
          <ArrowDownRight
            size={26}
            className="mx-auto mb-4 text-violet-600 dark:text-violet-400"
          />

          <h2 className="text-xl font-bold sm:text-2xl">
            Every great project starts with a conversation.
          </h2>

          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Looking forward to hearing from you.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
