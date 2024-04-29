import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-100 position-fixed z-100 shadow-sm bg-light">
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Link to="/">
            <img
              src="/assets/images/rise-india-logo.png"
              alt="rise-india-foundation-logo"
              style={{ height: "6vh" }}
            />
          </Link>

          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-end gap-4">
            <Nav>
              <Nav.Link href="/about-us">About us</Nav.Link>
              <Nav.Link href="/our-work">Our Work</Nav.Link>
              <NavDropdown title="Get Involved" id="services-dropdown">
                <NavDropdown.Item href="/donation-and-tax-benefits">
                  Donation & Tax Benefits
                </NavDropdown.Item>
                <NavDropdown.Item href="/join-us">Volunteer</NavDropdown.Item>
                <NavDropdown.Item href="/internship">
                  Internship
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Campaigns" id="services-dropdown">
                <NavDropdown.Item href="#">Campaingns</NavDropdown.Item>
                <NavDropdown.Item href="#">Education</NavDropdown.Item>
                <NavDropdown.Item href="#">Health</NavDropdown.Item>
                <NavDropdown.Item href="#">Skill Development</NavDropdown.Item>
                <NavDropdown.Item href="#">Advocacy</NavDropdown.Item>
                <NavDropdown.Item href="#">Drushti</NavDropdown.Item>
                <NavDropdown.Item href="#">Sanjeevani</NavDropdown.Item>
                <NavDropdown.Item href="#">Kaabil</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact-us">Contact us</Nav.Link>
              <Button variant="outline-success" className="ms-lg-5 py-2 px-4">
                Donate
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}
