import PageHeading from "@/components/PageHeading";
import ContactMessagesTable from "@/components/ContactsMessagesTable";
import AuthPageHeading from "@/components/protectedRoutes/AuthPageHeading";

const ContactMessages = () => {
  return (
    <main className="relative w-full flex flex-col gap-8 px-6 md:max-w-6xl mx-auto min-h-screen capitalize">
      <AuthPageHeading title="Contact Messages" />
      <ContactMessagesTable />
    </main>
  );
};

export default ContactMessages;
