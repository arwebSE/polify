import React from "react";
import Image from "next/image";

export default function Concept({ data }: any) {
    const cards = data.fields.map((field: any, index: React.Key) => {
        return (
            <div className="col-lg-4 p-4 py-lg-0" key={index}>
                <div className="card card-cover overflow-hidden rounded-4 align-items-center text-center">
                    <div className="row">
                        <div className="h-100 pt-5">
                            <Image src={data.assets[index].url} alt="megaphone" height={80} width={80} />
                        </div>
                    </div>
                    <div className="pt-3">
                        <h2 className="lh-1">{field}</h2>
                    </div>
                    <div className="flex-column p-5 pt-2">
                        <p className="lh-1">{data.values[index]}</p>
                    </div>
                </div>
            </div>
        );
    });

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
                <div className="row">{cards}</div>
            </div>
        </section>
    );
}
