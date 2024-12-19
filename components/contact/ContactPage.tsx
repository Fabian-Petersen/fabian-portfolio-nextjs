import * as React from "react";
import PageHeading from "@/components/PageHeading";
import ContactForm from "@/components/contact/ContactForm";
import ScrollAnimation from "@/app/animations/ScrollAnimation";
import SocialsLinkIcons from "@/components/features/SocialsLinkIcons";

const ContactPage: React.FC = () => {
  return (
    <main id="contact" className="flex w-full dark:bg-bgDark bg-slate-200 p-4">
      <div className="flex flex-col w-full gap-6 sm:px-[var(--all-pages-spacing)] px-[var(--all-pages-specing-small) md:max-w-6xl mx-auto min-h-auto md:min-h-screen">
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
      </div>
    </main>
  );
};

export default ContactPage;
