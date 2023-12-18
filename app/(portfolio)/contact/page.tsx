import * as React from "react";
import PageHeading from "@/components/PageHeading";
import ContactBG from "@/public/backgroundSVG/ContactBG";

const ContactPage: React.FC = () => {
  return (
    <main>
      <div className="bg-cover bg-center absolute top-0 left-0 z-[-100] h-full w-full">
        <ContactBG />
      </div>
      <PageHeading title="Contact" />
    </main>
  );
};

export default ContactPage;
