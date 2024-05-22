import { useState } from "react";
import {
  Button,
  Modal,
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { DonationPopup } from "../../organism/DonationPopup/DonationPopup";

export function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="w-100 position-fixed z-3 shadow-sm bg-light">
      <Navbar bg="light" expand="lg">
        <div className="container d-flex justify-content-between">
          <Link to="/">
            <img
              src="/assets/images/rise-india-logo.png"
              alt="rise-india-foundation-logo"
              style={{ height: "6vh" }}
            />
          </Link>
          <Navbar.Toggle aria-controls="navbarNav" />
          <div className="w-75">
            <Navbar.Collapse
              id="navbarNav"
              className="justify-content-between gap-5 "
            >
              <Nav className="justify-content-between gap-3">
                <Nav.Link href="/about-us">About us</Nav.Link>
                <Nav.Link href="/our-work">Our Work</Nav.Link>
                <NavDropdown title="Get Involved" id="services-dropdown">
                  <NavDropdown.Item href="/donation-and-tax-benefits">
                    Donation & Tax Benefits
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/volunteer">
                    Volunteer
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/internship">
                    Internship
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Campaigns" id="services-dropdown">
                  <NavDropdown.Item href="/campaign">Campaign</NavDropdown.Item>
                  <NavDropdown.Item href="/campaign/education">
                    Education
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/campaign/health">
                    Health
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/campaign/skill">
                    Skill Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/campaign/advocacy">
                    Advocacy
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact-us">Contact us</Nav.Link>
              </Nav>

              <Button
                variant="outline-success"
                className="ms-lg-5 py-2 px-4"
                onClick={handleShow}
              >
                Donate
              </Button>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
      <DonationPopup handleClose={handleClose} show={show} />
    </header>
  );
}
