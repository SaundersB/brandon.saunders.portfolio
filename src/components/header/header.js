import React from "react";
import "../../index.scss";
import { Navbar, Nav} from "react-bootstrap";

class Header extends React.Component {
    render()
    {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href={process.env.PUBLIC_URL + "/"}>Home</Nav.Link>
                            <Nav.Link href="mailto:BrandonNSaunders@gmail.com">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>;
            </div>
        );
    }
}

export default Header;
