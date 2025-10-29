import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const STScrub = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#c",
        start: "top center", // Start when top of #c hits center of viewport
        end: "top 100px", // End 300px after the start of the trigger
        scrub: 3,
        markers: true, // For debugging
      },
      defaults: { ease: "none" }, // Default ease for all tweens
    });

    t1.to("#c", {
      x: 400,
      rotation: 360,
      duration: 3, // Duration for this segment
    })
      .to("#c", {
        backgroundColor: "pink",
        duration: 1, // Duration for this segment
      })
      .to("#c", {
        x: 0,
        duration: 1, // Duration for this segment
      });
  }, []);

  return (
    <div className="flex flex-col gap-10 mt-10">
      <div id="a" className="box w-20 h-20 bg-red-500 mt-20 mb-20" />
      <div id="b" className="box w-20 h-20 bg-yellow-500 mt-20 mb-20" />
      <div id="c" className="box w-20 h-20 bg-green-500 mt-20 mb-20" />
      <div id="d" className="box w-20 h-20 bg-purple-500 mt-40 mb-20" />
    </div>
  );
};

export default STScrub;