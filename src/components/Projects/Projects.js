import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ProjectDetail from "./ProjectDetail";
import chatify from "../../Assets/Projects/chatify.png";
import blog from "../../Assets/Projects/blog.png";
import { MdWork } from "react-icons/md";
import { FaCode, FaTasks, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useI18n } from "../../i18n/I18nContext";

const experiences = [
  {
    company: "CHEK JSC",
    position: "Fullstack Developer",
    period: "Jun 2024 – Present",
    summary:
      "Built and maintained backend/infra features for a production-grade multi-tenant SaaS platform (landlord/patron/tenant architecture) covering CRM, CDP, campaigns, loyalty, gamification, and task-management workflows, backed by a polyglot persistence layer of Cassandra, ClickHouse, Aerospike, PostgreSQL, and Redis.",
    techStack: [
      "Django", "FastAPI", "Python", "TypeScript", "React", "Tauri",
      "PostgreSQL", "Redis", "ClickHouse", "ScyllaDB", "Cassandra", "Aerospike",
      "Celery", "RQ", "Temporal", "AWS Storage", "Cloudflare R2",
      "Firebase Admin", "Typesense", "ONNX Runtime", "LanceDB", "Ollama",
      "Django Channels", "Napas", "Urbox", "Haravan",
    ],
    responsibilities: [
      "Built features for a multi-tenant SaaS platform (landlord/patron/tenant data-isolation model) covering workspace, CRM, CDP, campaigns, loyalty, gamification, and task-management workflows.",
      "Implemented Napas VietQR QR-code generation for bank transfers and merchant payment flows across tenant workflows.",
      "Implemented ClickHouse-backed leaderboard analytics for loyalty and gamification workflows, supporting point accumulation, ranking, and user performance tracking.",
      "Built ledger and wallet transaction serializers on ScyllaDB/Cassandra, and implemented a custom Cassandra-backed Celery result backend.",
      "Designed a custom Aerospike cache backend (core/cache/aerospike/) as a high-performance key-value store for real-time session and caching workloads.",
      "Ran Celery with a Redis broker alongside a secondary django-rq/RQ task queue to separate latency-sensitive jobs from long-running background work.",
      "Orchestrated long-running workflows using Temporal.io, including voucher redemption, discount code sync, and data processing pipelines.",
      "Developed a cloud-backed drive service using AWS Storage (S3) and Cloudflare R2, supporting file uploads, metadata tracking, access control, and delivery.",
      "Delivered a local RAG-based AI assistant for the Tauri desktop app using ONNX Runtime, LanceDB, and Ollama for embeddings, vector search, and contextual responses.",
      "Implemented full-text search across platform entities using Typesense with real-time indexing and multi-tenant filtering.",
      "Built real-time features using WebSocket (Django Channels) for live data streaming and event-driven communication.",
      "Integrated third-party fintech and e-commerce platforms for the Vietnam market: Napas MMC (payment gateway), Urbox (gift/voucher platform), Haravan (e-commerce order sync), and Firebase Admin for push notifications.",
      "Built a Jira-style project/work-management module (CollabSuite) from the ground up — work-item types, custom fields, project teams, and sprint iterations.",
      "Implemented the CRM Lead-to-Deal pipeline: lead capture, customizable sales pipeline stages, and Deal/Account entities.",
      "Built a standalone Gamification API (points, campaigns, prize draws) decoupled from the core Rewards service, serving both business and consumer clients.",
      "Implemented multi-tenant platform infrastructure: cluster-cell based tenant routing/initialization and per-organization settings & branding cache.",
      "Built the E-Sign module end-to-end: signature field placement on documents, PDF signature metadata embedding, and document/signer assignment.",
      "Built the Commerce voucher engine, including voucher creation and category/criteria-based eligibility rules.",
      "Implemented consumer onboarding workflows and enforced integer-precision handling for money/point amounts across the Accounting ledger.",
    ],
  },
];

