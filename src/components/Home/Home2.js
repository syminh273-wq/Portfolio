import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DevAvatar from "./DevAvatar";
import { useI18n } from "../../i18n/I18nContext";

function Home2() {
  const { t } = useI18n();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("home2.heading1")} <span className="purple"> {t("home2.heading2")} </span> {t("home2.heading3")}
            </h1>
            <p className="home-about-body">
              {t("home2.p1")} <span className="purple">{t("home2.p1Role")}</span> {t("home2.p1Tail")}
              <br />
              <br />
              {t("home2.p2Lead")}
              <i>
                <b className="purple"> {t("home2.p2Lang")} </b>
              </i>
              <br />
              <br />
              {t("home2.p3Lead")}
              <i>
                <b className="purple"> {t("home2.p3Backend")} </b>
              </i>
              {t("home2.p3Tail")}
              <i>
                <b className="purple"> {t("home2.p3Frontend")} </b>
              </i>
              <br />
              <br />
              {t("home2.p4Lead")}
              <i>
                <b className="purple"> {t("home2.p4Db")} </b>
              </i>
              {t("home2.p4Tail")}
              <i>
                <b className="purple"> {t("home2.p4Docker")} </b>
              </i>
              {t("home2.p4End")}
              <br />
              <br />
              {t("home2.p5Lead")}
              <b className="purple"> {t("home2.p5Ai")} </b> {t("home2.p5Mid")}
              <i>
                <b className="purple"> {t("home2.p5Scale")} </b>
              </i>
              {t("home2.p5Tail")}
            </p>
          </Col>
          <Col md={4} className="myAvtar mob-avatar-top">
            <DevAvatar />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
