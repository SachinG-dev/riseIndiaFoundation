import { Col, Row } from "react-bootstrap";
import "./Footer.css";
import Button from "../../atom/Buttons/Button";

interface footerProps {
  cta?: boolean;
}
export const Footer = ({ cta }: footerProps) => {
  const onClickFunction = () => {
    const onclickUrl = "https://www.google.com";
    window.location.href = onclickUrl;
  };
  return (
    <footer className="w-auto">
      {cta && (
        <div className=" row d-flex flex-column flex-md-row justify-content-center g-0">
          <Button onClick={onClickFunction} className="col footer-button">
            Become a Volunteer
          </Button>
          <Button onClick={onClickFunction} className="col footer-button">
            Make a Donation
          </Button>
          <Button onClick={onClickFunction} className="col footer-button">
            Support a Campaign
          </Button>
        </div>
      )}
      <section className="d-flex flex-column justify-content-center bg footer-padding">
        <Row>
          <Col>
            <img
              src="/assets/images/rise-india-logo.png"
              alt="Rise-India-Logo"
            />
          </Col>
          <Col className="footer-heading">
            <div>Support</div>
            <div className="footer-text d-flex flex-column">
              <a href="/contact-us">Contact us</a>
              <a href="#">FAQs</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Policies</a>
            </div>
          </Col>
          <Col className="footer-heading">
            <div>Rise India Foundation</div>
            <div className="footer-text d-flex flex-column gap-1">
              <a href="/about-us">About us</a>
              <a href="/our-work">Our Work</a>
              <a
                href="mailto:change@riseindiafoundation.in"
                className="text-decoration-underline"
              >
                change@riseindiafoundation.in
              </a>
              <a
                href="mailto:donation@riseindiafoundation.in"
                className="text-decoration-underline"
              >
                donation@riseindiafoundation.in
              </a>
            </div>
          </Col>
          <Col className="footer-heading">
            <div>Join us</div>
            <div className="footer-text d-flex flex-column">
              <a href="/internship">Become a volunteer</a>
              <a href="/donation-and-tax-benefits">Make a donation</a>
              <a href="/campaign">Support a Campaign</a>
            </div>
          </Col>
        </Row>
        <div className="footer-divider"></div>
        <Row>
          <div className="d-flex justify-content-center flex-wrap gap-5 p-0">
            <a href="https://www.facebook.com/RIFNGO/" target="_black">
              <img src="/assets/svg/facebook-icon.svg" alt="Facebook-Icon" />
            </a>

            <a href="https://www.instagram.com/rifngo/?hl=en" target="_black">
              <img src="/assets/svg/instagram-icon.svg" alt="Instagram-Icon" />
            </a>

            <a
              href="https://www.linkedin.com/company/rise-india-foundation/?viewAsMember=true"
              target="_black"
            >
              <img src="/assets/svg/linkedIn-icon.svg" alt="Linkedin-Icon" />
            </a>

            <a href="https://www.tumblr.com/blog/rifngo" target="_black">
              <img src="/assets/svg/tumblr-icon.svg" alt="Tumblr-Icon" />
            </a>

            <a href="https://twitter.com/rifngo" target="_black">
              <img src="/assets/svg/twitter-icon.svg" alt="Twitter-Icon" />
            </a>
          </div>
        </Row>
      </section>
    </footer>
  );
};
