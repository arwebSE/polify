import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";
import Script from "next/script";

import type { AppProps } from "next/app";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
    const scriptUrl = "https://www.googletagmanager.com/gtag/js?id=" + process.env.ANALYTICS_ID;    
    return (
        <>
            <Script strategy="afterInteractive" src={scriptUrl} />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.ANALYTICS_ID}');
                    `,
                }}
            />
            <Component {...pageProps} />
        </>
    );
}
