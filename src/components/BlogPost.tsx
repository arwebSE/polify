import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/BlogPost.module.css";

const BlogPost = ({ title, author, coverImage, date, slug, content, tags }: any) => {
    return (
        <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    {tags && (
                        <div>
                            {tags.map((tag: string) => (
                                <span key={tag}>
                                <span  className="badge text-bg-primary">
                                    {tag}
                                    </span>
                                    {" "}
                                </span>
                            ))}
                        </div>
                    )}
                    <h3 className="mb-0">{title}</h3>
                    <div className="mb-1 text-muted">{date}</div>

                    <div dangerouslySetInnerHTML={{ __html: content.html }} />

                    <Link className="stretched-link" href={"/posts/" + slug}>
                        Continue Reading
                    </Link>

                    <div>
                        <h3>{author?.name}</h3>
                    </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <Image src={coverImage?.url} alt="cover photo" width={200} height={250} />
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
