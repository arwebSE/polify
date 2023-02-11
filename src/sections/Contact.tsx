import React from "react";
import { Button } from "react-bootstrap";

export default function Contact({ data }: any) {
    return (
        <section id="contact" className="container-lg col-11 col-lg-10 col-xxxl-7 px-4 py-5 content">
            <div className="row py-5 mb-5 justify-content-between">
                <div className="col-lg-6 text-lg-start py-3 my-5 my-lg-1">
                    <h2 className="display-5 fw-bold lh-1 mb-5" dangerouslySetInnerHTML={{ __html: data.title }} />
                    <p className="col-lg-10 fs-4" dangerouslySetInnerHTML={{ __html: data.description }} />
                </div>

                <div className="col-lg-5 col-md-12">
                    <form className="p-4 p-md-5 rounded-4 shadow-lg">
                        <h3 className="fw-bold lh-1 mb-3">{data.subtitle}</h3>

                        <div className="form-floating mb-3">
                            <input type="name" className="form-control" id={data.values[0]} placeholder="John Doe" />
                            <label htmlFor={data.values[0]}>{data.fields[0]}</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id={data.values[1]}
                                placeholder="name@example.com"
                            />
                            <label htmlFor={data.values[1]}>{data.fields[1]}</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id={data.values[2]}
                                placeholder="example.com/my-project"
                            />
                            <label htmlFor={data.values[2]}>{data.fields[2]}</label>
                        </div>

                        <div className="form-floating mb-3">
                            <textarea
                                /* type="text" */
                                className="form-control"
                                id={data.values[3]}
                                placeholder="Leave a message here..."
                                /* style="height: 100px" */
                            ></textarea>
                            <label htmlFor={data.values[3]}>{data.fields[3]}</label>
                        </div>

                        <Button
                            variant="primary"
                            size="lg"
                            type="submit"
                            className="w-100 mt-4"
                            style={{ border: "none" }}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
