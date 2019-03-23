import React from "react";
import "../../index.scss";
import { Navbar } from "react-bootstrap";

class Footer extends React.Component {
    render()
    {
        return (
            <div>
                <Navbar bg="light" expand="lg" fixed="bottom" className="justify-content-center">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="text-center">
                        <div>&copy; { (new Date().getFullYear()) }</div>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Footer;
