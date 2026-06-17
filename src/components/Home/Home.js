import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-coding.svg";
import Home2 from "./Home2";
import Type from "./Type";
import { useI18n } from "../../i18n/I18nContext";

function Home() {
  const { t } = useI18n();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t("home.greeting")}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  {t("home.wave")}
                </span>
              </h1>

              <h1 className="heading-name">
                {t("home.name")}
                <strong className="main-name"> {t("home.nameStrong")}</strong>
              </h1>

              <div className="home-type-wrap">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="home-illustration-frame">
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
