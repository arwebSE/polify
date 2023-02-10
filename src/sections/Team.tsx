import React from "react";
import Image from "next/image";

import imgLinkedin from "../../public/img/linkedin.svg";

export default function Team({ data, authors }: any) {
    return (
        <section id="team">
            <div className="px-4 pb-5 mb-5 text-center">
                <div className="pb-5">
                    <h3>{data.subtitle}</h3>
                    <h1 className="display-4 fw-bold mb-5">{data.title}</h1>
                </div>
                <div className="container-xxl px-4 py-5 mt-5">
                    <div className="row">
                        <div className="col-lg-4 p-2 p-xl-4 py-lg-0 my-5 my-lg-1">
                            <div className="card card-cover rounded-4 align-items-center text-center">
                                <div className="h-100 pt-5">
                                    <Image src={authors[0].picture.url} alt={authors[0].name} height={140} width={140} className="profile" />
                                </div>
                                <div className="pt-3">
                                    <h2 className="lh-1 text-white">{authors[0].name}</h2>
                                </div>
                                <div className="pt-1">
                                    <h4 className="lh-1 text-white">{authors[0].title}</h4>
                                </div>
                                <div className="px-4 pt-0">
                                    <p className="lh-2">{authors[0].biography}</p>
                                </div>
                                <div className="pb-4">
                                    <a href="#">
                                        <Image src={imgLinkedin} alt="linkedin logo" width={30} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 p-2 p-xl-4 py-lg-0 my-5 my-lg-1">
                            <div className="card card-cover rounded-4 align-items-center text-center">
                                <div className="h-100 pt-5">
                                    <Image src={authors[1].picture.url} alt={authors[1].name} height={140} width={140} className="profile" />
                                </div>
                                <div className="pt-3">
                                    <h2 className="lh-1 text-white">{authors[1].name}</h2>
                                </div>
                                <div className="pt-1">
                                    <h4 className="lh-1 text-white">{authors[1].title}</h4>
                                </div>
                                <div className="px-4 pt-0">
                                    <p className="lh-2">{authors[1].biography}</p>
                                </div>
                                <div className="pb-4">
                                    <a href="#">
                                        <Image src={imgLinkedin} alt="linkedin logo" width={30} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 p-2 p-xl-4 py-lg-0 my-5 my-lg-1">
                            <div className="card card-cover rounded-4 align-items-center text-center">
                                <div className="h-100 pt-5">
                                    <Image src={authors[2].picture.url} alt={authors[2].name} height={140} width={140} className="profile" />
                                </div>
                                <div className="pt-3">
                                    <h2 className="lh-1 text-white">{authors[2].name}</h2>
                                </div>
                                <div className="pt-1">
                                    <h4 className="lh-1 text-white">{authors[2].title}</h4>
                                </div>
                                <div className="px-4 pt-0">
                                    <p className="lh-2">{authors[2].biography}</p>
                                </div>
                                <div className="pb-4">
                                    <a href="#">
                                        <Image src={imgLinkedin} alt="linkedin logo" width={30} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
