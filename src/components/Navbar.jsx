import { Navbar, Nav, Container } from "react-bootstrap";
import { logo } from "../assets/Assets";
import { navLinks } from "../constants/Data.js";

const CustomNavbar = () => {
  return (
    <Navbar className="mt-2" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="hoo_bank" className="w-40" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="bg-transparent border-0 shadow-none ms-auto NavbarToggleMargin "
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse
          className="mt-2 bg-Collapse rounded-4 text-center"
          id="basic-navbar-nav"
        >
          <Nav className="ms-auto">
            {navLinks.map((NavItem) => (
              <Nav.Link
                key={NavItem.id}
                className=" me-3 text-secondary fs-18"
                href={`#${NavItem.id}`}
              >
                {NavItem.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
