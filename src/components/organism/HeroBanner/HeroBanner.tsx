import "./HeroBanner.css";
import {Button} from "../../atom/Buttons/Button";


interface HeroBannerProps {
  heading?: string;
  description?: string;
  buttonURL?: string;
  buttonText?: string;
  backgroundImageUrl?: string;
}

export const HeroBanner = ({
  heading,
  description,
  buttonURL,
  buttonText,
  backgroundImageUrl,
}: HeroBannerProps) => {
  const onChangeCallback = () => {
    if(buttonURL) window.location.href = buttonURL;
  };
  return (
    <div className="hero-section d-flex align-items-center position-relative" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="container-lg">
        <div className="row position-relative z-1">
          <div className="col-12 col-md-9 col-lg-8">
              {heading && <h1 className="text-white" dangerouslySetInnerHTML={{ __html: heading }}></h1>}
              {description && <p className="text-white mb-0 pt-2">{description}</p>}
              {buttonText && <Button variant="primaryArrow" className="mt-3 mt-lg-5 px-0" onClick={onChangeCallback}>{buttonText}</Button>}
          </div>
        </div>
      </div>
    </div>

  );
};
