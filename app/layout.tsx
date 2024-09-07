// $ Layout for the whole app, including the navbar.
// $ The pages for the about, projects, and contact pages will be rendered here, however similarities on those pages are managed in the portfolio layout.
// $ The MobileNavbar is rendered on small screens and the Navbar is rendered on larger screens.
// $ The Social Icons and Nav Links are rendered on larger screens, the MobileNavbar handles those on smaller screens.

import * as React from "react";
import type { Metadata } from "next";
import "./globals.css";

// $ Components
import Navbar from "@/components/features/navbar/Navbar";
import PageLinkIconsMenu from "@/components/features/PageLinkIconsMenu";
// import MobileMenuFullWidth from "@/components/features/mobileNavbar/MobileMenuFullWidth";

// $ Context Providers
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Fabian Portfolio",
  description: "Developer, Designer, and Creator",
};

type Props = {
  children: React.ReactNode;
};

// ? Add props to the children without explicitly defining them
// import { PropsWithChildren } from "react";

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="font-poppins">
      <body className="bg-white dark:bg-bgDark">
        <Providers>
          <Navbar />
          {/* <MobileMenuFullWidth /> */}
          {children}
          <PageLinkIconsMenu />
        </Providers>
      </body>
    </html>
  );
}
