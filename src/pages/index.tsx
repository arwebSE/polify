import Head from "next/head";

import { GraphQLClient, gql } from "graphql-request";

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

/* import styles from "@/styles/Home.module.scss"; */

const cms = new GraphQLClient(process.env.GQL_API || "");
const query = gql`
    query {
        sections {
            slug
            title
            subtitle
            header
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
                <PageHead />
            </Head>

            <Navbar />

            <main data-bs-spy="scroll" data-bs-target="#navbar" data-bs-smooth-scroll="true">
                <Top partner={getSection("partner")} empower={getSection("empower")} />

                <Proof data={getSection("proof")} />

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

                <Footer footer={getSection("footer")} contact={getSection("contact")} />
            </main>
        </>
    );
}
