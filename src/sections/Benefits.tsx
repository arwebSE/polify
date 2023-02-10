import React from "react";

export default function Benefits({ data }: any) {
    return (
        <section id="benefits">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-2">
                    <div className="col-lg-10 text-center text-lg-start">
                        <h3>{data.subtitle}</h3>
                        <h1 className="lh-1">{data.title}</h1>
                    </div>
                </div>
                <div className="row align-items-center g-lg-5 py-2">
                    <div className="col-lg-6 text-center text-lg-start">
                        <p className="subtext">
                            <div dangerouslySetInnerHTML={{ __html: data.description }} />
                        </p>
                    </div>
                </div>
                <div className="row align-items-center g-lg-5 py-2">
                    <div className="col-lg-6 text-center text-lg-start">
                        <ul className="subtext">
                            {data.fields.map((field: any, index: React.Key | null | undefined) => {
                                return <li key={index}>{field}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
