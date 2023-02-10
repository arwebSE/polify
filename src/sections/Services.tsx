import React from "react";
import Image from "next/image";

export default function Concept({ data }: any) {
    return (
        <section id="services">
            <div className="px-4 pt-5 my-5 text-center">
                <h3>{data.subtitle}</h3>
                <h1 className="display-5 fw-bold">{data.title}</h1>
                <div className="col-lg-6 mx-auto">
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
                </div>
            </div>

            <div className="container-xxl px-4 py-5">
                <div className="row">
                    <div className="col-lg-4 p-4 py-lg-0">
                        <div className="card card-cover overflow-hidden rounded-4 align-items-center text-center">
                            <div className="row">
                                <div className="h-100 pt-5">
                                    <Image src={data.assets[0].url} alt="megaphone" height={100} width={100} />
                                </div>
                            </div>
                            <div className="pt-3">
                                <h2 className="lh-1">{data.fields[0]}</h2>
                            </div>
                            <div className="flex-column p-5 pt-2">
                                <p className="lh-1">{data.values[0]}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 p-4 py-lg-0">
                        <div className="card card-cover overflow-hidden rounded-4 align-items-center text-center">
                            <div className="row">
                                <div className="h-100 pt-5">
                                    <Image src={data.assets[1].url} alt="community" height={100} width={100} />
                                </div>
                            </div>
                            <div className="pt-3">
                                <h2>{data.fields[1]}</h2>
                            </div>
                            <div className="flex-column p-5 pt-2">
                            <p className="lh-1">{data.values[1]}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 p-4 py-lg-0">
                        <div className="card card-cover overflow-hidden rounded-4 align-items-center text-center">
                            <div className="row">
                                <div className="h-100 pt-5">
                                    <Image src={data.assets[2].url} alt="arrow" height={100} width={100} />
                                </div>
                            </div>
                            <div className="pt-3">
                                <h2 className="lh-1">{data.fields[2]}</h2>
                            </div>
                            <div className="flex-column p-5 pt-2">
                            <p className="lh-1">{data.values[2]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
