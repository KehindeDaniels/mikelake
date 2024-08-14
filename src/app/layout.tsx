import React, { ReactNode } from "react";
import "../styles/globals.css";
import Header from "../components/header";
import { Providers } from "@/context/provider";
import { Inter, Manrope, Work_Sans } from "next/font/google";

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
        <title>My App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} ${workSans.variable}`}
      >
        <Providers>
          {/* <Header /> */}
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
