import React from "react";
import Link from "next/link";

import styles from "@/styles/BlogPost.module.css";

const BlogPost = ({ title, author, coverImage, datePublished, slug, content }: any) => {
    return (
        <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">Design</strong>
                    <h3 className="mb-0">{title}</h3>
                    <div className="mb-1 text-muted">Nov 11</div>
                    <p className="mb-auto">{content.html}</p>
                    <Link className="stretched-link" href={"/posts/" + slug}>
                        Continue Reading
                    </Link>

                    <div>
                        <h3>{author?.name}</h3>
                    </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img src={coverImage?.url} alt="cover photo" width={200} height={250} />
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
