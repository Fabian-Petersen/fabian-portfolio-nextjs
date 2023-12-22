// $ Layout for the whole app, including the navbar.
// $ The pages for the about, projects, and contact pages will be rendered here, however similarities on those pages are managed in the portfolio layout.
// $ The MobileNavbar is rendered on small screens and the Navbar is rendered on larger screens.
// $ The Social Icons and Nav Links are rendered on larger screens, the MobileNavbar handles those on smaller screens.

import * as React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// $ Components
import Navbar from "@/components/features/navbar/Navbar";
import PageLinkIconsMenu from "@/components/features/PageLinkIconsMenu";
import SocialsLinkIcons from "@/components/features/SocialsLinkIcons";
import MobileMenuFullWidth from "@/components/features/mobileNavbar/MobileMenuFullWidth";

// $ Context Providers
import ThemeContextProvider from "./ContextAPI_Hooks/usethemeContext";
import MobileNavContextProvider from "./ContextAPI_Hooks/useMobileNavbarContext";

// $ Custom Hooks and Functions

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`inter.className bg-white dark:bg-bgDark`}>
        <ThemeContextProvider>
          <MobileNavContextProvider>
            <div className="md:hidden">
              {/* <MobileNavbar /> */}
              <MobileMenuFullWidth />
            </div>
          </MobileNavContextProvider>
          <div className="hidden md:block">
            <Navbar />
          </div>
          <main className="h-[var(--sectionHeight)] grid md:grid-cols-[10%_80%_10%] xxl:grid-cols-[15%_70%_15%] mx-auto font-montserrat">
            <div className="relative hidden md:block w-full h-[2rem] sm:h-full">
              <SocialsLinkIcons />
            </div>
            {children}
            <div className="hidden md:block w-full h-[2rem] sm:h-full">
              <PageLinkIconsMenu />
            </div>
          </main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
