import StickyCards from "./components/stickyCards/stickycards";

export default function Home() {
  return (
    <div>
      <section className="h-screen flex justify-center items-center ">
        <div>
          <h1>The Foundations</h1>
        </div>
      </section>
      <StickyCards/>


      <section className="h-screen flex justify-center items-center">
        <div>
          <h1>Closing</h1>
        </div>
      </section>
    </div>
    
  );
}
