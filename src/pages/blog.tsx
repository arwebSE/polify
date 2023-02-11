import React from "react";
import { GraphQLClient, gql } from "graphql-request";

import PageHead from "@/components/PageHead";

/* import BlogPost from "@/components/BlogPost"; */

const cms = new GraphQLClient(process.env.GQL_API || "");
const query = gql`
    query {
        posts {
            slug
            title
            content {
                html
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
    const { posts, authors } = await cms.request(query);
    /* console.log("GQL data:", sections); */
    return {
        props: { posts, authors },
        revalidate: 10,
    };
}

export default function Blog({ posts }: any) {
    return (
        <>
            <PageHead title="Blog" />
        </>
    );
}
