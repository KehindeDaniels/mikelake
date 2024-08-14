import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Layout from "../app/layout";
import "../styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
