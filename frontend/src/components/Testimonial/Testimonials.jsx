import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3 ">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          kgkajk akja9eui w w wo utwioieijhall jajgk hkllllllllll a wt4ieoo4o
          u4ti 3 pu 4iht4u qtoguqw9itiqLorem ipsum dolor sit amet consectetur"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} alt="avatar" className="w-25 h-25 rounded-2 " />
          <div>
            <h6 className="mb-0 mt-3">Prashant Kunwar</h6>
            <p className="">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3 ">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          kgkajk akja9eui w w wo utwioieijhall jajgk hkllllllllll a wt4ieoo4o
          u4ti 3 pu 4iht4u qtoguqw9itiqLorem ipsum dolor sit amet consectetur"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} alt="avatar" className="w-25 h-25 rounded-2 " />
          <div>
            <h6 className="mb-0 mt-3">Prashant Kunwar</h6>
            <p className="">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3 ">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          kgkajk akja9eui w w wo utwioieijhall jajgk hkllllllllll a wt4ieoo4o
          u4ti 3 pu 4iht4u qtoguqw9itiqLorem ipsum dolor sit amet consectetur"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} alt="avatar" className="w-25 h-25 rounded-2 " />
          <div>
            <h6 className="mb-0 mt-3">Prashant Kunwar</h6>
            <p className="">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3 ">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          kgkajk akja9eui w w wo utwioieijhall jajgk hkllllllllll a wt4ieoo4o
          u4ti 3 pu 4iht4u qtoguqw9itiqLorem ipsum dolor sit amet consectetur"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} alt="avatar" className="w-25 h-25 rounded-2 " />
          <div>
            <h6 className="mb-0 mt-3">Govinda Sapkota</h6>
            <p className="">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3 ">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          kgkajk akja9eui w w wo utwioieijhall jajgk hkllllllllll a wt4ieoo4o
          u4ti 3 pu 4iht4u qtoguqw9itiqLorem ipsum dolor sit amet consectetur"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} alt="avatar" className="w-25 h-25 rounded-2 " />
          <div>
            <h6 className="mb-0 mt-3">Dinesh Niure</h6>
            <p className="">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default Testimonials;
