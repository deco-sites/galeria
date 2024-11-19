import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function HeaderVideoWithText({
  title,
  description
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        {title && (
            <h2 id="headerVideoWithText-title" className="translate-y-12 opacity-0 duration-1000 text-[6vw] font-helvetica font-bold leading-tight-0.95 tracking-tight-2 text-white text-clip w-[80%] md:w-full">
              {title}
            </h2>
          )}
          {description && (
            <div className="mt-4">
                <p id="headerVideoWithText-description" className="translate-y-12 opacity-0 duration-1000 text-[16px] font-archivo font-light text-gray max-w-md">
                    {description}
                </p> 
            </div>
          )}
        <Script />
    </>
  );
}

export default HeaderVideoWithText;