import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Concept({ data }: any) {
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
            viewport={{ once: false, amount: "some" }}
        >
            <section id="concept" className="container-xxl py-5">
                <div className="row align-items-center py-5">
                    <div className="col-lg-8 text-center text-lg-start">
                        <h3>{data.subtitle}</h3>
                        <h1 className="lh-1">{data.title}</h1>
                    </div>
                </div>

                <br />
                <br />

                <div className="row justify-content-md-center align-items-center py-2">
                    <div className="col-lg-3 text-lg-end pe-lg-0 order-lg-1">
                        <h4>{data.fields[0]}</h4>
                        <p className="subtext">{data.values[0]}</p>
                    </div>

                    <div className="text-center align-items-center col-md-auto order-sm-first order-lg-2">
                        <Image
                            src={data.assets[0].url}
                            alt="circle that represents the process"
                            className="circle"
                            height={400}
                            width={400}
                        />
                    </div>

                    <div className="col-lg-3 text-lg-start ps-lg-0 order-lg-3">
                        <h4>{data.fields[1]}</h4>
                        <p className="subtext">{data.values[1]}</p>
                    </div>
                </div>
                <div className="row justify-content-md-center align-items-center py-2">
                    <div className="col-lg-3 text-lg-end pe-lg-0">
                        <h4>{data.fields[2]}</h4>
                        <p className="subtext">{data.values[2]}</p>
                    </div>

                    <div className="col-md-auto fakepic"></div>

                    <div className="col-lg-3 text-lg-start ps-lg-0">
                        <h4>{data.fields[3]}</h4>
                        <p className="subtext">{data.values[3]}</p>
                    </div>
                </div>

                <div className="row align-items-center pb-2 justify-content-md-center">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 text-lg-center">
                        <h4>{data.fields[4]}</h4>
                        <p className="subtext">{data.values[4]}</p>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </section>
        </motion.div>
    );
}
