import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

type Author = {
    name: string;
    title: string;
    biography: string;
    picture: { url: string };
    links: string[];
};

type TeamProps = {
    data: { header: string; subtitle: string; assets: { url: string }[] };
    authors: Author[];
};

type CardProps = {
    author: Author;
    dataAssetUrl: string;
};

const Card: React.FC<CardProps> = ({ author, dataAssetUrl }) => (
    <div className="col-lg-4 p-2 p-xl-4 py-lg-0 my-5 my-lg-1">
        <div className="card card-cover rounded-4 align-items-center text-center">
            <div className="h-100 pt-5">
                <Image src={author.picture.url} alt={author.name} height={140} width={140} className="profile" />
            </div>
            <div className="pt-3">
                <h2 className="lh-1 text-white">{author.name}</h2>
            </div>
            <div className="pt-1">
                <h4 className="lh-1 text-white">{author.title}</h4>
            </div>
            <div className="px-4 pt-0">
                <p className="lh-2">{author.biography}</p>
            </div>
            <div className="pb-4">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{
                        scale: 0.95,
                        borderRadius: "100%",
                    }}
                >
                    <Link href={author.links[0]}>
                        <Image src={dataAssetUrl} alt="linkedin logo" width={30} height={30} />
                    </Link>
                </motion.div>
            </div>
        </div>
    </div>
);

const Team: React.FC<TeamProps> = ({ data, authors }) => {
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
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            transition: {
                duration: 1.5,
            },
        },
    };

    return (
        <section id="team">
            <div className="px-4 pb-md-5 mb-md-5 text-center">
                <motion.div
                    variants={anim2}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="pb-md-5">
                        <h3>{data.subtitle}</h3>
                        <h1 className="display-4 fw-bold mb-md-5">{data.header}</h1>
                    </div>

                    <div className="container-xxl px-4 py-5 mt-5">
                        <div className="row">
                            {authors.map((author, i) => (
                                <Card key={i} author={author} dataAssetUrl={data.assets[0].url} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
