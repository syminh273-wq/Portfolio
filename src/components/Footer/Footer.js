import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineMail, AiFillGithub, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useI18n } from "../../i18n/I18nContext";

const SOCIAL_LINKS = [
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=syminh273@gmail.com",
    icon: <AiOutlineMail />,
    label: "syminh273@gmail.com",
  },
  {
    href: "tel:+0783324748",
    icon: <AiOutlinePhone />,
    label: "+0783324748",
  },
  {
    href: "https://github.com/syminh273-wq",
    icon: <AiFillGithub />,
    label: "syminh273-wq",
  },
  {
    href: "https://linkedin.com/in/sminh/",
    icon: <FaLinkedinIn />,
    label: "linkedin.com/in/sminh",
  },
];

function Footer() {
  const { t, locale } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer-inner">
          <div className="site-footer-links">
            {SOCIAL_LINKS.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="site-footer-link"
                aria-label={item.label}
              >
                <span className="site-footer-link-icon">{item.icon}</span>
                <span className="site-footer-link-label">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="site-footer-divider" />

          <p className="site-footer-copy">
            © {year} <span className="purple">Ho Sy Minh</span>. Built with React & too much coffee. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
