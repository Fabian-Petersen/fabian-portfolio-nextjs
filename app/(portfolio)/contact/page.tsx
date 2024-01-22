import * as React from "react";
import PageHeading from "@/components/PageHeading";
import ContactForm from "@/components/contact/ContactForm";
import SocialsLinkIcons from "@/components/features/SocialsLinkIcons";

const ContactPage: React.FC = () => {
  return (
    <main className="w-full flex flex-col gap-6 px-6 max-w-6xl mx-auto min-h-screen">
      <span className="inset-0 absolute clip-path-contact z-[-100] dark:bg-gray-900"></span>
      <PageHeading title="Let's Get in Touch" />
      <ContactForm />
      <div className="mx-auto">
        <SocialsLinkIcons />
      </div>
    </main>
  );
};

export default ContactPage;
