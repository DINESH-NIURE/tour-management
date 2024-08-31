import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
  { title: "Home", path: "/home" },
  { title: "About", path: "/about" },
  { title: "Tours", path: "/tours" },
];

const quick__links2 = [
  { title: "Gallery", path: "/Gallery" },
  { title: "Login", path: "/login" },
  { title: "Regiester", path: "/regiester" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="logo" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultricies, libero non mattis.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    {" "}
                    <i className="ri-youtube-line"></i>{" "}
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    {" "}
                    <i className="ri-github-fill"></i>{" "}
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    {" "}
                    <i className="ri-facebook-circle-line"></i>{" "}
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    {" "}
                    <i className=" ri-instagram-line"></i>{" "}
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((link, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={link.path}>{link.title}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            {" "}
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((link, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={link.path}>{link.title}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem
                GroupItem
                className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">Baglung, Nepal</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">starkdinesh2@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-fill"></i>
                  </span>
                  Phone :
                </h6>
                <p className="mb-0">+977 986-3040097</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12 " className="text-center pt-5">
          <hr />
            <p className="copyright">
              copyright {year}, design and devlop by Dinesh Niure. All rights
              reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
