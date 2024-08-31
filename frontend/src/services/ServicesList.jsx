import ServicesCard from "./ServicesCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    description: "Check the weather of your destination before you go",
  },
  {
    imgUrl: guideImg,
    title: "Travel Guides",
    description: "Get the best travel guides for your destination",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    description: "Customize your travel plan according to your needs",
  },
];

const ServicesList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServicesCard item={item} />
        </Col>
      ))}
    </>
  );
};
export default ServicesList;
