import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/resume.pdf";
import { AiOutlineDownload, AiOutlineMail, AiOutlinePhone, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const scale = width > 786 ? 1.7 : 0.6;

  const pageBtnStyle = (active, disabled) => ({
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: "2px solid #5b8def",
    backgroundColor: active ? "#5b8def" : "transparent",
    color: disabled ? "#555" : active ? "#fff" : "#5b8def",
    cursor: disabled ? "default" : "pointer",
    fontSize: "0.95em",
    fontWeight: "600",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 5px",
    transition: "all 0.2s ease",
    opacity: disabled ? 0.4 : 1,
  });

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="cv-quick-links-row">
          <div className="cv-quick-links">
            <a href="https://linkedin.com/in/sminh/" target="_blank" rel="noopener noreferrer" className="cv-quick-link">
              <FaLinkedinIn /> LinkedIn
            </a>
            <a href="https://github.com/syminh273-wq" target="_blank" rel="noopener noreferrer" className="cv-quick-link">
              <AiFillGithub /> GitHub
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=syminh273@gmail.com" target="_blank" rel="noopener noreferrer" className="cv-quick-link">
              <AiOutlineMail /> syminh273@gmail.com
            </a>
          </div>
        </Row>

        <Row className="resume" style={{
          justifyContent: "center",
          position: "relative",
          border: "2px solid rgba(91, 141, 239, 0.5)",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          margin: "20px auto",
          width: "fit-content",
          maxWidth: "100%"
        }}>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex flex-column align-items-center"
            externalLinkTarget="_blank"
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderAnnotationLayer={true}
              renderTextLayer={false}
            />
          </Document>
        </Row>

        {numPages && numPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
            <button
              style={pageBtnStyle(false, pageNumber <= 1)}
              onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}
            >
              ‹
            </button>
            {Array.from(new Array(numPages), (_, i) => (
              <button
                key={i + 1}
                style={pageBtnStyle(pageNumber === i + 1, false)}
                onClick={() => setPageNumber(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              style={pageBtnStyle(false, pageNumber >= numPages)}
              onClick={() => pageNumber < numPages && setPageNumber(pageNumber + 1)}
            >
              ›
            </button>
          </div>
        )}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", marginTop: "60px", marginBottom: "20px" }}>
          <Col md={8}>
            <h2 className="project-heading" style={{ textAlign: "center", marginBottom: "30px" }}>
              Get In <strong className="purple">Touch</strong>
            </h2>
            <div className="contact-grid">
              {[
                {
                  icon: <AiOutlineMail style={{ fontSize: "1.4em" }} />,
                  label: "Email",
                  value: "syminh273@gmail.com",
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=syminh273@gmail.com",
                },
                {
                  icon: <AiOutlinePhone style={{ fontSize: "1.4em" }} />,
                  label: "Phone",
                  value: "+0783324748",
                  href: "tel:+0783324748",
                },
                {
                  icon: <AiFillGithub style={{ fontSize: "1.4em" }} />,
                  label: "GitHub",
                  value: "syminh273-wq",
                  href: "https://github.com/syminh273-wq",
                },
                {
                  icon: <FaLinkedinIn style={{ fontSize: "1.3em" }} />,
                  label: "LinkedIn",
                  value: "linkedin.com/in/sminh",
                  href: "https://linkedin.com/in/sminh/",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="contact-card-link"
                >
                  <div className="contact-card">
                    <div className="contact-card-icon">{item.icon}</div>
                    <div>
                      <p className="contact-card-label">{item.label}</p>
                      <p className="contact-card-value">{item.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
