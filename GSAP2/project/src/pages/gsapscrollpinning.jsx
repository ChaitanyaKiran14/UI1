import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 1 });

const GsapPinning = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "+=4000", // Adjust for scroll length
        scrub: true,
        pin: true,
        //pinSpacing : false, //to remove the space added due to pinning
        anticipatePin: 1,
      },
    });

    // Animate sections sliding in one after another
    t1.from("#yellowSection", { xPercent: 100 })
      .from("#greenSection", { xPercent: -100 })
      .from("#violetSection", { xPercent: 100 });
  });

  return (
    <div className="container relative w-screen h-screen overflow-hidden">
      {/* Base section stays visible initially */}
      <section
        id="redSection"
        className="absolute inset-0 bg-red-500 flex items-center justify-center text-white text-5xl font-bold"
      >
        Red Section
      </section>

      <section
        id="yellowSection"
        className="absolute inset-0 bg-yellow-500 flex items-center justify-center text-black text-5xl font-bold"
      >
        Yellow Section
      </section>

      <section
        id="greenSection"
        className="absolute inset-0 bg-green-500 flex items-center justify-center text-white text-5xl font-bold"
      >
        Green Section
      </section>

      <section
        id="violetSection"
        className="absolute inset-0 bg-purple-600 flex items-center justify-center text-white text-5xl font-bold"
      >
        Violet Section
      </section>
    </div>
  );
};

export default GsapPinning;
