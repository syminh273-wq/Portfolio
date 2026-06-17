import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiJetbrains,
  SiRider,
  SiIntellijidea,
  SiWebstorm,
  SiPycharm,
} from "react-icons/si";

const toolStack = [
  { Icon: SiMacos, label: "macOS" },
  { Icon: SiJetbrains, label: "JetBrains" },
  { Icon: SiRider, label: "Rider" },
  { Icon: SiIntellijidea, label: "IntelliJ IDEA" },
  { Icon: SiWebstorm, label: "WebStorm" },
  { Icon: SiPycharm, label: "PyCharm" },
  { Icon: SiVisualstudiocode, label: "VS Code" },
  { Icon: SiPostman, label: "Postman" },
  { Icon: SiSlack, label: "Slack" },
  { Icon: SiVercel, label: "Vercel" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      {toolStack.map(({ Icon, label }) => (
        <Col xs={4} md={2} className="tech-icons" key={label}>
          <span className="tech-tooltip">{label}</span>
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
