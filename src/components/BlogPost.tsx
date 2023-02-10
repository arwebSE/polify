import React from "react";
import Link from "next/link";

import styles from "@/styles/BlogPost.module.css";

const BlogPost = ({ title, author, coverImage, datePublished, slug }) => {
    return (
        
            <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success">Design</strong>
                        <h3 className="mb-0">{title}</h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="mb-auto">
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                        </p>
                        <a href="#" className="stretched-link">
                            Continue reading
                        </a>
                        <Link href={"/posts/"}>
                            <div className={styles.imgContainer}>
                                
                            </div>
                        </Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                         <img src={coverImage} alt="cover photo" />
                    </div>
                </div>
            </div>
    );
};

export default BlogPost;
