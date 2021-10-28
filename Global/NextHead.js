import Head from "next/head";

export const NextHead = ({ title }) => {
    return (
        <Head>
            <link rel="shortcut icon" href="cloud-white.png" type="image/x-icon" />
            <title>{title}</title>

            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
    );
};