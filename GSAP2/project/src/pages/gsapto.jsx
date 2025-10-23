import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTo = () => {
  useGSAP(() => {
    gsap.to(".box", {
      x: 200,
      //y:200,
     
      //rotation: 360,
      repeat: -1,
      duration: 1,
      yoyo: true,
      //ease: "circular.inOut",
      ease:"elastic",
      stagger: 0.2 // Each box's animation starts 0.2 seconds after the previous
    });
  }, []);

  return (
    <div className="mt-10 flex flex-col gap-4">
      <div className="box w-20 h-20 bg-amber-600" />
      <div className="box w-20 h-20 bg-blue-600" />
      <div className="box w-20 h-20 bg-green-600" />
      <div className="box w-20 h-20 bg-red-600" />
    </div>
  );
};

export default GsapTo;