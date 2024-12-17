"use client";
// $ Layout for the whole app, including the navbar.
// $ The pages for the about, projects, and contact pages will be rendered here, however similarities on those pages are managed in the portfolio layout.
// $ The MobileNavbar is rendered on small screens and the Navbar is rendered on larger screens.
// $ The Social Icons and Nav Links are rendered on larger screens, the MobileNavbar handles those on smaller screens.

import { usePathname } from "next/navigation";

// $ Components
import Navbar from "@/components/features/navbar/Navbar";
import ScrollToTopButton from "@/components/features/ScrollToTopButton";
import Footer from "@/components/features/footer/Footer";
import Header from "@/components/header/Header";

// $ Context Providers
import Providers from "./providers";
import NavbarProgressBar from "@/components/features/navbar/NavbarProgressBar";

// $ Import custom hook to check if the size is mobile or not to change Navbar components
import useIsMobile from "@/customHooks/useScreenSize";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const isMobile = useIsMobile(640);
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  return (
    <html lang="en" className="font-poppins">
      <body className="bg-bgLight dark:bg-bgDark">
        <Providers>
          {/* <MobileMenuLinks /> */}
          {isMobile ? <Header /> : <Navbar />}
          <NavbarProgressBar />
          {children}
          {isLoginPage ? null : <ScrollToTopButton />}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
