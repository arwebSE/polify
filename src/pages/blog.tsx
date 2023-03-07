import React from "react";
import { GraphQLClient, gql } from "graphql-request";

import PageHead from "@/components/PageHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPost from "@/components/BlogPost";
import { Container } from "react-bootstrap";

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
        posts {
            id
            slug
            title
            date
            content {
                html
            }
            coverImage {
                url
            }
            author {
                id
                name
                title
                picture {
                    url
                }
            }
            tags
        }
    }
`;

export async function getStaticProps() {
    const { sections, posts } = await cms.request(query);
    /* console.log("GQL data:", sections); */
    return {
        props: { sections, posts },
        revalidate: 10,
    };
}

export default function Blog({ sections, posts }: any) {
    const getSection = (slug: string) => {
        return sections.filter((section: { slug: string }) => section.slug === slug)[0];
    };

    return (
        <>
            <PageHead />

            <main>
                <Navbar data={getSection("navbar")} />

                <br /><br /><br />
                <br /><br /><br />

                <Container>
                    <section style={{ minHeight: "100vh" }}>
                        <div className="row align-items-center g-lg-5 py-2">
                            <div className="col-lg-7 text-center text-lg-start">
                                <h3>News</h3>
                                <h1 className="display-5 fw-bold lh-1 mb-0">Whats New With Us</h1>
                            </div>
                        </div>
                        
                        <br /><br /><br />

                        <div className="row mb-2">
                            {posts.map((post: any) => (
                                <BlogPost
                                    key={post.id}
                                    title={post.title}
                                    author={post.author}
                                    coverImage={post.coverImage}
                                    slug={post.slug}
                                    date={post.date}
                                    content={post.content}
                                    tags={post.tags}
                                />
                            ))}
                        </div>
                    </section>
                </Container>

                <Footer footer={getSection("footer")} />
            </main>
        </>
    );
}
