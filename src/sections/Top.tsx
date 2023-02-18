import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import Image from "next/image";
import { animate } from "framer-motion";

import imgsvg from "../../public/01.svg";

export default function Top({ partner, empower, logos }: any) {
    function Counter({ from, to }: { from: number; to: number }) {
        const nodeRef = useRef<HTMLSpanElement>(null);

        useEffect(() => {
            const node = nodeRef.current;
            if (!node) return;

            const controls = animate(from, to, {
                duration: 10,
                onUpdate(value) {
                    if (to % 1 === 0) {
                        node.textContent = value.toFixed(0);
                    } else if (value === Math.floor(value) && value < to) {
                        node.textContent = value.toFixed(1) + ".";
                    } else {
                        node.textContent = value.toFixed(1);
                    }
                },
            });

            return () => controls.stop();
        }, [from, to]);

        return <span ref={nodeRef} />;
    }

    return (
        <section id="top">
            <div id="partner" className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-lg-7 text-center text-lg-start pt-5">
                        <h1
                            className="display-1 fw-bold lh-1 mb-0"
                            dangerouslySetInnerHTML={{ __html: partner.header }}
                        ></h1>
                        <p className="col-lg-10 fs-4 pt-3" dangerouslySetInnerHTML={{ __html: partner.description }} />

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <Button variant="primary" size="lg" className="px-4 me-md-4 fw-bold">
                                Try a week
                            </Button>
                            <Button variant="outline" size="lg" className="px-4" href="#contact">
                                Contact us
                            </Button>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        {/* <Image src={partner.assets[0].url} alt="illustration of people working together" height={500} width={1000} style={{position: "absolute"}} /> */}
                        <div className="imgContainer">
                            {/* <Image src={imgsvg} alt="illustration of people working together" width={800} style={{position: "absolute", top:-315, left: -180}} /> */}
                            <Image
                                src={imgsvg}
                                alt="illustration of people working together"
                                layout="fill"
                                className="image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div id="empower" className="container-lg px-5">
                <div className="row px-5 align-items-center">
                    <div className="row p-5 pb-3 pe-lg-0 align-items-center rounded-5 border shadow mb-4">
                        <div className="col-lg-4 p-3 p-lg-4 pt-lg-3">
                            <h2 className="display-7 fw-bold lh-1">{empower.header}</h2>
                        </div>
                        <div className="col-lg-1"></div>
                        {empower.values.map((value: string, index: number) => {
                            const val = Number(value);
                            return (
                                <div className="col-lg-2" key={index}>
                                    <h1 className="display-7 fw-bold">
                                        <Counter from={0} to={val} />+
                                    </h1>
                                    <p className="lead">{empower.fields[index]}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div id="logos" className="container px-5 my-5">
                <div className="row py-4 px-5 align-items-center">
                    {logos.assets.map((asset: any, index: number) => (
                        <div className="col-lg-3 text-center" key={index}>
                            {/* <Image src={asset.url} alt="partner logo" height={60} width={60} /> */}
                            {/* eslint-disable @next/next/no-img-element */}
                            <img src={asset.url} alt="partner logo" height={45} />
                            {/* eslint-enable @next/next/no-img-element */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
