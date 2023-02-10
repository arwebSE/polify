import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ data }: any) => {
    return (
        <footer>
            <div className="container content col-xl-10 col-xxl-7">
                <div className="pt-4 mt-4 mb-5">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <a href="#" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                <div className="d-flex flex-column">
                                    <Image src={data.assets[0].url} alt="polify logo" width={170} height={69} />
                                    <span className="slogan">{data.subtitle}</span>
                                </div>
                            </a>
                        </div>

                        <div className="text-center">
                            <div className="row p-2">
                                <h4>{data.fields[0]}</h4>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Link href={data.values[0]} className="social">
                                        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link href={data.values[1]} className="social">
                                        <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <span className="mt-4 copyright">
                            <div dangerouslySetInnerHTML={{ __html: data.description }} />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
