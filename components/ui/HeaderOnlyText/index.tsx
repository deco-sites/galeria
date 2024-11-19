import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function HeaderOnlyText({
  title,
  description
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <section className="bg-black">
            <div class="container flex flex-col justify-center items-center">
                <div className="!pt-[180px] !pb-[160px] md:!pb-[180px] !px-[15px] mb-[30px] grid gap-y-2">
                    <h2 id="headerOnlyText-title" className="opacity-0 duration-1000 translate-y-12 text-lg font-helvetica font-medium leading-tight-28 text-gray-light font-bold text-center">{title}</h2>
                    <div className="w-[270px] md:w-fit">
                        <p id="headerOnlyText-description" className="opacity-0 duration-1000 translate-y-12 text-[6vw] font-helvetica font-bold leading-tight-0.95 tracking-tight-2 text-white text-center">{description}</p>
                    </div>
                </div>
            </div>
        </section>
        <Script />
    </>
  );
}

export default HeaderOnlyText;