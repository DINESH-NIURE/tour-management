import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GalleryImage from "./galleryImage";

const MasonryImageGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {GalleryImage.map((img, index) => (
          <img
            className="masonry__img"
            key={index}
            src={img}
            alt="gallery"
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
export default MasonryImageGallery;
