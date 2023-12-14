import * as React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/features/navbar/Navbar";
import MobileNavbar from "@/components/features/mobileNavbar/MobileNavbar";
import PageHeading from "@/components/PageHeading";
import PageLinkIcons from "@/components/features/PageLinkIcons";

const inter = Inter({ subsets: ["latin"] });

// $ Layout for the whole app, including the navbar.
// $ The pages for the about, projects, and contact pages will be rendered here, however similarities on those pages are managed in the portfolio layout.
// $ The MobileNavbar is rendered on small screens and the Navbar is rendered on larger screens.
// $ The Social Icons and Nav Links are rendered on larger screens, the MobileNavbar handles those on smaller screens.

export const metadata: Metadata = {
  title: "Fabian Portfolio",
  description: "Developer, Designer, and Creator",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sm:hidden">
          <MobileNavbar />
        </div>
        <div className="hidden sm:block">
          <Navbar />
        </div>
        <main className="relative flex flex-col border-4 border-yellow-500 sm:grid sm:grid-cols-[10%_80%_10%] xl:grid-cols-[5%_90%_5%] xxl:w-[80%] xl:mx-auto min-h-[var(--sectionHeight)] w-screen font-montserrat">
          <div className="hidden sm:block w-full h-[2rem] sm:h-full border border-red-500 text-white">
            <p>Social Icons</p>
          </div>
          {children}
          <div className="hidden sm:block w-full h-[2rem] sm:h-full">
            <PageLinkIcons />
          </div>
        </main>
      </body>
    </html>
  );
}
