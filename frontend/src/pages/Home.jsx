import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServicesList from "../services/ServicesList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import experienceImg from "../assets/images/experience.png";
import MasonryImageGallery from "../components/image-gallery/MasonryImageGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="hero" className="hero__img" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight"> memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus accusantium ullam sed fugit non. Ipsam natus
                  delectus in molestias provident doloremque ducimus earum magni
                  dolorem labore vel nulla incidunt fugit esse, consectetur
                  repudiandae dolor officiis saepe blanditiis et velit.
                  Eligendi.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="hero1" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="hero2" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt="hero3" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* ============= Services section =============== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* ============= Featured tour section =============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* ================= Experience section ================== */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2 className="experience__title">
                  With our all experience
                  <br />
                  we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Ipsam natus delectus in molestias provident doloremque
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>10</span>
                  <h6> Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="experience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================== Gallery section ================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* =============== Testimonial section ============= */}

      <section>
        <Container>
          <Row>
            <Col lang="12">
              <Subtitle subtitle={"Fan Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
     <Newsletter />
    </>
  );
};
export default Home;
