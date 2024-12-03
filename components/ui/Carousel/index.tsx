import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function Carousel({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <div class="overflow-hidden embla py-5" id="emblaCarousel">
            <div class="flex embla__container py-5">
              {items.map((item, index) => (
                <div key={index} class="min-w-full flex-none relative text-center embla__slide">
                  <div class="w-full flex justify-center">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h3 class="font-bold my-5 text-white text-2xl"><i>{item.title}</i></h3>
                  <p class="text-gray-light text-[19px]">{item.description}</p>
                </div>
              ))}
            </div>
        </div>
        <Script />
    </>
  );
}

export default Carousel;