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
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="row align-items-center g-lg-5 py-2">
                        <div className="col-lg-7">
                            <h3>{data.subtitle}</h3>
                            <h1 className="lh-1 mb-4" dangerouslySetInnerHTML={{ __html: data.header }}></h1>
                            <p className="subtext" dangerouslySetInnerHTML={{ __html: data.description }} />
                            {data.fields.map((field: any, index: number) => {
                                if (index === null && index !== 0) return null;

                                return (
                                    <motion.div
                                        key={index}
                                        className="removeAnim"
                                        variants={anim2}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true, amount: 0.95 }}
                                        transition={{
                                            delay: (index + 1) * 0.5,
                                            type: "spring",
                                            bounce: 0.1,
                                            duration: 1,
                                        }}
                                    >
                                        <div
                                            className="row align-items-center"
                                            style={{ padding: 5, marginBottom: 15 }}
                                        >
                                            <Image
                                                src={data.assets[0].url}
                                                alt="small P"
                                                height={20}
                                                width={20}
                                                className="col-2 col-md-1"
                                            />
                                            <li className="col-10 col-md-11 subtext">{field}</li>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <div className="col-lg-5 text-center">
                            <div className="imgContainer" style={{ position: "relative" }}>
                                <Image
                                    src={data.assets[1].url}
                                    alt="illustration of a tablet application"
                                    fill={true}
                                    className="image"
                                    sizes="(max-width: 720px) 90vw, (max-width: 1140px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
