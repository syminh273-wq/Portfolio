import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaLayerGroup, FaCode, FaCogs } from "react-icons/fa";

function ProjectDetail(props) {
  return (
    <div className="project-detail-wrapper">
      <Row>
        <Col md={4} className="project-detail-left">
          <div className="project-detail-image">
            <img src={props.imgPath} alt={props.title} />
          </div>
          <h2 className="project-detail-title">{props.title}</h2>
          <p className="project-detail-summary">{props.summary}</p>
          <div className="project-detail-links">
            {props.ghLink && (
              <a href={props.ghLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <BsGithub /> &nbsp; GitHub
              </a>
            )}
            {props.demoLink && (
              <a href={props.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginLeft: "10px" }}>
                <CgWebsite /> &nbsp; Demo
              </a>
            )}
          </div>
        </Col>

        <Col md={8} className="project-detail-right">
          <div className="project-detail-section">
            <div className="project-detail-section-header">
              <FaCode className="project-detail-icon" />
              <h4>Tech Stack</h4>
            </div>
            <div className="project-tech-badges">
              {props.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-detail-section">
            <div className="project-detail-section-header">
              <FaLayerGroup className="project-detail-icon" />
              <h4>Key Features</h4>
            </div>
            <ul className="project-feature-list">
              {props.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {props.architecture && (
            <div className="project-detail-section">
              <div className="project-detail-section-header">
                <FaCogs className="project-detail-icon" />
                <h4>Architecture</h4>
              </div>
              <p className="project-architecture">{props.architecture}</p>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default ProjectDetail;
