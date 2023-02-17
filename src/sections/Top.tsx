import React from "react";
import { Button } from "react-bootstrap";
import Image from "next/image";

export default function Top({ partner, empower, logos }: any) {
    return (
        <section id="top">
            <div id="partner" className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1
                            className="display-1 fw-bold lh-1 mb-0"
                            dangerouslySetInnerHTML={{ __html: partner.header }}
                        ></h1>
                        <p className="col-lg-10 fs-4" dangerouslySetInnerHTML={{ __html: partner.fields[0] }} />

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <Button variant="primary" size="lg" className="px-4 me-md-4 fw-bold">
                                Try a week
                            </Button>
                            <Button variant="outline" size="lg" className="px-4" href="#contact">
                                Contact us
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5"></div>
                </div>
            </div>

            <div id="empower" className="container px-5">
                <div className="row p-5 pb-3 pe-lg-0 align-items-center rounded-5 border shadow mb-4">
                    <div className="col-lg-4 p-3 p-lg-4 pt-lg-3">
                        <h2 className="display-7 fw-bold lh-1">{empower.header}</h2>
                    </div>
                    <div className="col-lg-1"></div>
                    {empower.values.map((value: string, index: number) => (
                        <div className="col-lg-2" key={index}>
                            <h1 className="display-7 fw-bold">{value}</h1>
                            <p className="lead">{empower.fields[index]}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div id="logos" className="container px-5 my-5">
                <div className="row py-4 px-5 align-items-center">
                    {logos.assets.map((asset: any, index: number) => (
                        <div className="col-lg-3 text-center" key={index}>
                            {/* <Image src={asset.url} alt="partner logo" height={60} width={60} /> */}
                            {/* eslint-disable @next/next/no-img-element */}
                            <img
                                src={asset.url}
                                alt="partner logo"
                                height={45}
                            />
                            {/* eslint-enable @next/next/no-img-element */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
