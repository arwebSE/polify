import React from "react";
import { Button } from "react-bootstrap";

export default function Top({ partner, empower }: any) {
    return (
        <section id="top">
            <div id="partner" className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-1 fw-bold lh-1 mb-0">{partner.title}</h1>
                        <h1 className="display-1 fw-bold lh-1 mb-3 tint">{partner.subtitle}</h1>
                        <p className="col-lg-10 fs-4">
                            <div dangerouslySetInnerHTML={{ __html: partner.fields[0] }} />
                        </p>
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
                <div className="row p-5 pb-3 pe-lg-0 align-items-center rounded-5 border shadow mb-5">
                    <div className="col-lg-4 p-3 p-lg-4 pt-lg-3">
                        <h2 className="display-7 fw-bold lh-1">{empower.title}</h2>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2">
                        <h1 className="display-7 fw-bold">{empower.fields[0]}</h1>
                        <p className="lead">{empower.fields[1]}</p>
                    </div>
                    <div className="col-lg-2">
                        <h1 className="display-7 fw-bold">{empower.fields[2]}</h1>
                        <p className="lead">{empower.fields[3]}</p>
                    </div>
                    <div className="col-lg-2">
                        <h1 className="display-7 fw-bold">{empower.fields[4]}</h1>
                        <p className="lead">{empower.fields[5]}</p>
                    </div>
                </div>
            </div>

            <br />
            <br />
        </section>
    );
}
