import React, { ReactNode } from "react";
import "../styles/globals.css";
import { Providers } from "@/context/provider";
import { Inter, Manrope, Work_Sans } from "next/font/google";

// Add custom element type for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "call-us-selector": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        phonesystemUrl?: string;
        party?: string;
      };
    }
  }
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Mike Lake</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://mikelake.vercel.app/images/share.png"
        />
        <meta
          name="description"
          content="Mike Lake - A multifaceted Product Designer showcasing innovative and creativity."
        ></meta>
        <meta
          name="keywords"
          content="Mike Lake, Product Design, Web Development, User Experience, Portfolio"
        ></meta>
        <meta name="author" content="Mike Lake"></meta>

        {/*  */}
        <meta property="og:title" content="Mike Lake | Portfolio"></meta>
        <meta property="og:url" content="https://mikelake.vercel.app/"></meta>
        <meta
          property="og:image"
          content="https://mikelake.vercel.app/images/share.png"
        ></meta>
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} ${workSans.variable}`}
      >
        <Providers>
          {/* <Header /> */}
          <main>{children}</main>
        </Providers>
        {/* 3CX Live Chat - Dynamic Configuration */}
        <call-us-selector
          phonesystem-url="https://1206.3cx.cloud"
          party="LiveChat113082"
        ></call-us-selector>

        {/* Existing GetButton script
        <script
          defer
          src="https://static.getbutton.io/widget/bundle.js?id=VYSv1"
        ></script> */}

        {/* 3CX Live Chat Script */}
        <script
          defer
          src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js"
          id="tcx-callus-js"
          charSet="utf-8"
        ></script>
      </body>
    </html>
  );
};

export default Layout;
