import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function HeaderOnlyTextToWork({ 
  title,
  description
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <section className="bg-black">
            <div class="container flex flex-col justify-center items-center">
                <div className="!pt-[180px] !pb-[160px] md:!pb-[180px] !px-[15px] mb-[30px] grid gap-y-2">
                    <h2 id="headerOnlyTextToWork-title" className="opacity-0 duration-1000 translate-y-12 text-dynamic-base font-helvetica font-medium leading-tight-28 text-gray-light font-bold text-center">{title}</h2>
                    <div className="w-full max-w-[270px] md:max-w-none">
                        <p id="headerOnlyTextToWork-description" className="opacity-0 duration-1000 translate-y-12 text-4.5vw font-helvetica leading-none !tracking-tight-0.1 font-bold text-white text-center">{description}</p>
                    </div>
                </div>
            </div>
        </section>
        <Script />
    </>
  );
}

export default HeaderOnlyTextToWork;