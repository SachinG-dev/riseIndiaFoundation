import { Row } from "react-bootstrap";
import "./HeroBanner.css";
import Button from "../../atom/Buttons/Button";

interface HeroBannerProps {
  heading?: React.ReactNode;
  description?: string;
  url?: string;
  backgroundImage?: string;
}

const backgroundImageDefault =
  "../../../../assets/images/hero-banner-image.png";

export const HeroBanner = ({
  heading,
  description,
  url,
  backgroundImage = backgroundImageDefault,
}: HeroBannerProps) => {
  const onClickFunction = () => {
    const onclickUrl = "www.google.com";
    window.location.href = onclickUrl;
  };
  return (
    <div
      className="banner-wrapper"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="banner">
        <section className="container">
          <Row>
            <div className="text-container">
              {heading}
              <p className="text-white">{description}</p>
            </div>
          </Row>
          {url && (
            <div className="d-flex align-items-center gap-2">
              <Button
                onClick={onClickFunction}
                variant="contained"
                type="submit"
                className="d-inline-block p-0 font-green bg-transparent border-0"
              >
                Learn More
              </Button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 9H2.25"
                  stroke="#00A65B"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M9.75 3L15.75 9L9.75 15"
                  stroke="#00A65B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
