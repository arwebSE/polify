import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GraphQLClient, gql } from "graphql-request";

import imgWaves from "../../public/img/waves.svg";

/* import BlogPost from "@/components/BlogPost"; */

import Navbar from "@/components/Navbar";
import Top from "@/sections/Top";
import Proof from "@/sections/Proof";
import Benefits from "@/sections/Benefits";
import Concept from "@/sections/Concept";
import Services from "@/sections/Services";
import Try from "@/sections/Try";
import Team from "@/sections/Team";

/* import styles from "@/styles/Home.module.scss"; */
const inter = Inter({ subsets: ["latin"] });

const cms = new GraphQLClient(process.env.GQL_API || "");
const query = gql`
    query {
        sections {
            slug
            title
            subtitle
            description
            fields
            values
            assets {
                url
            }
        }
        authors {
            name
            title
            biography
            picture {
                url
            }
        }
    }
`;

export async function getStaticProps() {
    const { sections, authors } = await cms.request(query);
    console.log("GQL data:", authors);

    return {
        props: { sections, authors },
        revalidate: 10,
    };
}

export default function Home({ sections, authors }: any) {
    /* console.log("Posts:", sections); */

    const sPartner = sections.filter((section: { slug: string }) => {
        return section.slug == "partner";
    })[0];

    const sEmpower = sections.filter((section: { slug: string }) => {
        return section.slug == "empower";
    })[0];

    const sProof = sections.filter((section: { slug: string }) => {
        return section.slug == "proof";
    })[0];

    const sBenefits = sections.filter((section: { slug: string }) => {
        return section.slug == "benefits";
    })[0];

    const sConcept = sections.filter((section: { slug: string }) => {
        return section.slug == "concept";
    })[0];

    const sServices = sections.filter((section: { slug: string }) => {
        return section.slug == "services";
    })[0];

    const sTry = sections.filter((section: { slug: string }) => {
        return section.slug == "try";
    })[0];

    const sTeam = sections.filter((section: { slug: string }) => {
        return section.slug == "team";
    })[0];

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Polify</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta property="og:title" content="Polify" />
                <meta property="og:description" content="Polify, Your Long Term Partner." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="./favicon-32x32.png" />
                <meta name="msapplication-TileColor" content="#2d89ef" />
                <meta name="theme-color" content="#ffffff" />

                <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
                <link rel="manifest" href="./site.webmanifest" />
                <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#5bbad5" />

                {/* <link rel="stylesheet" href="css/normalize.css" />
                <link rel="stylesheet" href="css/boilerplate.css" /> */}

                {/* <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
                /> */}

                {/* <link rel="stylesheet" href="css/main.min.css" /> */}
            </Head>
            <main data-bs-spy="scroll" data-bs-target="#navbar" data-bs-smooth-scroll="true">
                <Navbar />

                <Top partner={sPartner} empower={sEmpower} />

                <Proof data={sProof} />

                {/* <section id="news" className="pb-5">
                    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                        <div className="row align-items-center g-lg-5 py-2">
                            <div className="col-lg-7 text-center text-lg-start">
                                <h3>News</h3>
                                <h1 className="display-5 fw-bold lh-1 mb-0">Whats New With Us</h1>
                            </div>
                        </div>

                        <div className="row mb-2">
                            {posts.map(
                                (post: {
                                    id: any;
                                    title: any;
                                    author: any;
                                    coverImage: any;
                                    datePublished: any;
                                    slug: any;
                                    content: any;
                                }) => (
                                    <BlogPost
                                        key={post.id}
                                        title={post.title}
                                        author={post.author}
                                        coverImage={post.coverImage}
                                        datePublished={post.datePublished}
                                        slug={post.slug}
                                        content={post.content}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </section> */}

                <div id="darkWrapper">
                    <Benefits data={sBenefits} />

                    <Concept data={sConcept} />

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

                <div id="diag1"></div>
                <div id="diag2"></div>

                <div id="pinkWrapper">
                    <div className="wrapper">
                        <Services data={sServices} />

                        <Try data={sTry} />
                    </div>
                </div>

                <div id="diag3"></div>

                <Team data={sTeam} authors={authors} />

                <br />
                <br />
                <br />
                <br />

                <section id="bottom">
                    <div className="bgWrapper"></div>

                    <div id="contact" className="container-lg col-11 col-lg-10 col-xxxl-7 px-4 py-5 content">
                        <div className="row py-5 mb-5 justify-content-between">
                            <div className="col-lg-6 text-lg-start py-3 my-5 my-lg-1">
                                <h2 className="display-5 fw-bold lh-1 mb-5">
                                    Ready To Take The <br />
                                    Next Step?
                                </h2>
                                <p className="col-lg-10 fs-4">
                                    We believe that we have found the most effective concept, through Polify you will
                                    receive marketing that not only is cost efficient but also gives you a more stable
                                    presence in the market with more loyal customers. <br />
                                    <br />
                                    Do not hesitate to reach out to us, we have solutions for projects of all sizes.
                                    Take advantage of our new offer and give the Polify concept a try.
                                </p>
                            </div>

                            <div className="col-lg-5 col-md-12">
                                <form className="p-4 p-md-5 rounded-4 shadow-lg">
                                    <h3 className="fw-bold lh-1 mb-3">Tell Us About Yourself.</h3>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="name"
                                            className="form-control"
                                            id="fullname"
                                            placeholder="John Doe"
                                        />
                                        <label htmlFor="fullname">Your Name*</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="name@example.com"
                                        />
                                        <label htmlFor="email">Email*</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="projects"
                                            placeholder="example.com/my-project"
                                        />
                                        <label htmlFor="projects">Your Project Links*</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea
                                            /* type="text" */
                                            className="form-control"
                                            id="message"
                                            placeholder="Leave a message here..."
                                            /* style="height: 100px" */
                                        ></textarea>
                                        <label htmlFor="message">Your Message</label>
                                    </div>

                                    <button className="w-100 btn btn-lg btn-primary text-white mt-4" type="submit">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <footer>
                        <div className="container content col-xl-10 col-xxl-7">
                            <div className="pt-4 mt-4 mb-5">
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        {/*  <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                            <div className="d-flex flex-column">
                                                <img src="./img/polify.svg" alt="polify logo" width="170px" />
                                                <span className="slogan">Your Long Term Partner</span>
                                            </div>
                                        </a> */}
                                    </div>

                                    <div className="text-center">
                                        <div className="row p-2">
                                            <h4>Follow Us</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <a className="social" href="#">
                                                    <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="social" href="#">
                                                    <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row">
                                    <span className="mt-4 copyright">
                                        © POLIFY 2023. <a href="#">Terms & Privacy</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div className="borderWrapper container col-xl-10 col-xxl-7 px-3">
                        <div></div>
                    </div>
                    <div className="waves">
                        <Image src={imgWaves} alt="waves" style={{ width: "70%", height: "auto" }} />
                    </div>
                </section>

                {/*   <div className={styles.description}>
                    <p>
                        Get started by editing&nbsp;
                        <code className={styles.code}>src/pages/index.tsx</code>
                    </p>
                    <div>
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{" "}
                            <Image
                                src="/vercel.svg"
                                alt="Vercel Logo"
                                className={styles.vercelLogo}
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </div>
                </div> */}
            </main>
        </>
    );
}
