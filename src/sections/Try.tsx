import React from "react";
import { motion, Variants } from "framer-motion";

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
        <motion.div
            variants={anim1}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.5 }}
        >
            <section id="try" className="container col-xl-10 col-xxl-8 px-4 py-5 my-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-8">
                        <h3>{data.subtitle}</h3>
                        <h1 className="display-1 fw-bold lh-1 mb-4">{data.header}</h1>
                        <p className="col-lg-10 fs-4 lh-2" dangerouslySetInnerHTML={{ __html: data.description }} />

                        <div className="d-md-flex mt-4">
                            <button type="button" className="btn btn-light btn-lg px-4 py-3 me-md-4 fw-bold">
                                Try Now!
                            </button>
                        </div>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-4"></div>
                </div>
            </section>
        </motion.div>
    );
}
