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

    const cards = data.fields.map((field: any, index: number) => {
        return (
            <div className="col-lg-4 p-4 py-lg-0" key={index}>
                <motion.div
                    className="card card-cover overflow-hidden rounded-4 align-items-center text-center px-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{
                        scale: 0.95,
                        borderRadius: "100%",
                    }}
                >
                    <div className="row">
                        <div className="h-100 pt-5">
                            <Image src={data.assets[index].url} alt="concept icon" height={80} width={80} />
                        </div>
                    </div>
                    <div className="pt-3">
                        <h2 className="lh-1">{field}</h2>
                    </div>
                    <div className="flex-column p-5 pt-2">
                        <p className="lh-1">{data.values[index]}</p>
                    </div>
                </motion.div>
            </div>
        );
    });

    return (
        <motion.div
            variants={anim1}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.6 }}
        >
            <section id="services">
                <div className="pt-5 my-5 text-center">
                    <h3>{data.subtitle}</h3>
                    <h1 className="display-5 fw-bold">{data.title}</h1>
                    <div className="col-lg-6 mx-auto">
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="row">{cards}</div>
                </div>
            </section>
        </motion.div>
    );
}
