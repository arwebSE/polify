import React from "react";

export default function Try({ data }: any) {
    return (
        <section id="try" className="container col-xl-10 col-xxl-8 px-4 py-5 my-5">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-8">
                    <h3>{data.subtitle}</h3>
                    <h1 className="display-1 fw-bold lh-1 mb-4">{data.title}</h1>
                    <p className="col-lg-10 fs-4 lh-2" dangerouslySetInnerHTML={{ __html: data.description }} />

                    <div className="d-md-flex mt-4">
                        <button type="button" className="btn btn-light btn-lg px-4 py-3 me-md-4 fw-bold">
                            Try Now!
                        </button>
                    </div>
                </div>
                <div className="col-md-10 mx-auto col-lg-4"></div>
            </div>
        </section>
    );
}
