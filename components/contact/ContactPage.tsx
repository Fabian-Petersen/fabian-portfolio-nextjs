import * as React from "react";
import PageHeading from "@/components/PageHeading";
import ContactForm from "@/components/contact/ContactForm";
import SocialsLinkIcons from "@/components/features/SocialsLinkIcons";

const ContactPage: React.FC = () => {
  return (
    <main
      id="contact"
      className="w-full flex flex-col justify-evenly gap-6 px-2 sm:px-6 max-w-6xl mx-auto min-h-screen"
    >
      <span className="inset-0 absolute clip-path-contact z-[-100] dark:bg-gray-900"></span>
      <PageHeading title="Let's Get in Touch" />
      <ContactForm />
    </main>
  );
};

export default ContactPage;
