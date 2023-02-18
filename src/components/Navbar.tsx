import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import imgLogo from "../../public/logo.svg";

const navLinks = [
    { href: "#benefits", text: "Benefits" },
    { href: "#concept", text: "Concept" },
    { href: "#services", text: "Services" },
    { href: "#team", text: "Team" },
    /* { href: "/blog", text: "Blog" }, */
    { href: "#contact", text: "Contact", className: "tinted" },
];

const Navigation = () => {
    const [show, setShow] = useState(true);
    const [showBg, setShowBg] = useState(false);
    //const prevScrollY = useRef(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== "undefined") {
                const currentScrollY = window.scrollY;

                // TO AUTO HIDE NAVBAR
                /* if (prevScrollY.current < currentScrollY && show) {
                    // if scrolling down and navbar is visible, hide it
                    if (currentScrollY > 200) {
                        setShow(false);
                    }
                } else if (prevScrollY.current > currentScrollY && !show) {
                    // if scrolling up and navbar is hidden, show it
                    setShow(true);
                } 
                prevScrollY.current = currentScrollY;
                */

                // change the background color when scrolling down
                if (currentScrollY > 50) {
                    setShowBg(true);
                } else {
                    setShowBg(false);
                }
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [show]);

    return (
        <Navbar id="navbar" expand="lg" className={`${!show ? "hidden" : "show"} ${showBg ? "bg" : ""}`} fixed="top">
            <Container fluid>
                <Navbar.Brand href="#">
                    <Image src={imgLogo} className="bi me-2" alt="logo" width={50} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {navLinks.map((link, index) => (
                        <Nav.Link key={index} href={link.href} className={link.className}>
                            {link.text}
                        </Nav.Link>
                    ))}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
