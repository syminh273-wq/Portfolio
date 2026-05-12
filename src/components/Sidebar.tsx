"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const scrollHeight = document.body.offsetHeight;
      
      if (scrollPosition >= scrollHeight - 20) {
        setActiveSection("education");
        return;
      }

      const sections = navItems.map(item => document.getElementById(item.href.substring(1)));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= 400;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1 
      }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-[280px] lg:flex lg:flex-col lg:justify-between px-6 py-12 lg:py-24 bg-zinc-50 dark:bg-black border-r dark:border-zinc-800">
      <div className="space-y-8">
        <div>
          {/* Logo & Avatar */}
          <div className="mb-6 flex items-center gap-4">
            <Link href="/">
              <Image
                src="/window.svg"
                alt="Logo"
                width={32}
                height={32}
                className="dark:invert"
              />
            </Link>
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-zinc-200 dark:border-zinc-800">
              <Image
                src="/avatar.jpg"
                alt="Sy Minh"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            <Link href="/">Sy Minh</Link>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-xl">
            Full-Stack Engineer
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Ho Chi Minh City
          </p>
        </div>

        <nav className="flex flex-col gap-4 text-sm font-medium uppercase tracking-widest">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-all hover:text-zinc-900 dark:hover:text-zinc-50 ${
                activeSection === item.href.substring(1)
                  ? "text-zinc-900 dark:text-zinc-50 font-bold translate-x-2"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              <span className={`mr-2 transition-all ${activeSection === item.href.substring(1) ? "opacity-100" : "opacity-0"}`}>
                —
              </span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-12 lg:mt-0">
        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
          Connect
        </h3>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/syminh273-wq"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800/50 hover:bg-blue-500/10 transition-all border border-zinc-200 dark:border-zinc-700/50 hover:border-blue-500/30"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 transition-colors"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/minh-sy-40770140a/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800/50 hover:bg-blue-500/10 transition-all border border-zinc-200 dark:border-zinc-700/50 hover:border-blue-500/30"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 transition-colors"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="mailto:syminh273@gmail.com"
            className="group flex items-center justify-center h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800/50 hover:bg-blue-500/10 transition-all border border-zinc-200 dark:border-zinc-700/50 hover:border-blue-500/30"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 transition-colors"
            >
              <rect width="20" height="16" x="2" y="4" r="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
        <p className="mt-10 text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          © 2026 Sy Minh
        </p>
      </div>
    </aside>
  );
}
