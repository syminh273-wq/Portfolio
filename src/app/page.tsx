import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* About Section */}
      <section id="about" className="scroll-mt-24">
        <div className="flex items-center gap-4 mb-8 lg:hidden">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 dark:text-blue-300 shrink-0">
            About
          </h2>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800/50"></div>
        </div>
        <div className="space-y-6 text-zinc-600 dark:text-zinc-400">
          <p className="text-xl font-bold text-zinc-900 dark:text-zinc-50 uppercase tracking-tight">
            Building fast, reliable digital products.
          </p>
          <p>
            I&apos;m Sy Minh, a full-stack software engineer based in Ho Chi Minh City. I build scalable SaaS products, real-time systems, and AI-enabled platforms with a focus on reliability, maintainability, and product impact.
          </p>
          <p>
            I enjoy turning complex engineering problems into clean systems that are practical to operate and easy to evolve.
          </p>
          <div className="flex gap-4 pt-4">
             <Link href="#projects" className="font-bold text-zinc-900 dark:text-zinc-50 border-b-2 border-zinc-900 dark:border-zinc-50 pb-1">
               View projects
             </Link>
             <Link href="#contact" className="font-bold text-zinc-900 dark:text-zinc-50 border-b-2 border-zinc-900 dark:border-zinc-50 pb-1">
               Contact
             </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-24 group/list">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex flex-col">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
              Professional
            </h2>
            <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Experience</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 dark:from-zinc-800 to-transparent"></div>
        </div>
        
        <div className="space-y-12 relative before:absolute before:inset-y-0 before:left-[-1px] md:before:left-[13.5rem] before:w-[2px] before:bg-zinc-100 dark:before:bg-zinc-800/50">
          <div className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-100/50 lg:dark:group-hover:bg-zinc-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] lg:group-hover:drop-shadow-sm"></div>
            
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] md:left-[13.3rem] top-1.5 h-3 w-3 rounded-full border-2 border-white dark:border-zinc-950 bg-blue-500 z-20 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"></div>

            <header className="z-10 text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 pt-1">
              Oct 2024 — Dec 2025
            </header>
            
            <div className="z-10 md:col-span-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  FULL-STACK DEVELOPER
                </h3>
                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-bold text-sm">
                  <span>CHEK JSC</span>
                  <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                  <span className="text-xs font-medium">Enterprise Solutions</span>
                </div>
              </div>
              
              <ul className="mt-6 space-y-4 text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <li className="flex gap-3">
                  <span className="flex-none h-5 w-5 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-[10px] text-blue-500 font-bold border border-blue-100 dark:border-blue-500/20">1</span>
                  <span><strong>Big Data Analytics Engineering:</strong> Built large-scale data processing systems using <span className="text-zinc-900 dark:text-zinc-200 font-medium border-b border-blue-500/30">Apache Spark</span>, <span className="text-zinc-900 dark:text-zinc-200 font-medium border-b border-blue-500/30">Cassandra</span>, and <span className="text-zinc-900 dark:text-zinc-200 font-medium border-b border-blue-500/30">Clickhouse</span> for User Behavior Analysis Dashboards (CDP).</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-none h-5 w-5 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-[10px] text-blue-500 font-bold border border-blue-100 dark:border-blue-500/20">2</span>
                  <span><strong>System Performance Optimization:</strong> Enhanced stability via <strong>Multi-layer Cache</strong> (Redis & Aerospike), Cache Fallback mechanisms, and API optimization using Etag.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-none h-5 w-5 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-[10px] text-blue-500 font-bold border border-blue-100 dark:border-blue-500/20">3</span>
                  <span><strong>Scalable Architecture:</strong> Designed Multi-tenancy infrastructure, standardized code via Repository Pattern, and integrated (Haravan, Urbox, Firebase).</span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Python (Django)",
                  "Spark",
                  "Cassandra",
                  "Clickhouse",
                  "Redis",
                  "System Design",
                  "Temporal",
                  "Sentry"
                ].map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-lg bg-zinc-100 dark:bg-zinc-800/50 px-2.5 py-1 text-[10px] font-bold text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 group-hover:border-blue-500/20 group-hover:bg-blue-500/5 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24 group/list">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex flex-col">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
              Personal
            </h2>
            <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Projects</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 dark:from-zinc-800 to-transparent"></div>
        </div>
        <div className="space-y-6">
           {/* RentMaster */}
           <div className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/30 dark:bg-zinc-900/10 hover:border-blue-500/20 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/30">
             <div className="md:col-span-4 z-10">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                    <Link href="https://github.com/hsminh/DotnetRentMaster" target="_blank" className="inline-flex items-baseline font-medium leading-tight text-zinc-900 dark:text-zinc-50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group/link">
                      <span>RentMaster (Fullstack)</span>
                    </Link>
                  </h3>
                  <Link href="https://github.com/hsminh/DotnetRentMaster" target="_blank" className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-blue-500 transition-all border border-zinc-200 dark:border-zinc-700">
                    <span className="text-xs">↗</span>
                  </Link>
                </div>
                <p className="mt-2 text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  A property management and rental ecosystem supporting multiple user roles (Admin, Landlord, Tenant) with features ranging from real estate management to payments and notifications.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["ASP.NET Core", "Next.js", "PostgreSQL", "Real-time", "Payments"].map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-lg bg-blue-500/5 px-2.5 py-1 text-[10px] font-bold text-blue-600 dark:text-blue-400 border border-blue-500/10">
                      {tag}
                    </span>
                  ))}
                </div>
             </div>
           </div>

           {/* MyShop */}
           <div className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/30 dark:bg-zinc-900/10 hover:border-blue-500/20 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/30">
             <div className="md:col-span-4 z-10">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                    <Link href="https://github.com/hsminh/MyShop" target="_blank" className="inline-flex items-baseline font-medium leading-tight text-zinc-900 dark:text-zinc-50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group/link">
                      <span>MyShop (Java)</span>
                    </Link>
                  </h3>
                  <Link href="https://github.com/hsminh/MyShop" target="_blank" className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-blue-500 transition-all border border-zinc-200 dark:border-zinc-700">
                    <span className="text-xs">↗</span>
                  </Link>
                </div>
                <p className="mt-2 text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  A complete E-commerce platform focusing on online shopping flows including product management, shopping cart, ordering, and account security.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "MySQL", "Security"].map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-lg bg-blue-500/5 px-2.5 py-1 text-[10px] font-bold text-blue-600 dark:text-blue-400 border border-blue-500/10">
                      {tag}
                    </span>
                  ))}
                </div>
             </div>
           </div>

           {/* NextjsRentMaster */}
           <div className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/30 dark:bg-zinc-900/10 hover:border-blue-500/20 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/30">
             <div className="md:col-span-4 z-10">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                    <Link href="https://github.com/hsminh/NextjsRentMaster" target="_blank" className="inline-flex items-baseline font-medium leading-tight text-zinc-900 dark:text-zinc-50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group/link">
                      <span>NextjsRentMaster (Frontend)</span>
                    </Link>
                  </h3>
                  <Link href="https://github.com/hsminh/NextjsRentMaster" target="_blank" className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-blue-500 transition-all border border-zinc-200 dark:border-zinc-700">
                    <span className="text-xs">↗</span>
                  </Link>
                </div>
                <p className="mt-2 text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Modern interface for the RentMaster system, optimizing user experience in searching, viewing details, and managing rental information across multiple devices.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Next.js", "Tailwind CSS", "UX Design"].map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-lg bg-blue-500/5 px-2.5 py-1 text-[10px] font-bold text-blue-600 dark:text-blue-400 border border-blue-500/10">
                      {tag}
                    </span>
                  ))}
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex flex-col">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
              Technical
            </h2>
            <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Stack</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 dark:from-zinc-800 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Languages", skills: ["Python", "TypeScript", "JavaScript", "Java", "C/C++"] },
            { title: "Backend", skills: ["Django", "FastAPI", "Node.js", "REST APIs", "MQTT"] },
            { title: "Frontend", skills: ["Next.js", "React.js", "TailwindCSS", "MapLibre"] },
            { title: "Databases", skills: ["PostgreSQL", "MongoDB", "MySQL", "Cassandra"] },
            { title: "Platforms", skills: ["Temporal", "Redis", "Aerospike"] },
            { title: "Cloud & DevOps", skills: ["AWS S3", "Cloudflare R2", "Git", "Docker"] }
          ].map((category) => (
            <div key={category.title} className="p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/30">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="inline-flex items-center rounded-lg bg-zinc-50 dark:bg-zinc-800/50 px-2.5 py-1 text-[10px] font-bold text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="scroll-mt-24 pb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex flex-col">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
              Academic
            </h2>
            <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Education</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 dark:from-zinc-800 to-transparent"></div>
        </div>
        
        <div className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">STU - Saigon Technology University</h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">Bachelor of Computer Science</p>
            </div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              2021 — 2025
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
