import StickyCards from "./components/StickyCards/stickycards";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Sticky Cards</h1>
      </section>

      <StickyCards />

      <section className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">End of Page</h1>
      </section>
    </main>
  );
}
