import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap-trial/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease : "none",duration: 2 })

const GsapPinning = () => {
    useGSAP(()=>{
        const t1 = gsap.timeline()
        t1.from("#redSection", {xPercent : -100,})
          .from("#yellowSection", {xPercent : 100,})
          .from("#greenSection", {xPercent : -100,})
          .from("#violetSection", {xPercent : 100,})
    })
    return (
    <div className="container  flex flex-col h-screen w-screen">
      <section id="redSection" className="pt-80 pb-80  panel w-screen h-screen bg-red-500 flex items-center justify-center text-white text-5xl font-bold">
        Red Section
      </section>
      <section id="yellowSection" className="pt-80 pb-80 panel w-screen h-screen bg-yellow-500 flex items-center justify-center text-black text-5xl font-bold">
        Yellow Section
      </section>
      <section id="greenSection" className="pt-80 pb-80 panel w-screen h-screen bg-green-500 flex items-center justify-center text-white text-5xl font-bold">
        Green Section
      </section>
      <section id="violetSection" className="pt-80 pb-80 panel w-screen h-screen bg-purple-600 flex items-center justify-center text-white text-5xl font-bold">
        Violet Section
      </section>
    </div>
  );

}

export default GsapPinning