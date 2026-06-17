import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Ho Sy Minh</span>{" "}
            from <span className="purple">Vietnam</span>.
            <br />
            I'm currently working as a{" "}
            <span className="purple">Fullstack Developer</span> at{" "}
            <span className="purple">CHEK JSC</span>, where I design and
            build end-to-end web applications, from database architecture
            and RESTful APIs to responsive user interfaces.
            <br />
            I hold a degree in{" "}
            <span className="purple">Information Technology</span> from{" "}
            <span className="purple">Saigon Technology University (STU)</span>,
            where I developed a solid foundation in software engineering
            principles, data structures, and system design.
            <br />
            <br />
            Throughout my career, I have had the opportunity to work on
            diverse projects ranging from SaaS platforms and real-time
            systems to enterprise desktop applications. I enjoy tackling
            complex technical challenges and turning ideas into reliable,
            scalable products.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring AI Technologies & applying them to real-world products 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Side Projects to experiment with new ideas 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Frameworks and keeping up with industry trends 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to team growth through code reviews and knowledge sharing 🤝
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading tech blogs and open-source exploration 🌐
            </li>
          </ul>

          <p style={{ color: "rgb(126 155 172)" }}>
            "Build with passion, scale with precision!"{" "}
          </p>
          <footer className="blockquote-footer">Minh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
