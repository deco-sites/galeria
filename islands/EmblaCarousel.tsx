import { useEffect, useRef } from "preact/hooks";
import EmblaCarousel from "embla-carousel";

export interface EmblaItem {
  image: string;
  title: string;
  description: string;
}

const EmblaIsland = ({ items }: { items: EmblaItem[] }) => {
  const emblaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;  // Garante que só será executado no cliente

    if (!emblaRef.current) return;

    const embla = EmblaCarousel(emblaRef.current, {
      loop: true,
      speed: 1,
    });
    console.log("Embla initialized");

    return () => embla.destroy();
  }, []);

  return (
    <div class="overflow-hidden embla" ref={emblaRef}>
      <div class="flex embla__container">
        {items.map((item, index) => (
          <div key={index} class="min-w-full flex-none relative text-center embla__slide">
            <div class="w-full flex justify-center">
              <img src={item.image} alt={item.title} />
            </div>
            <h3 class="text-xl font-bold mt-2">{item.title}</h3>
            <p class="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaIsland;
