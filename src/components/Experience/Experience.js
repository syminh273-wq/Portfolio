import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  const experiences = [
    {
      company: "Company Name 1",
      position: "Software Engineer",
      period: "2023 - Present",
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with cross-functional teams to deliver projects on time",
        "Implemented new features and improved application performance",
      ],
    },
    {
      company: "Company Name 2",
      position: "Junior Developer",
      period: "2021 - 2023",
      description: [
        "Built responsive user interfaces with modern JavaScript frameworks",
        "Participated in code reviews and maintained code quality standards",
        "Worked with databases and RESTful APIs",
      ],
    },
    {
      company: "Company Name 3",
      position: "Intern",
      period: "2020 - 2021",
      description: [
        "Assisted in developing internal tools and applications",
        "Learned industry best practices and development workflows",
        "Contributed to documentation and testing efforts",
      ],
    },
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container className="experience-container">
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "50px" }}>
          Professional journey and work history
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-company">{exp.company}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-position">{exp.position}</h4>
                <ul className="timeline-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
