import Head from "next/head";
import Image from "next/image";

import { GraphQLClient, gql } from "graphql-request";

import imgWaves from "../../public/waves.svg";

import PageHead from "@/components/PageHead";
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

    const getSection = (slug: string) => {
        return sections.filter((section: { slug: string }) => section.slug === slug)[0];
    };

    return (
        <>
            <Head>
                <PageHead title="Home" />
            </Head>
            <main data-bs-spy="scroll" data-bs-target="#navbar" data-bs-smooth-scroll="true">
                <Navbar />

                <Top partner={getSection("partner")} empower={getSection("empower")} />

                <Proof data={getSection("proof")} />

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
                    <Benefits data={getSection("benefits")} />

                    <Concept data={getSection("concept")} />
                </div>

                <div id="diag1"></div>
                <div id="diag2"></div>

                <div id="pinkWrapper">
                    <div className="wrapper">
                        <Services data={getSection("services")} />

                        <Try data={getSection("try")} />
                    </div>
                </div>

                <div id="diag3"></div>

                <Team data={getSection("team")} authors={authors} />

                <br />
                <br />
                <br />
                <br />

                <div id="bottom">
                    <div className="bgWrapper"></div>

                    <Contact data={getSection("contact")} />

                    <Footer data={getSection("footer")} />

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
