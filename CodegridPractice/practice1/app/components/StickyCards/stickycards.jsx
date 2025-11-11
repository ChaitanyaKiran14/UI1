"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const StickyCards = () => {
  const container = useRef(null);

  const stickyCardsData = [
    {
      index: "01",
      title: "Modularity",
      image: "/sticky-cards/card_1.jpg",
      description:
        "Every element is built to snap into place. We design modular systems where clarity, structure, and reuse come first—no clutter, no excess.",
    },
    {
      index: "02",
      title: "Materials",
      image: "/sticky-cards/card_2.jpg",
      description:
        "From soft gradients to hard edges, our design language draws from real-world materials—elevating interfaces that feel both digital and tangible.",
    },
    {
      index: "03",
      title: "Precision",
      image: "/sticky-cards/card_3.jpg",
      description:
        "Details matter. We work with intention—aligning pixels, calibrating contrast, and obsessing over every edge until it just feels right.",
    },
    {
      index: "04",
      title: "Character",
      image: "/sticky-cards/card_4.jpg",
      description:
        "Interfaces should have personality. We embed small moments of play and irregularity to bring warmth, charm, and a human feel to the digital.",
    },
  ];

  useGSAP(() => {
    const stickyCards = gsap.utils.toArray(".sticky-card");

    stickyCards.forEach((card, index) => {
      // Pin each card as you scroll
      if (index < stickyCards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: stickyCards[stickyCards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
      }

      // Animate scale, rotation, overlay opacity as next card scrolls in
      if (index < stickyCards.length - 1) {
        ScrollTrigger.create({
          trigger: stickyCards[index + 1],
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * 0.25;
            const rotation = (index % 2 === 0 ? 5 : -5) * progress;
            const afterOpacity = progress;

            gsap.set(card, {
              scale: scale,
              rotation: rotation,
              "--after-opacity": afterOpacity,
            });
          },
        });
      }
    });
  }, { scope: container });

  return (
    <div ref={container} className="relative w-full h-full bg-[var(--bg)]">
      {stickyCardsData.map((card, index) => (
        <div
          key={index}
          className="sticky-card relative w-full h-[100svh] bg-[var(--fg)] text-[var(--bg)] p-6 flex gap-12 will-change-transform 
          before:content-[''] before:absolute before:inset-0 before:bg-black/50 before:opacity-[var(--after-opacity,0)] before:transition-opacity before:duration-100 before:ease-linear before:pointer-events-none before:z-20
          max-[1000px]:flex-col max-[1000px]:gap-0"
        >
          <div className="flex-[2] max-[1000px]:flex-1">
            <h1 className="text-6xl font-bold">{card.index}</h1>
          </div>

          <div className="flex-[4] pt-6">
            <div className="w-3/4 flex flex-col gap-6 max-[1000px]:w-full">
              <h1 className="text-4xl font-semibold">{card.title}</h1>

              <div className="aspect-[5/3]">
                <img src={card.image} alt="" className="w-full h-full object-cover" />
              </div>

              <div className="flex gap-6 max-[1000px]:flex-col max-[1000px]:gap-2">
                <div className="flex-[2] uppercase font-semibold">
                  <p>(About the state)</p>
                </div>
                <div className="flex-[4]">
                  <p className="text-lg font-medium">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyCards;
