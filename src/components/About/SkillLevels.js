import React from "react";
import { Col, Row } from "react-bootstrap";
import { useI18n } from "../../i18n/I18nContext";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiDjango,
  SiFastapi,
  SiSpringboot,
  SiDocker,
  SiTypescript,
  SiClickhouse,
  SiScylladb,
  SiApachecassandra,
  SiAerospike,
  SiCelery,
  SiTemporal,
  SiOnnx,
  SiAmazons3,
  SiKubernetes,
  SiAmazonaws,
  SiNextdotjs,
  SiSentry,
  SiAmazoncloudwatch,
} from "react-icons/si";
import { FaSearch, FaStream, FaRobot } from "react-icons/fa";

const techStack = [
  { Icon: SiTypescript, label: "TypeScript", level: "Intermediate" },
  { Icon: DiJavascript1, label: "JavaScript", level: "Intermediate" },
  { Icon: DiPython, label: "Python", level: "Advanced" },
  { Icon: DiJava, label: "Java", level: "Basic" },
  { Icon: SiDjango, label: "Django", level: "Advanced" },
  { Icon: SiFastapi, label: "FastAPI", level: "Basic" },
  { Icon: SiSpringboot, label: "Spring Boot", level: "Basic" },
  { Icon: DiReact, label: "React", level: "Advanced" },
  { Icon: SiNextdotjs, label: "Next.js", level: "Advanced" },
  { Icon: SiPostgresql, label: "PostgreSQL", level: "Intermediate" },
  { Icon: DiMongodb, label: "MongoDB", level: "Basic" },
  { Icon: SiRedis, label: "Redis", level: "Intermediate" },
  { Icon: DiGit, label: "Git", level: "Advanced" },
  { Icon: SiDocker, label: "Docker", level: "Basic" },
  { Icon: SiFirebase, label: "Firebase", level: "Basic" },
  { Icon: SiClickhouse, label: "ClickHouse", level: "Intermediate" },
  { Icon: SiScylladb, label: "ScyllaDB", level: "Basic" },
  { Icon: SiApachecassandra, label: "Cassandra", level: "Advanced" },
  { Icon: SiAerospike, label: "Aerospike", level: "Basic" },
  { Icon: FaSearch, label: "Typesense", level: "Basic" },
  { Icon: SiCelery, label: "Celery", level: "Basic" },
  { Icon: FaStream, label: "RQ (Redis Queue)", level: "Basic" },
  { Icon: SiTemporal, label: "Temporal.io", level: "Basic" },
  { Icon: SiOnnx, label: "ONNX Runtime", level: "Basic" },
  { Icon: FaRobot, label: "Ollama", level: "Basic" },
  { Icon: SiAmazonaws, label: "AWS", level: "Basic" },
  { Icon: SiAmazons3, label: "AWS S3", level: "Basic" },
  { Icon: SiKubernetes, label: "Kubernetes", level: "Basic" },
  { Icon: SiSentry, label: "Sentry", level: "Basic" },
  { Icon: SiAmazoncloudwatch, label: "CloudWatch", level: "Basic" },
];

const LEVEL_KEYS = {
  Advanced: "about.level.advanced",
  Intermediate: "about.level.intermediate",
  Basic: "about.level.basic",
};

const LEVELS = ["Advanced", "Intermediate", "Basic"];

const LEVEL_PERCENT = {
  Basic: 33,
  Intermediate: 66,
  Advanced: 100,
};

function SkillLevels() {
  const { t } = useI18n();
  return (
    <div className="skill-levels-section">
      <Row style={{ justifyContent: "center" }}>
        <Col xs={12} md={11} lg={10}>
          {LEVELS.map((level) => {
            const items = techStack.filter((s) => s.level === level);
            if (items.length === 0) return null;
            const levelLabel = t(LEVEL_KEYS[level]);
            return (
              <div
                key={level}
                className={`skill-level-group skill-level-group-${level.toLowerCase()}`}
              >
                <div className="skill-level-group-header">
                  <h3 className={`skill-level-title skill-level-title-${level.toLowerCase()}`}>
                    {levelLabel}
                  </h3>
                  <span className="skill-level-count">
                    {items.length} {t("about.skillsCount")}
                  </span>
                </div>
                <div className="skill-level-grid">
                  {items.map(({ Icon, label }) => (
                    <div className="skill-level-card" key={label}>
                      <div className="skill-level-card-icon">
                        <Icon />
                      </div>
                      <div className="skill-level-card-name">{label}</div>
                      <div className="skill-level-card-bar">
                        <div
                          className={`skill-bar-fill skill-bar-${level.toLowerCase()}`}
                          style={{ width: `${LEVEL_PERCENT[level]}%` }}
                        />
                      </div>
                      <div className={`skill-badge skill-badge-${level.toLowerCase()}`}>
                        {levelLabel}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default SkillLevels;
