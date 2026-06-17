import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectDetail from "./ProjectDetail";
import chatify from "../../Assets/Projects/chatify.png";
import blog from "../../Assets/Projects/blog.png";
import { MdWork } from "react-icons/md";
import { FaCode, FaTasks, FaChevronDown, FaChevronUp } from "react-icons/fa";

const experiences = [
  {
    company: "CHEK JSC",
    position: "Fullstack Developer",
    period: "Oct 2024 – Present",
    summary:
      "Built and maintained features for a production-grade multi-tenant SaaS platform covering CRM, CDP, campaigns, loyalty, gamification, and task-management workflows.",
    techStack: [
      "Django", "FastAPI", "Python", "TypeScript", "React", "Tauri",
      "PostgreSQL", "Redis", "ClickHouse", "ScyllaDB", "Aerospike",
      "Amazon S3", "Cloudflare R2", "Firebase", "Typesense",
      "ONNX Runtime", "LanceDB", "Ollama", "Temporal", "Django Channels",
    ],
    responsibilities: [
      "Built features for a multi-tenant SaaS platform covering workspace, CRM, CDP, campaigns, loyalty, gamification, and task-management workflows.",
      "Implemented Napas VietQR QR-code generation for bank transfers and merchant payment flows across tenant workflows.",
      "Implemented ClickHouse-backed leaderboard analytics for loyalty and gamification workflows, supporting point accumulation, ranking, and user performance tracking.",
      "Developed a cloud-backed drive service using Amazon S3 and Cloudflare R2, supporting file uploads, metadata tracking, access control, and delivery.",
      "Delivered a local RAG-based AI assistant for the Tauri desktop app using ONNX Runtime, LanceDB, and Ollama for embeddings, vector search, and contextual responses.",
      "Integrated Aerospike as a high-performance key-value store for real-time session and caching workloads across tenant services.",
      "Orchestrated long-running background workflows using Temporal, covering onboarding, notification dispatch, and data sync pipelines.",
      "Implemented full-text search across platform entities using Typesense with real-time indexing and multi-tenant filtering.",
      "Built real-time features using WebSocket (Django Channels) for live data streaming and event-driven communication.",
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
  return (
    <Container fluid className="project-section">
      <Container>
        {/* Experience */}
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "#8892b0", textAlign: "center", marginBottom: "40px" }}>
          Professional journey and work history
        </p>

        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} />
        ))}

        {/* Divider */}
        <div className="section-divider" />

        {/* Projects */}
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "#8892b0", textAlign: "center", marginBottom: "10px" }}>
          Here are a few projects I've worked on recently.
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
