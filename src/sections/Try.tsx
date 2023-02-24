import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "react-bootstrap";
import Image from 'next/image';

export default function Try({ data }: any) {
    const anim1: Variants = {
        offscreen: {
            y: 20,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1.5,
            },
        },
    };

    return (
        <motion.div variants={anim1} initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.4 }}>
            <section id="try" className="container px-4 py-5 my-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7">
                        <h3>{data.subtitle}</h3>
                        <h1 className="display-1 fw-bold lh-1 mb-4">{data.header}</h1>
                        <p className="col-lg-10 fs-4 lh-2" dangerouslySetInnerHTML={{ __html: data.description }} />

                        <div className="d-md-flex mt-4">
                            <Button
                                variant="light"
                                size="lg"
                                className="px-4 py-3 me-md-4 fw-bold"
                                href={data.values[0]}
                            >
                                Try Now!
                            </Button>
                        </div>
                    </div>
                    <div className="col-lg-5 mx-auto col-lg-4">
                        <div className="imgContainer" style={{ position: "relative", marginLeft: -200, zIndex: -1 }}>
                            <Image
                                src={data.assets[0].url}
                                alt="illustration of a tablet application"
                                fill={true}
                                className="image"
                                sizes="(max-width: 720px) 90vw, (max-width: 1140px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
