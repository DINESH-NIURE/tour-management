import CommonSection from "../shared/CommonSection";
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import Newsletter from "../shared/Newsletter";
import TourCard from "../shared/TourCard";

const SearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state.data);

  console.log(data);
  return (
    <>
      <CommonSection title="Search Result List" />
      <section className="search__result__list">
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No tour found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};
export default SearchResultList;
