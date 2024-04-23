import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";

export function Header() {
  return (
    <header className="w-100 position-fixed z-100 shadow-sm bg-light">
      <Navbar bg="light" expand="lg">
        <div className="container">
          <img
            src="/assets/images/rise-india-logo.png"
            alt="rise-india-foundation-logo"
            style={{ height: "6vh" }}
          />

          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-end gap-4">
            <Nav>
              <Nav.Link href="/about-us">About us</Nav.Link>
              <NavDropdown title="Our Work" id="services-dropdown">
                <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Service 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Get Involved" id="services-dropdown">
                <NavDropdown.Item href="/donation-and-tax-benefits">
                  Donation & Tax Benefits
                </NavDropdown.Item>
                <NavDropdown.Item href="/join-us">Volunteer</NavDropdown.Item>
                <NavDropdown.Item href="/join-us?type=internship">
                  Internship
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Campaigns" id="services-dropdown">
                <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Service 3</NavDropdown.Item>
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
