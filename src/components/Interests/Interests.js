import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  MdMusicNote,
  MdPool,
  MdSportsEsports,
  MdTravelExplore,
} from "react-icons/md";
import { GiSoccerBall } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { useI18n } from "../../i18n/I18nContext";
import "./Interests.css";

const INTERESTS = [
  {
    key: "friends",
    icon: <FaUserFriends />,
    color: "#f472b6",
  },
  {
    key: "music",
    icon: <MdMusicNote />,
    color: "#a78bfa",
  },
  {
    key: "football",
    icon: <GiSoccerBall />,
    color: "#5b8def",
  },
  {
    key: "swim",
    icon: <MdPool />,
    color: "#86efac",
  },
  {
    key: "gaming",
    icon: <MdSportsEsports />,
    color: "#7dd3fc",
  },
  {
    key: "travel",
    icon: <MdTravelExplore />,
    color: "#fcd34d",
  },
];

function Interests() {
  const { t } = useI18n();
  return (
    <Container fluid className="interests-section">
      <Container>
        <Row className="interests-closing-row">
          <Col md={10} lg={8} className="interests-closing-col mx-auto">
            <h2 className="interests-closing-title">
              {t("interests.closingTitle1")}{" "}
              <span className="purple">{t("interests.closingTitle2")}</span> {t("interests.closingTitle3")}
            </h2>
            <p className="interests-closing-body">
              {t("interests.p1a")}{" "}
              <b className="purple">{t("interests.p1b")}</b> {t("interests.p1c")}{" "}
              <b className="purple">{t("interests.p1d")}</b>
              {t("interests.p1e")}
            </p>
          </Col>
        </Row>

        <Row className="interests-grid">
          {INTERESTS.map((item, idx) => (
            <Col key={idx} md={6} lg={4} className="interest-col">
              <div
                className="interest-card"
                style={{ "--accent": item.color }}
              >
                <div className="interest-icon-wrap">
                  <div className="interest-icon">{item.icon}</div>
                </div>
                <h3 className="interest-title">{t(`interests.card.${item.key}.title`)}</h3>
                <p className="interest-desc">{t(`interests.card.${item.key}.desc`)}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Interests;
