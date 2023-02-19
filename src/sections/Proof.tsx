import React from "react";
import { motion, Variants } from "framer-motion";

export default function Proof({ data }: any) {
    const anim1: Variants = {
        offscreen: {
            y: 200,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.9,
            },
        },
    };

    const anim2: Variants = {
        offscreen: {
            x: 200,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 0.9,
            },
        },
    };

    return (
        <section id="proof" className="pb-5">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-2">
                    <motion.div
                        variants={anim1}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <div className="col-lg-7 text-center text-lg-start">
                            <h3>{data.subtitle}</h3>
                            <h1
                                className="display-5 fw-bold lh-1 mb-0"
                                dangerouslySetInnerHTML={{ __html: data.header }}
                            />
                        </div>
                    </motion.div>
                </div>
                <div className="row align-items-center g-lg-5">
                    <div className="col-md-10 col-lg-6">
                        <motion.div
                            variants={anim1}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <p dangerouslySetInnerHTML={{ __html: data.description }} />
                        </motion.div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-start p-5 pb-3 ps-lg-0">
                        <motion.div
                            variants={anim2}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            {/* eslint-disable @next/next/no-img-element */}
                            <img src={data.assets[0].url} alt="graph of community growth" className="graph rounded-5" />
                            {/* eslint-enable @next/next/no-img-element */}
                            <p className="text-muted text-center">{data.fields[0]}</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
