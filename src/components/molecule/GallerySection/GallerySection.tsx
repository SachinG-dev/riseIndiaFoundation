import { Gallery } from "react-grid-gallery";
import "./GallerySection.css";

interface GallerySectionProps {
  heading?: React.ReactNode;
  description?: string;
}

export const GallerySection = ({
  heading,
  description,
}: GallerySectionProps) => {
  return (
    <div className="gallerySection--margin">
      <div className="gallerySection_margin--bottom">
        {heading}
        <p>{description}</p>
      </div>
    </div>
  );
};
