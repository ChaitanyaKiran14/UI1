import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  useGSAP(() => {
    // Create a timeline with default properties
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
      repeat: -1, // Repeat the entire timeline indefinitely
      yoyo: true, // Reverse the timeline on each repeat
    });

    // Add animations to the timeline
    tl.from(".box", {
      x: 250, // Start 250px to the right
      //rotation: 360, // Start fully rotated
      stagger: 0.2, // Stagger each box by 0.2s
    })
      .to(".box", {
        opacity: 0.3, // Fade to 30% opacity
        scale: 1.5, // Scale up to 1.5x
        stagger: 0.2, // Stagger again
      }, "-=1") // Start 1s before the previous animation ends (overlap)
      .to(".box", {
        y: 100, // Move 100px down
        rotation: 0, // Reset rotation
        stagger: 0.2,
      }, "+=0.5"); // Start 0.5s after the previous animation ends
  }, []);

  return (
    <main>

      <div className="mt-20 flex flex-col gap-4">
        <div className="box w-20 h-20 bg-green-500 rounded-lg" />
        <div className="box w-20 h-20 bg-blue-500 rounded-lg" />
        <div className="box w-20 h-20 bg-red-500 rounded-lg" />
        <div className="box w-20 h-20 bg-amber-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTimeline;