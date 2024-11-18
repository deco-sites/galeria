import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

function NextPage({ 
    text,
    hoverText,
    image,
    url,
    ...props 
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div id="nextPage" {...props}>
        <a href={url} class="container !py-[150px] relative block bg-black">
          <div id="nextPageImage" className="hidden w-[200px] h-[200px]">
              <Image
                  src={image || ""}
                  alt={text}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  decoding="async"
              />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p id="nextPageCaption" className="text-[4.5vw] font-helvetica font-bold leading-tight-1 tracking-tight-1.36 text-center uppercase">
              <span class="textToClone">{text}</span>
            </p>
          </div>
        </a>
      </div>
      <Script 
        text={text} 
        hoverText={hoverText} 
        />
    </>
  );
}

export default NextPage;