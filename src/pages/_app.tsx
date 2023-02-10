import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import { useEffect } from "react";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return <Component {...pageProps} />;
}
