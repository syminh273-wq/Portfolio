import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
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
} from "react-icons/si";
import { FaSearch, FaStream, FaRobot } from "react-icons/fa";

const techStack = [
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: DiJavascript1, label: "JavaScript" },
  { Icon: DiPython, label: "Python" },
  { Icon: DiJava, label: "Java" },
  { Icon: SiDjango, label: "Django" },
  { Icon: SiFastapi, label: "FastAPI" },
  { Icon: SiSpringboot, label: "Spring Boot" },
  { Icon: DiReact, label: "React" },
  { Icon: DiNodejs, label: "Node.js" },
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: DiMongodb, label: "MongoDB" },
  { Icon: SiRedis, label: "Redis" },
  { Icon: DiGit, label: "Git" },
  { Icon: SiDocker, label: "Docker" },
  { Icon: SiFirebase, label: "Firebase" },
  { Icon: SiClickhouse, label: "ClickHouse" },
  { Icon: SiScylladb, label: "ScyllaDB" },
  { Icon: SiApachecassandra, label: "Cassandra" },
  { Icon: SiAerospike, label: "Aerospike" },
  { Icon: FaSearch, label: "Typesense" },
  { Icon: SiCelery, label: "Celery" },
  { Icon: FaStream, label: "RQ (Redis Queue)" },
  { Icon: SiTemporal, label: "Temporal.io" },
  { Icon: SiOnnx, label: "ONNX Runtime" },
  { Icon: FaRobot, label: "Ollama" },
  { Icon: SiAmazons3, label: "AWS Storage" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map(({ Icon, label }) => (
        <Col xs={4} md={2} className="tech-icons" key={label}>
          <span className="tech-tooltip">{label}</span>
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
