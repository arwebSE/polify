import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Benefits({ data }: any) {
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

    const anim2: Variants = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
    };

    return (
        <section id="benefits">
            <div className="container-xxl py-5">
                <motion.div
                    variants={anim1}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: "some" }}
                >
                    <div className="row align-items-center g-lg-5 py-2">
                        <div className="col-lg-12 text-center text-lg-start">
                            <h3>{data.subtitle}</h3>
                            <h1 className="lh-1" dangerouslySetInnerHTML={{ __html: data.header }}></h1>
                        </div>
                    </div>
                    <div className="row align-items-center g-lg-5 py-2">
                        <div className="col-lg-7 text-center text-lg-start">
                            <p className="subtext" dangerouslySetInnerHTML={{ __html: data.description }} />
                        </div>
                    </div>
                </motion.div>
                <div className="row align-items-center g-lg-5 py-2">
                    <div className="col-lg-7 text-center text-lg-start">
                        {data.fields.map((field: any, index: number) => {
                            if (index === null && index !== 0) return null;
                            return (
                                <motion.div
                                    variants={anim2}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true, amount: "all" }}
                                    key={index}
                                    transition={{ delay: (index + 1) * 0.5, type: "spring", bounce: 0.1, duration: 1.2 }}
                                >
                                    <div className="row align-items-center" style={{ padding: 5, marginBottom: 15 }}>
                                        <Image
                                            src={data.assets[0].url}
                                            alt="small P"
                                            height={20}
                                            width={20}
                                            className="col-1"
                                        />
                                        <li className="col-11 subtext">{field}</li>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
