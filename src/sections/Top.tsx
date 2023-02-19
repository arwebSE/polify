import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import Image from "next/image";
import { animate, motion, Variants } from "framer-motion";

import imgsvg from "../../public/01.svg";

export default function Top({ partner, empower, logos }: any) {
    function Counter({ from, to }: { from: number; to: number }) {
        const nodeRef = useRef<HTMLSpanElement>(null);

        useEffect(() => {
            const node = nodeRef.current;
            if (!node) return;

            const controls = animate(from, to, {
                duration: 5,
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

    const animVars: Variants = {
        offscreen: {
            x: 500,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    return (
        <section id="top">
            <div id="partner" className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center text-lg-start pt-5">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <h1
                                className="display-1 fw-bold lh-1 mb-0"
                                dangerouslySetInnerHTML={{ __html: partner.header }}
                            ></h1>
                            <p
                                className="col-lg-10 fs-4 pt-3"
                                dangerouslySetInnerHTML={{ __html: partner.description }}
                            />

                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant="primary" size="lg" className="aButton px-4 me-md-4 fw-bold" href="#try">
                                        Try a week
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }}  whileTap={{ scale: 0.95 }}>
                                    <Button variant="outline" size="lg" className="aButton px-4" href="#contact">
                                        Contact us
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="col-lg-6">
                        <motion.div initial="offscreen" whileInView="onscreen">
                            <motion.div variants={animVars}>
                                {/* <Image src={partner.assets[0].url} alt="illustration of people working together" height={500} width={1000} style={{position: "absolute"}} /> */}
                                <div className="imgContainer" style={{ position: "relative" }}>
                                    {/* <Image src={imgsvg} alt="illustration of people working together" width={800} style={{position: "absolute", top:-315, left: -180}} /> */}
                                    <Image
                                        src={imgsvg}
                                        alt="illustration of people working together"
                                        fill={true}
                                        className="image"
                                        priority={true}
                                        sizes="(max-width: 720px) 90vw, (max-width: 1140px) 50vw, 33vw"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div id="empower" className="container-lg mt-5">
                <div className="row px-2">
                    <div className="d-flex flex-row align-items-center justify-content-between p-5 rounded-5 border shadow mb-4">
                        <div className="col-lg-6">
                            <h2 className="fw-bold lh-1 m-0 " dangerouslySetInnerHTML={{ __html: empower.header }} />
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                {empower.values.map((value: string, index: number) => {
                                    const val = Number(value);
                                    return (
                                        <div className="col-lg-4" key={index}>
                                            <h1 className="fw-bold m-0">
                                                <Counter from={0} to={val} />+
                                            </h1>
                                            <p className="lead m-0">{empower.fields[index]}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
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
