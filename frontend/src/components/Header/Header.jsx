import { useRef, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";

const navLinks = [
  { title: "Home", path: "/home" },
  { title: "About", path: "/about" },
  { title: "Tours", path: "/tours" },
];

const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  });

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-cente justify-content-between">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5 ">
                {navLinks.map((navLink, index) => (
                  <li key={index} className="nav__item">
                    <NavLink
                      to={navLink.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }>
                      {navLink.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>

              <span className="mobile__menu">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 16.933 16.933"
                    id="menu">
                    <path d="M12.271 1.323H1.984c-1.1-.042-1.1 1.63 0 1.588H12.23c1.08.042 1.122-1.588.042-1.588zM1.984 7.673c-1.058 0-1.058 1.587 0 1.587h5.8c1.08 0 1.08-1.587 0-1.587zm0 6.35c-1.058 0-1.058 1.587 0 1.587h12.997c1.058 0 1.058-1.587 0-1.587z"></path>
                  </svg>
                </i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
