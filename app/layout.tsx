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
import MobileMenuFullWidth from "@/components/features/mobileNavbar/MobileMenuFullWidth";

// $ Context Providers
import ThemeContextProvider from "./ContextAPI_Hooks/usethemeContext";
import MobileNavContextProvider from "./ContextAPI_Hooks/useMobileNavbarContext";

export const metadata: Metadata = {
  title: "Fabian Portfolio",
  description: "Developer, Designer, and Creator",
};

interface RootLayoutProps {
  children: React.ReactNode;
  withRouter: React.ComponentType;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="font-poppins">
      <body className="bg-white dark:bg-bgDark min-h-full">
        <ThemeContextProvider>
          <MobileNavContextProvider>
            <MobileMenuFullWidth />
          </MobileNavContextProvider>
          <Navbar />
          <main className="md:px-40 2xl:px-96 grid grid-cols-1fr">
            {children}
          </main>
          <PageLinkIconsMenu />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
