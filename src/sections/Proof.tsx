import React from "react";

export default function Proof({ data }: any) {
    return (
        <section id="proof" className="pb-5">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-2">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h3>{data.subtitle}</h3>
                        <h1 className="display-5 fw-bold lh-1 mb-0">{data.title}</h1>
                    </div>
                </div>
                <div className="row align-items-center g-lg-5">
                    <div className="col-lg-7 text-center text-lg-start p-5 pb-3 ps-lg-0">
                        {/* eslint-disable @next/next/no-img-element */}
                        <img
                            src={data.assets[0].url}
                            alt="graph of community growth"
                            className="graph shadow-lg rounded-5"
                        />
                        {/* eslint-enable @next/next/no-img-element */}
                    </div>
                    <div className="col-md-10 col-lg-4">
                        <p dangerouslySetInnerHTML={{ __html: data.fields[0] }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
