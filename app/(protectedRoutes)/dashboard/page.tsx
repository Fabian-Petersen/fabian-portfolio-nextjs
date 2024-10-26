import AuthPageHeading from "@/components/protectedRoutes/AuthPageHeading";

const Dashboard = () => {
  return (
    <main className="grid gap-2">
      <AuthPageHeading title="Dashboard" />
      <div className="border border-white">
        <article className="h-auto w-full grid sm:grid-cols-2 md:grid-cols-4 gap-2 p-2">
          <div className="h-[8rem] bg-slate-500 rounded-md"></div>
          <div className="h-[8rem] bg-slate-500 rounded-md"></div>
          <div className="h-[8rem] bg-slate-500 rounded-md"></div>
          <div className="h-[8rem] bg-slate-500 rounded-md"></div>
        </article>
        <div className="h-[20rem] border border-white grid sm:grid-cols-2 gap-2 p-2">
          <article className="border border-red-200 bg-gray-800 h-full w-full grid md:grid-cols-2 gap-2 p-2 rounded-md"></article>
          <article className="border border-red-200 bg-gray-800 h-full w-full grid md:grid-cols-2 gap-2 p-2 rounded-md"></article>
        </div>
        <div className="h-[20rem] border border-white grid sm:grid-cols-2 gap-2 p-2">
          <article className="border border-red-200 bg-gray-800 h-full w-full grid md:grid-cols-2 gap-2 p-2 rounded-md"></article>
          <article className="border border-red-200 bg-gray-800 h-full w-full grid md:grid-cols-2 gap-2 p-2 rounded-md"></article>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
