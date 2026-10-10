
import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  Code2,
  Mail,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/youssefmohamed-em",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/youssef-emam-146418217/",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-violet-200/70 bg-white/80 text-zinc-700 backdrop-blur-xl transition-colors duration-300 dark:border-white/[0.08] dark:bg-[#130a22] dark:text-zinc-300">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-violet-400/10 blur-[100px] dark:bg-violet-600/10"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16 lg:py-16">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="Youssef Emam home"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-700 text-lg font-bold text-white shadow-lg shadow-violet-700/20 transition-transform duration-300 group-hover:-translate-y-1 dark:bg-violet-500">
                Y<span className="text-fuchsia-200">.</span>
              </span>

              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                Youssef Emam
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Frontend Developer focused on building modern web
              experiences, with a growing passion for backend
              development and full-stack engineering.
            </p>

            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-800 transition-colors hover:text-fuchsia-700 dark:text-violet-300 dark:hover:text-fuchsia-300"
            >
              <Mail size={16} />
              Let&apos;s work together
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-900 dark:text-white">
              Quick Links
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4"
            >
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-zinc-600 transition-colors hover:text-violet-700 dark:text-zinc-400 dark:hover:text-violet-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-900 dark:text-white">
              Connect
            </h2>

            <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Interested in working together or discussing a project?
              Feel free to reach out.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.label} profile`}
                  className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50/70 px-4 py-2.5 text-sm font-medium text-violet-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-100 dark:border-white/10 dark:bg-white/[0.04] dark:text-violet-200 dark:hover:border-violet-400/40 dark:hover:bg-violet-500/10"
                >
                  {social.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
              <Code2 size={15} className="text-violet-600 dark:text-violet-400" />
              Built with Next.js &amp; TypeScript
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-violet-200/70 py-6 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-zinc-500 dark:text-zinc-500">
            © {currentYear} Youssef Emam. All rights reserved.
          </p>

          <a
            href="#top"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-violet-700 dark:text-zinc-400 dark:hover:text-violet-300"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-200 bg-violet-50 transition-all group-hover:-translate-y-1 group-hover:border-violet-400 dark:border-white/10 dark:bg-white/[0.04]">
              <ArrowUp size={15} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
