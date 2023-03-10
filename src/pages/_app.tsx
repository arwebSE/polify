import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GoogleAnalytics trackPageViews />
            <Component {...pageProps} />
        </>
    );
}
