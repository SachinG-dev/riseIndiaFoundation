import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";

export function Header() {
  return (
    <header className="w-100 position-fixed z-100 shadow-sm bg-light">
      <Navbar bg="light" expand="lg">
        <div className="container">
          <img
            src="/assets/images/rise-india-foundation-logo.svg"
            alt="rise-india-foundation-logo"
          />

          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-end gap-4">
            <Nav>
              <NavDropdown title="About us" id="services-dropdown">
                <NavDropdown.Item href="#">Nav link 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Nav link 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Nav link 3</NavDropdown.Item>
                <NavDropdown.Item href="#">Nav link 4</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Our Work" id="services-dropdown">
                <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Service 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Get Involved" id="services-dropdown">
                <NavDropdown.Item href="#">Nav link 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Nav link 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Nav link 3</NavDropdown.Item>
                <NavDropdown.Item href="#">Nav link 4</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Campaigns" id="services-dropdown">
                <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Service 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Contact us" id="campaigns-dropdown">
                <NavDropdown.Item href="#">Disaster Relief</NavDropdown.Item>
                <NavDropdown.Item href="#">Health</NavDropdown.Item>
                <NavDropdown.Item href="#">Education</NavDropdown.Item>
                <NavDropdown.Item href="#">Advocacy</NavDropdown.Item>
                <NavDropdown.Item href="#">Skill Development</NavDropdown.Item>
              </NavDropdown>
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
