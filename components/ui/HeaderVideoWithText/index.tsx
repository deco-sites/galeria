import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function HeaderVideoWithText({
  caption
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      {caption.map(item => (
        <>
          {item.type == "Título" && item.content.length < 70 && (
            <h2 id="headerVideoWithText-title" className="translate-y-12 opacity-0 duration-1000 text-[6vw] font-helvetica font-bold leading-tight-0.95 tracking-tight-2 text-white text-clip w-[80%] md:w-full">
              {item.content}
            </h2>
          )}
          {item.type == "Título" && item.content.length >= 70 && (
            <h2 id="headerVideoWithText-title" className="translate-y-12 opacity-0 duration-1000 text-[4.5vw] font-helvetica font-bold leading-[4.5vw] tracking-[-1.36px] text-white text-clip w-[80%]">
              {item.content}
            </h2>
          )}
          {item.type == "Descrição" && (
            <div className="mt-4">
                <p id="headerVideoWithText-description" className="translate-y-12 opacity-0 duration-1000 text-[18px] font-helvetica font-medium text-gray max-w-md md:leading-tight-28">
                    {item.content}
                </p> 
            </div>
          )}
        </>
      ))}
      <Script />
    </>
  );
}

export default HeaderVideoWithText;