import React from "react";
import { motion, Variants } from "framer-motion";

export default function Proof({ data }: any) {
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
        <motion.div variants={anim1} initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: "some" }}>
            <section id="proof" className="pb-5">
                <div className="container-xxl py-5">
                    <div className="row align-items-center g-lg-5 py-2">
                        <div className="col-lg-7 text-center text-lg-start">
                            <h3>{data.subtitle}</h3>
                            <h1
                                className="display-5 fw-bold lh-1 mb-0"
                                dangerouslySetInnerHTML={{ __html: data.header }}
                            />
                        </div>
                    </div>
                    <div className="row align-items-center g-lg-5">
                        <div className="col-md-10 col-lg-6">
                            <p dangerouslySetInnerHTML={{ __html: data.description }} />
                        </div>
                        <div className="col-lg-6 text-center text-lg-start p-5 pb-3 ps-lg-0">
                            {/* eslint-disable @next/next/no-img-element */}
                            <img src={data.assets[0].url} alt="graph of community growth" className="graph rounded-5" />
                            {/* eslint-enable @next/next/no-img-element */}
                            <p className="text-muted text-center">{data.fields[0]}</p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
