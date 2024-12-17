import * as React from "react";
import PageHeading from "@/components/PageHeading";
import ContactForm from "@/components/contact/ContactForm";
import ScrollAnimation from "@/app/animations/ScrollAnimation";
import SocialsLinkIcons from "@/components/features/SocialsLinkIcons";

const ContactPage: React.FC = () => {
  return (
    <main
      id="contact"
      className="w-full flex flex-col justify-evenly gap-6 px-6 max-w-6xl mx-auto min-h-screen"
    >
      <span className="inset-0 absolute z-[-100] dark:bg-gray-900"></span>
      <PageHeading title="Let's Get in Touch" />
      <ScrollAnimation
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          x: { duration: 1.5 },
          opacity: { duration: 1.5, delay: 0.5 },
        }}
      >
        <ContactForm />
      </ScrollAnimation>
    </main>
  );
};

export default ContactPage;
