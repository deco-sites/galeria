import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function Carousel({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="fixed top-0 left-0">
        <div id="carouselCoursor" className="flex items-center justify-center absolute hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 16 16" fill="none" id="Chevron-Left--Streamline-Majesticons" height="28" width="28"><desc>Chevron Left Streamline Icon: https://streamlinehq.com</desc><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.166666666666666 4.083333333333333 -2.916666666666666 2.916666666666666 2.916666666666666 2.916666666666666"></path></svg>
          <div id="carouselCoursorCircle" className="border-2 border-white rounded-full h-8 w-8 pointer-events-none opacity-90"></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 16 16" fill="none" id="Chevron-Right--Streamline-Majesticons" height="28" width="28"><desc>Chevron Right Streamline Icon: https://streamlinehq.com</desc><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5.833333333333332 4.083333333333333 2.916666666666666 2.916666666666666 -2.916666666666666 2.916666666666666"></path></svg>
        </div>
      </div>
      <div class="overflow-hidden embla py-5 hover:cursor-grab" id="emblaCarousel">
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