import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { GraphQLClient, gql } from "graphql-request";

import imgWaves from "../../public/waves.svg";

/* import BlogPost from "@/components/BlogPost"; */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Top from "@/sections/Top";
import Proof from "@/sections/Proof";
import Benefits from "@/sections/Benefits";
import Concept from "@/sections/Concept";
import Services from "@/sections/Services";
import Try from "@/sections/Try";
import Team from "@/sections/Team";
import Contact from "@/sections/Contact";

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
            links
        }
    }
`;

export async function getStaticProps() {
    const { sections, authors } = await cms.request(query);
    /* console.log("GQL data:", sections); */
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

    const sContact = sections.filter((section: { slug: string }) => {
        return section.slug == "contact";
    })[0];

    const cFooter = sections.filter((section: { slug: string }) => {
        return section.slug == "footer";
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

                <div id="bottom">
                    <div className="bgWrapper"></div>

                    <Contact data={sContact} />

                    <Footer data={cFooter} />

                    <div className="borderWrapper container col-xl-10 col-xxl-7 px-3">
                        <div></div>
                    </div>
                    <div className="waves">
                        <Image src={imgWaves} alt="waves" style={{ width: "70%", height: "auto" }} />
                    </div>
                </div>

            </main>
        </>
    );
}
