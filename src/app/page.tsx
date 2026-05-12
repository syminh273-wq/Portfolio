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
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 dark:text-blue-300 shrink-0">
            Experience
          </h2>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800/50"></div>
        </div>
        <div className="space-y-12">
          <div className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Oct 2024 — Dec 2025
            </header>
            <div className="z-10 md:col-span-3">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                FULL-STACK DEVELOPER
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium">CHEK JSC</p>
              
              <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-blue-500 font-bold">▹</span>
                  <span><strong>Big Data Analytics Engineering:</strong> Built large-scale data processing systems using <span className="text-zinc-900 dark:text-zinc-200 font-medium underline decoration-blue-500/30">Apache Spark</span>, <span className="text-zinc-900 dark:text-zinc-200 font-medium underline decoration-blue-500/30">Cassandra</span>, and <span className="text-zinc-900 dark:text-zinc-200 font-medium underline decoration-blue-500/30">Clickhouse</span> for User Behavior Analysis Dashboards (CDP).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500 font-bold">▹</span>
                  <span><strong>System Performance Optimization:</strong> Enhanced stability via <strong>Multi-layer Cache</strong> (Redis & Aerospike), Cache Fallback mechanisms, and API optimization using Etag.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500 font-bold">▹</span>
                  <span><strong>Scalable Architecture:</strong> Designed Multi-tenancy infrastructure, standardized code via Repository Pattern, and integrated (Haravan, Urbox, Firebase).</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
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
                  <span key={tag} className="inline-flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 border border-blue-500/20">
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
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 dark:text-blue-300 shrink-0">
            Projects
          </h2>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800/50"></div>
        </div>
        <div className="space-y-16">
           {/* RentMaster */}
           <div className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 pb-12 border-b border-zinc-200 dark:border-zinc-800/50 last:border-0 last:pb-0">
             <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:group-hover:drop-shadow-lg"></div>
             <div className="md:col-span-4 z-10">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  <Link href="https://github.com/hsminh/DotnetRentMaster" target="_blank" className="inline-flex items-baseline font-medium leading-tight text-zinc-900 dark:text-zinc-50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group/link">
                    <span className="bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover/link:from-blue-500/10 group-hover/link:to-blue-500/5 px-1 -mx-1 rounded transition-all">
                      RentMaster (Fullstack) <span className="inline-block transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1">↗</span>
                    </span>
                  </Link>
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Hệ sinh thái quản lý và tìm kiếm phòng trọ, hỗ trợ nhiều đối người dùng (Admin, Chủ trọ, Người thuê) với các tính năng từ quản lý bất động sản đến thanh toán và thông báo.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["ASP.NET Core", "Next.js", "PostgreSQL", "Real-time Notifications", "Payments"].map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
             </div>
           </div>

           {/* MyShop */}
           <div className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 pb-12 border-b border-zinc-200 dark:border-zinc-800/50 last:border-0 last:pb-0">
             <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:group-hover:drop-shadow-lg"></div>
             <div className="md:col-span-4 z-10">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  <Link href="https://github.com/hsminh/MyShop" target="_blank" className="inline-flex items-baseline font-medium leading-tight text-zinc-900 dark:text-zinc-50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group/link">
                    <span className="bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover/link:from-blue-500/10 group-hover/link:to-blue-500/5 px-1 -mx-1 rounded transition-all">
                      MyShop (Java) <span className="inline-block transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1">↗</span>
                    </span>
                  </Link>
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Nền tảng thương mại điện tử (E-commerce) hoàn chỉnh, tập trung vào luồng mua sắm trực tuyến gồm quản lý sản phẩm, giỏ hàng, đặt hàng và bảo mật tài khoản.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "MySQL", "Authentication", "Security"].map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
             </div>
           </div>

           {/* NextjsRentMaster */}
           <div className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 pb-12 border-b border-zinc-200 dark:border-zinc-800/50 last:border-0 last:pb-0">
             <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:group-hover:drop-shadow-lg"></div>
             <div className="md:col-span-4 z-10">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  <Link href="https://github.com/hsminh/NextjsRentMaster" target="_blank" className="inline-flex items-baseline font-medium leading-tight text-zinc-900 dark:text-zinc-50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group/link">
                    <span className="bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover/link:from-blue-500/10 group-hover/link:to-blue-500/5 px-1 -mx-1 rounded transition-all">
                      NextjsRentMaster (Frontend) <span className="inline-block transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1">↗</span>
                    </span>
                  </Link>
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Giao diện hiện đại cho hệ thống RentMaster, tối ưu trải nghiệm người dùng trong việc tìm kiếm, xem chi tiết và quản lý thông tin thuê phòng trên đa thiết bị.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Next.js", "Tailwind CSS", "Responsive Design", "User Experience"].map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 border border-blue-500/20">
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
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 dark:text-blue-300 shrink-0">
            Skills
          </h2>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800/50"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-zinc-900 dark:text-zinc-50">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "TypeScript", "JavaScript", "Java", "C/C++"].map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 border border-blue-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-zinc-900 dark:text-zinc-50">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Django", "FastAPI", "Node.js", "Express.js", "RESTful APIs", "WebSockets", "MQTT"].map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 border border-blue-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-zinc-900 dark:text-zinc-50">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React.js", "Astro", "TailwindCSS", "MapLibre", "HTML5", "CSS3"].map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 border border-blue-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-zinc-900 dark:text-zinc-50">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "MongoDB", "MySQL", "Cassandra", "SQL Server"].map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 border border-blue-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-zinc-900 dark:text-zinc-50">Platforms & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Temporal"].map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 border border-blue-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-zinc-900 dark:text-zinc-50">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {["AWS S3", "Cloudflare R2", "Git"].map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 border border-blue-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="scroll-mt-24 pb-24">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 dark:text-blue-300 shrink-0">
            Education
          </h2>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800/50"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <header className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            2021 — 2025
          </header>
          <div className="md:col-span-3">
             <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
               SAIGON TECHNOLOGY UNIVERSITY(STU)
             </h3>
             <p className="text-zinc-600 dark:text-zinc-400 mt-2">Bachelor of Computer Science</p>
          </div>
        </div>
      </section>
    </div>
  );
}
