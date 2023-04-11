import React, { useRef, useEffect, ReactNode } from "react";
import styles from "./SeamlessScroller.module.scss";

interface SeamlessScrollerProps {
    children: ReactNode;
}

const SeamlessScroller = ({ children }: SeamlessScrollerProps) => {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollerRef.current) {
            const childrenArray = Array.from(scrollerRef.current.children);
            childrenArray.forEach((child) => {
                const clonedChild = child.cloneNode(true);
                scrollerRef.current?.appendChild(clonedChild);
            });
        }
    }, []);

    return (
        <div className={styles.logos}>
            <div className={styles.logosSlide} ref={scrollerRef}>
                {children}
            </div>
        </div>
    );
};
export default SeamlessScroller;
