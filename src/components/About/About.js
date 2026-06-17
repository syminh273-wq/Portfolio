import React from "react";
import { Container } from "react-bootstrap";
import Toolstack from "./Toolstack";
import SkillLevels from "./SkillLevels";
import { useI18n } from "../../i18n/I18nContext";

function About() {
  const { t } = useI18n();
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">{t("about.tools")}</strong> {t("about.toolsTail")}
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          {t("about.skills")} <strong className="purple">{t("about.skillsTail")}</strong>
        </h1>
        <SkillLevels />
      </Container>
    </Container>
  );
}

export default About;
