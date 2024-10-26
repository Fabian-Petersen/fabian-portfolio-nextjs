import PageHeading from "@/components/PageHeading";

const Messages = () => {
  return (
    <main className="relative w-full flex flex-col gap-8 px-6 md:max-w-6xl mx-auto min-h-screen capitalize">
      <PageHeading title="messages" />
      <hr className="border border-gray" />
    </main>
  );
};

export default Messages;
