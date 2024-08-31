import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";

const TourDetails = () => {
  const { id } = useParams();
  const reviewRef = useRef();
  const [rating, setRating] = useState([]);

  const tour = tourData.find((tour) => tour.id === id);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    address,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = (e) => {
    e.preventDefault();
    const review = reviewRef.current.value;
    alert(`${review} ${rating}`);
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt={title} className="img-fluid" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        class="ri-star-s-fill"
                        style={{ color: "var(--secondary-color)" }}></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>

                    <span>
                      <i class="ri-map-pin-user-fill"></i> {address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      <i class="ri-map-pin-2-line"></i> {city}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-line"></i> ${price}/per
                      person
                    </span>
                    <span>
                      <i class="ri-map-pin-time-line"></i> ${distance} k/m
                    </span>
                    <span>
                      <i class="ri-group-line"></i> {maxGroupSize} people
                    </span>
                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/*================== tour review section ================= */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <form action="" onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setRating(1)}>
                        1<i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setRating(2)}>
                        2<i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setRating(3)}>
                        3<i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setRating(4)}>
                        4<i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setRating(5)}>
                        5<i className="ri-star-s-fill"></i>
                      </span>
                    </div>

                    <div className="review__input">
                      <input
                        type="text"
                        ref={reviewRef}
                        placeholder="Share your thoughts"
                        required
                      />
                      <button className="btn primary__btn text-white">
                        Submit
                      </button>
                    </div>
                  </form>

                  <ListGroup className="user__reviews">
                    {reviews?.map((review, index) => (
                      <div className="review__item" key={index}>
                        <img src={avatar} alt="avatar" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between gap-1px">
                            <div>
                              <h5>{review.name}</h5>
                              <p>
                                {new Date("01-18-2024").toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              5<i className="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>Amazing experience</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};
export default TourDetails;
