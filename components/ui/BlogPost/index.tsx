import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function BlogPost({
  title,
  company,
  year
 }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
          <div className="container py-[5%] inset-0 flex items-center justify-start box-border absolute">
            <div className="pl-[8%] flex flex-col gap-6">
              <p id="BlogPostComponent-title" className="opacity-0 duration-1000 translate-y-12 text-4.5vw font-helvetica leading-none font-bold text-white uppercase">{title}</p>
              <div id="BlogPostComponent-div" className="opacity-0 duration-1000 translate-y-12 mt-[25px] md:mt-[5px] flex flex-col md:flex-row md:gap-x-[25px] gap-y-[25px]">
                <div className="pr-[30px] grid gap-y-[15px] md:gap-y-[5px] h-full border-r border-gray-border">
                  <p className="text-dynamic-work font-helvetica leading-tight-22 text-white opacity-7">Cliente</p>
                  <p className="text-dynamic-work font-helvetica text-white">{company}</p>
                </div>
                <div className="grid gap-y-[15px] md:gap-y-[5px]">
                  <p className="text-dynamic-work font-helvetica leading-tight-22 text-white opacity-7">Ano</p>
                  <p className="text-dynamic-work font-helvetica leading-tight-22 text-white">{year}</p>
                </div>
              </div>
            </div>
          </div>
        <Script />
    </>
  );
}

export default BlogPost;