function ExperienceCard({ exp }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="exp-card">
      {/* Header */}
      <div className="exp-card-header">
        <div className="exp-card-header-left">
          <div className="exp-icon-wrap">
            <MdWork />
          </div>
          <div>
            <h3 className="exp-company">{exp.company}</h3>
            <p className="exp-position">{exp.position}</p>
          </div>
        </div>
        <span className="exp-period">{exp.period}</span>
      </div>

      {/* Summary */}
      <p className="exp-summary">{exp.summary}</p>

      {/* Tech Stack */}
      <div className="exp-section">
        <div className="exp-section-label">
          <FaCode className="exp-section-icon" />
          <span>Tech Stack</span>
        </div>
        <div className="project-tech-badges">
          {exp.techStack.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="exp-section">
        <button
          className="exp-section-label exp-toggle"
          onClick={() => setExpanded(!expanded)}
        >
          <FaTasks className="exp-section-icon" />
          <span>Responsibilities</span>
          {expanded ? <FaChevronUp className="exp-chevron" /> : <FaChevronDown className="exp-chevron" />}
        </button>
        {expanded && (
          <ul className="exp-responsibility-list">
            {exp.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const { t, locale } = useI18n();
  return (
    <Container fluid className="project-section">
      <Container>
        {/* Experience */}
        <h1 className="project-heading">
          {t("projects.experience")} <strong className="purple">{t("projects.experienceTail")}</strong>
        </h1>
        <p style={{ color: "#8892b0", textAlign: "center", marginBottom: "40px" }}>
          {locale === "vi" ? "Những cột mốc trong sự nghiệp" : "Highlights along my career journey"}
        </p>

        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} />
        ))}

        {/* Divider */}
        <div className="section-divider" />

        {/* Projects */}
        <h1 className="project-heading">
          {t("projects.recent")} <strong className="purple">{t("projects.projects")}</strong>
        </h1>
        <p style={{ color: "#8892b0", textAlign: "center", marginBottom: "10px" }}>
          {locale === "vi" ? "Một vài dự án tôi đã làm gần đây." : "Here are a few projects I've worked on recently."}
        </p>

        <div className="project-block">
          <ProjectDetail
            imgPath={chatify}
            title="LMS System"
            summary="A Learning Management System with REST API covering classroom management, student enrollment, assignment delivery, real-time chat, face recognition proctoring, AI-powered RAG, speech-to-text, and MoMo payment integration."
            ghLink="https://github.com/syminh273-wq/LMS_SYSTEM"
            techStack={[
              "Django 4.x", "Django REST Framework", "Apache Cassandra",
              "Django Channels", "Daphne", "Next.js 16", "React 19",
              "TypeScript", "Tailwind CSS 4", "Shadcn UI", "Redux Toolkit",
              "TipTap", "Recharts", "JWT", "Cloudflare R2", "Firebase",
              "InsightFace", "FastAPI", "LangChain", "LanceDB", "ChromaDB",
              "Typesense", "faster-whisper", "Edge TTS", "Google OAuth",
              "MoMo Payment", "Turbo", "Poetry",
            ]}
            features={[
              "Classroom creation & management with teacher/student roles",
              "Real-time chat via Django Channels + Daphne (WebSocket)",
              "Face recognition exam proctoring (InsightFace microservice)",
              "Push notifications via Firebase (FCM + Realtime Database)",
              "File upload & storage via Cloudflare R2",
              "AI RAG pipeline with LangChain + LanceDB + ChromaDB",
              "Full-text search via Typesense",
              "Speech-to-text (faster-whisper) & text-to-speech (Edge TTS)",
              "Rich text editor with TipTap",
              "Payment integration via MoMo",
              "Google OAuth authentication",
              "WebRTC signaling for video calls",
            ]}
            architecture="Feature-based + Repository/Service pattern: ViewSet → Service → Repository → Cassandra. Face recognition runs as a separate FastAPI microservice. Frontend is a Turbo monorepo with 2 Next.js 16 apps sharing a common packages/shared layer."
          />
        </div>

        <div className="project-block">
          <ProjectDetail
            imgPath={blog}
            title="RentMaster"
            summary="A web platform to manage and search room and apartment listings. Users can browse, filter, and view detailed property information with a clean, responsive interface."
            techStack={[
              ".NET Core", "ASP.NET Web API", "Next.js", "React",
              "TypeScript", "RESTful API", "Entity Framework", "SQL Server",
            ]}
            features={[
              "Property listing management (create, edit, delete)",
              "Full-text search across listings",
              "Filter by price, location, area, and property type",
              "Detailed property view with images and contact info",
              "User authentication & authorization",
              "Responsive design for mobile and desktop",
            ]}
            architecture="Clean separation between backend (.NET Core RESTful API) and frontend (Next.js with SSR/SSG for SEO-friendly listing pages, search, filtering, and detail views)."
          />
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
