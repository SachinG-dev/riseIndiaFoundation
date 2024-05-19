import { RichEditor, ContentBlock } from "../../atom/RichEditor/RichEditor";
import "./GallerySection.css";

type GallerySectionType = {
    imageURL: string;
    imageTitle?: string;
    imageAltTag? : string;
}
interface GallerySectionProps {
  title: string;
  description?: ContentBlock[];
  sectionClasses ?: string;
  titleClasses?: string;
  descClasses?: string;
  images: GallerySectionType[];
}

export const GallerySection = ({ title, description, sectionClasses, titleClasses, descClasses, images}: GallerySectionProps) => {
  return (
    <div className={`gallery-section ${sectionClasses}`}>
      <div className="container-lg">
      { title && <h2 className={titleClasses} dangerouslySetInnerHTML={{ __html: title }} />}
       { description && <RichEditor contentBlocks={description} className={`px-0 pt-5 ${descClasses}`}/> }
        <div className="row pt-5">
          {images.map((data, index)=>{
            return <div className="col-12 col-sm-6" key={index}>
              <div className="gallery-section__image position-relative mt-4">
                <img className="img-fluid" src={data.imageURL} alt={data.imageAltTag} />
                {data.imageTitle && <h3 className="gallery-section__image--title position-absolute bottom-0 left-0 mb-0 d-flex align-items-end align-items-sm-center">{data.imageTitle}</h3>}
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};
