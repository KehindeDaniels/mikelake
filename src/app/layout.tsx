import React, { ReactNode } from "react";
import "../styles/globals.css";
import Header from "../components/header";
import { Providers } from "@/context/provider";

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
      <body>
        <Providers>
          {/* <Header /> */}
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
