import { Col, Row } from "react-bootstrap";
import "./Footer.css";
import Button from "../../atom/Buttons/Button";

export function Footer() {
  const onClickFunction = () => {
    const onclickUrl = "https://www.google.com";
    window.location.href = onclickUrl;
  };
  return (
    <footer className="w-auto">
      <div className=" row d-flex flex-column flex-md-row justify-content-center gutter-unset">
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
              <span>Contact us</span>
              <span>FAQs</span>
              <span>Terms & Conditions</span>
              <span>Policies</span>
            </div>
          </Col>
          <Col className="footer-heading">
            <div>Rise India Foundation</div>
            <div className="footer-text d-flex flex-column gap-1">
              <span>About us</span>
              <span>Our Work</span>
              <span className="text-decoration-underline">
                change@riseindiafoundation.in
              </span>
              <span className="text-decoration-underline">
                donation@riseindiafoundation.in
              </span>
            </div>
          </Col>
          <Col className="footer-heading">
            <div>Join us</div>
            <div className="footer-text d-flex flex-column">
              <span>Become a volunteer</span>
              <span>Make a donation</span>
              <span>Support a Campaign</span>
            </div>
          </Col>
        </Row>
        <div className="footer-divider"></div>
        <Row>
          <div className="d-flex justify-content-center flex-wrap gap-5 p-0">
            <a href="#">
              <img src="/assets/svg/facebook-icon.svg" alt="Facebook-Icon" />
            </a>

            <a href="#">
              <img src="/assets/svg/instagram-icon.svg" alt="Instagram-Icon" />
            </a>

            <a href="#">
              <img src="/assets/svg/linkedIn.svg" alt="Linkedin-Icon" />
            </a>

            <a href="#">
              <img src="/assets/svg/tumblr-icon.svg" alt="Tumblr-Icon" />
            </a>

            <a href="#">
              <img src="/assets/svg/twitter-icon.svg" alt="Twitter-Icon" />
            </a>
          </div>
        </Row>
      </section>
    </footer>
  );
}
