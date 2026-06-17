import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <span className="purple">Full-stack Engineer</span> with 2+ years of hands-on experience building SaaS, desktop, and real-time systems.
              <br />
              <br />
              I am proficient in languages like 
              <i>
                <b className="purple"> Python, TypeScript, Java, and SQL. </b>
              </i>
              <br />
              <br />
              My expertise lies in building high-performance backend APIs using 
              <i>
                <b className="purple"> Django, FastAPI, and Spring Boot, </b>
              </i>
              as well as modern frontends with 
              <i>
                <b className="purple"> React and TypeScript. </b>
              </i>
              <br />
              <br />
              I have hands-on experience working with databases such as
              <i>
                <b className="purple"> PostgreSQL, MySQL, and Redis, </b>
              </i>
              and I am comfortable setting up CI/CD pipelines, containerization with
              <i>
                <b className="purple"> Docker, </b>
              </i>
              and deploying applications on cloud platforms.
              <br />
              <br />
              I have a strong interest in 
              <b className="purple"> AI-assisted development </b> and building 
              <i>
                <b className="purple"> scalable, maintainable systems </b>
              </i>
              that deliver real value to users. I am always eager to learn new
              technologies, improve my craft, and take on challenging projects
              that push the boundaries of what I can build.
            </p>
          </Col>
          <Col md={4} className="myAvtar mob-avatar-top">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
