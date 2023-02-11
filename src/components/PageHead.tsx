import React from "react";

export default function PageHead() {
    return (
        <>
            <meta charSet="utf-8" />
            <title>Polify</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <meta property="og:title" content="Polify" />
            <meta property="og:description" content="Polify, Your Long Term Partner." />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="./favicon-32x32.png" />
            <meta name="msapplication-TileColor" content="#2d89ef" />
            <meta name="theme-color" content="#ffffff" />

            <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
            <link rel="manifest" href="./site.webmanifest" />
            <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#5bbad5" />

            {/* <link rel="stylesheet" href="css/normalize.css" />
                <link rel="stylesheet" href="css/boilerplate.css" /> */}

            {/* <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
                /> */}

            {/* <link rel="stylesheet" href="css/main.min.css" /> */}
        </>
    );
}
