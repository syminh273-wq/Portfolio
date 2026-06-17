import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { DayAndNightToggle } from "react-day-and-night-toggle";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineHeart,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import LanguageToggle from "./LanguageToggle/LanguageToggle";
import { useI18n } from "../i18n/I18nContext";

const NAV_ITEMS = [
  { id: "home",       icon: <AiOutlineHome />,                labelKey: "nav.home"       },
  { id: "experience", icon: <AiOutlineFundProjectionScreen />, labelKey: "nav.experience" },
  { id: "skills",     icon: <AiOutlineUser />,               labelKey: "nav.skills"     },
  { id: "resume",     icon: <CgFileDocument />,               labelKey: "nav.resume"     },
  { id: "interests",  icon: <AiOutlineHeart />,                labelKey: "nav.interests"  },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/syminh273-wq",                               icon: <AiFillGithub />,  label: "GitHub"   },
  { href: "https://linkedin.com/in/sminh/",                                 icon: <FaLinkedinIn />,  label: "LinkedIn" },
  { href: "https://mail.google.com/mail/?view=cm&fs=1&to=syminh273@gmail.com", icon: <AiOutlineMail />, label: "Email"    },
];

function NavBar({ isDarkMode, toggleTheme }) {
  const { t } = useI18n();
  const [expand, setExpand]        = useState(false);
  const [navColour, setNavColour]  = useState(false);
  const [activeSection, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
      const scrollY = window.scrollY + 120;
      const current = NAV_ITEMS.reduce((acc, { id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) return id;
        return acc;
      }, "home");
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setExpand(false);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={(e) => scrollTo(e, "home")}
          className="d-flex align-items-center"
        >
          <span className="navbar-logo-text">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-sy">Sy</span>
            <span className="logo-minh">Minh</span>
            <span className="logo-bracket"> /&gt;</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Nav links */}
          <Nav className="ms-auto">
            {NAV_ITEMS.map(({ id, icon, labelKey }) => (
              <Nav.Item key={id}>
                <Nav.Link
                  href={`#${id}`}
                  onClick={(e) => scrollTo(e, id)}
                  className={activeSection === id ? "nav-active" : ""}
                >
                  {React.cloneElement(icon, { style: { marginBottom: "2px" } })}{" "}
                  {t(labelKey)}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          {/* Social icons + fork button — plain flex, no Bootstrap nav list */}
          <div className="navbar-right-actions">
            <LanguageToggle />
            <span className="navbar-social-divider" />

            <span className="navbar-theme-toggle" aria-label={t("aria.toggleTheme")}>
              <DayAndNightToggle
                onChange={toggleTheme}
                checked={isDarkMode}
                animationInactive={false}
                size={24}
              />
            </span>

            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="navbar-social-icon"
              >
                {icon}
              </a>
            ))}

            <Button
              href="https://github.com/syminh273-wq"
              target="_blank"
              className="fork-btn-inner"
              style={{ marginLeft: "8px" }}
            >
              <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
              <AiFillStar style={{ fontSize: "1.1em" }} />
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
