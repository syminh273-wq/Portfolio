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
    <aside className="sticky top-0 z-40 lg:fixed lg:inset-y-0 lg:left-0 lg:w-[260px] lg:flex lg:flex-col lg:justify-between px-4 py-3 lg:pl-6 lg:pr-8 lg:py-24 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md lg:bg-transparent border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800 transition-all">
      <div className="flex flex-col lg:gap-10">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3 lg:gap-4 lg:flex-col lg:items-start w-full">
            {/* Logo & Profile Box */}
            <div className="flex items-center gap-3 lg:gap-4 shrink-0 lg:w-full">
              <Link href="/" className="lg:hidden">
                <Image
                  src="/window.svg"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </Link>
              <div className="lg:w-full lg:p-6 lg:rounded-3xl lg:bg-zinc-50 lg:dark:bg-zinc-900/50 lg:border lg:border-zinc-200 lg:dark:border-zinc-800/50 transition-all hover:border-blue-500/30 hover:shadow-sm">
                <div className="flex items-center gap-3 lg:mb-5">
                   <div className="h-10 w-10 lg:h-14 lg:w-14 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800/50 shadow-sm">
                    <Image
                      src="/avatar.jpg"
                      alt="Sy Minh"
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="hidden lg:block">
                    <Image
                      src="/window.svg"
                      alt="Logo"
                      width={22}
                      height={22}
                      className="dark:invert opacity-40"
                    />
                  </div>
                </div>
                <div className="lg:mt-0">
                  <h1 className="text-lg lg:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    <Link href="/">Sy Minh</Link>
                  </h1>
                  <h2 className="text-[10px] lg:text-[15px] font-medium text-zinc-600 dark:text-zinc-400 lg:mt-1">
                    Full-Stack Engineer
                  </h2>
                  <p className="hidden lg:block text-[10px] text-zinc-500 dark:text-zinc-500 mt-3 font-bold uppercase tracking-[0.15em]">
                    📍 Ho Chi Minh City
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect icons on mobile - right side */}
          <div className="flex lg:hidden items-center gap-3">
             <a href="https://github.com/syminh273-wq" target="_blank" className="text-zinc-500 hover:text-blue-500 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
             </a>
             <a href="https://www.linkedin.com/in/minh-sy-40770140a/" target="_blank" className="text-zinc-500 hover:text-blue-500 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
             </a>
             <a href="mailto:syminh273@gmail.com" className="text-zinc-500 hover:text-blue-500 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" r="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
             </a>
          </div>
        </div>

        {/* Desktop-only Navigation */}
        <nav className="hidden lg:flex flex-col gap-1 text-sm font-medium mt-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center px-4 py-2.5 rounded-xl transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold"
                  : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-50"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-300 ${
                activeSection === item.href.substring(1) 
                  ? "bg-blue-500 scale-100" 
                  : "bg-zinc-300 dark:bg-zinc-700 scale-0 group-hover:scale-100"
              }`} />
              <span className="uppercase tracking-widest text-[11px]">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="hidden lg:block mt-12 lg:mt-0">
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
