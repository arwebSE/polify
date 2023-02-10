import React from "react";
import Image from "next/image";

export default function Concept({ data }: any) {
    return (
        <section id="concept" className="container-xxl px-4 py-5">
            <div className="row align-items-center py-5">
                <div className="col-lg-8 text-center text-lg-start">
                    <h3>Concept</h3>
                    <h1 className="lh-1">How We Operate</h1>
                </div>
            </div>

            <br />
            <br />

            <div className="row justify-content-md-center align-items-center py-2">
                <div className="col-lg-3 text-lg-end pe-lg-0 order-lg-1">
                    <h4>Execute</h4>
                    <p className="subtext">
                        The team will put their plan or strategy into action and carry out the tasks necessary to reach
                        the set goals.
                    </p>
                </div>

                <div className="text-center align-items-center col-md-auto order-sm-first order-lg-2">
                    <Image src={data.asset.url} alt="circle that represents the process" className="circle" height={400} width={400} />
                </div>

                <div className="col-lg-3 text-lg-start ps-lg-0 order-lg-3">
                    <h4>Research</h4>
                    <p className="subtext">
                        The first step in the process is to conduct research and gather information about the project.
                    </p>
                </div>
            </div>
            <div className="row justify-content-md-center align-items-center py-2">
                <div className="col-lg-3 text-lg-end pe-lg-0">
                    <h4>Strategy</h4>
                    <p className="subtext">
                        The team will develop a plan or strategy that fits the needs and vision of the projects.
                    </p>
                </div>

                <div className="col-md-auto fakepic"></div>

                <div className="col-lg-3 text-lg-start ps-lg-0">
                    <h4>Reaching Out</h4>
                    <p className="subtext">The team will reach out and communicate with relevant contacts.</p>
                </div>
            </div>

            <div className="row align-items-center pb-2 justify-content-md-center">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 text-lg-center">
                    <h4>Feedback</h4>
                    <p className="subtext">
                        The team will review and analyze feedback received from our contact network and the Polify team.
                    </p>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </section>
    );
}
