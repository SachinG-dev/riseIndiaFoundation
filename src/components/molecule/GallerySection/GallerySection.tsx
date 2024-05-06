import { Gallery } from "react-grid-gallery";
import "./GallerySection.css";

interface GallerySectionProps {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  images?: { src: string; alt: string; style?: React.CSSProperties }[];
}

export const GallerySection = ({
  heading,
  description,
  images = [],
}: GallerySectionProps) => {
  return (
    <div className="gallerySection--margin">
      <div className="gallerySection_margin--bottom">
        {heading}
        <p>{description}</p>
      </div>
      <div
        className="gallerySection_wrapper d-flex flex-wrap justify-content-between gap-5
"
      >
        {images.map((image, index) => (
          <div className="position-relative">
            <div className="h5 font-color-orange fw-bolder gallery-bg w-100 position-absolute bottom-0 z-index-2 d-flex align-items-center">
              {image.alt}
            </div>
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              style={image.style}
              className=""
            />
          </div>
        ))}
      </div>{" "}
    </div>
  );
};
