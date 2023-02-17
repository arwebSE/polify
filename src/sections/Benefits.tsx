import React from "react";
import Image from "next/image";

export default function Benefits({ data }: any) {
    return (
        <section id="benefits">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-2">
                    <div className="col-lg-10 text-center text-lg-start">
                        <h3>{data.subtitle}</h3>
                        <h1 className="lh-1" dangerouslySetInnerHTML={{ __html: data.header }}></h1>
                    </div>
                </div>
                <div className="row align-items-center g-lg-5 py-2">
                    <div className="col-lg-7 text-center text-lg-start">
                        <p className="subtext" dangerouslySetInnerHTML={{ __html: data.description }} />
                    </div>
                </div>
                <div className="row align-items-center g-lg-5 py-2">
                    <div className="col-lg-7 text-center text-lg-start">
                        <div>
                            {data.fields.map((field: any, index: React.Key | null | undefined) => {
                                return (
                                    <div key={index} className="row align-items-center" style={{padding: 5, marginBottom: 10}}>
                                        <Image
                                            src={data.assets[0].url}
                                            alt="small P"
                                            height={20}
                                            width={20}
                                            className="col-1"
                                        />
                                        <li className="col-11 subtext">{field}</li>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
