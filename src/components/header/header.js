import React from "react";
import "../../index.scss";
import { Navbar, Nav, NavItem, NavDropdown} from "react-bootstrap";
class Header extends React.Component {
    render()
    {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>;
            </div>
        );
    }
}

export default Header;
