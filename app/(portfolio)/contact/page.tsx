import * as React from "react";
import PageHeading from "@/components/PageHeading";
import ContactForm from "@/components/contact/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <main className="w-full px-6 md:max-w-6xl mx-auto min-h-screen">
      <PageHeading title="Let's Get in Touch" />
      <ContactForm />
    </main>
  );
};

export default ContactPage;
