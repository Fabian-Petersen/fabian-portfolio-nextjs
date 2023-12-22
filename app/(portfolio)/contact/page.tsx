import * as React from "react";
import PageHeading from "@/components/PageHeading";
// import ContactBG from "@/public/backgroundSVG/ContactBG";
import ContactBGHex from "@/public/backgroundHexSVG/ContactBGHex";

const ContactPage: React.FC = () => {
  return (
    <main>
      <div className="bg-cover bg-center fixed top-0 left-0 z-[-100] h-full w-full">
        <ContactBGHex />
      </div>
      <PageHeading title="Contact" />
    </main>
  );
};

export default ContactPage;
