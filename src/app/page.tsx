import SideBar from "./components/sideBar";

export default function Home() {
  return (
    <div className="min-h-screen flex">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <SideBar></SideBar>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        teste
      </footer>
    </div>
  );
}
