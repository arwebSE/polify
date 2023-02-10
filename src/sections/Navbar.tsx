import React from "react";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import imgLogo from "../../public/img/logo.svg";

const Navigation = () => {
    return (
        <div id="navbar" className="container py-5 mb-4">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Image src={imgLogo} className="bi me-2" alt="logo" width={50} />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#benefits">Benefits</Nav.Link>
                        <Nav.Link href="#concept">Concept</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#team">Team</Nav.Link>
                        <Nav.Link href="#contact" className="active">
                            Contact
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;
