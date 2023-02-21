import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Contact from "@/sections/Contact";

import imgWaves from "../../public/waves.svg";

const Footer = ({ footer, contact }: any) => {
    return (
        <div id="bottom">
            <div className="bgWrapper"></div>

            {contact && <Contact data={contact} />}

            <footer>
                <div className="container content col-xl-10 col-xxl-7">
                    <div className="pt-4 mt-4 mb-5">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <a href="#" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                    <div className="d-flex flex-column">
                                        <Image src={footer.assets[0].url} alt="polify logo" width={170} height={69} />
                                        <span className="slogan">{footer.subtitle}</span>
                                    </div>
                                </a>
                            </div>

                            <div className="text-center">
                                <div className="row p-2">
                                    <h4>{footer.fields[0]}</h4>
                                </div>
                                <div className="row">
                                    <motion.div
                                        className="col"
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        whileTap={{
                                            scale: 0.95,
                                            rotate: -2,
                                            borderRadius: "100%",
                                        }}
                                    >
                                        <Link href={footer.values[0]} className="social">
                                            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        className="col"
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        whileTap={{
                                            scale: 0.95,
                                            rotate: -2,
                                            borderRadius: "100%",
                                        }}
                                    >
                                        <Link href={footer.values[1]} className="social">
                                            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <span className="mt-4 copyright">
                                <div dangerouslySetInnerHTML={{ __html: footer.description }} />
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="borderWrapper container col-xl-10 col-xxl-7 px-3">
                <div></div>
            </div>
            <div className="waves">
                <Image src={imgWaves} alt="waves" style={{ width: "70%", height: "auto" }} />
            </div>
        </div>
    );
};

export default Footer;
