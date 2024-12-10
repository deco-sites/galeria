import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import MagicCursor from "../MagicCursor/index.tsx";

function NextPage({ 
    text,
    hoverText,
    image,
    url,
    ...props 
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>

        <div id="nextPage" className="relative max-w-4xl mx-auto text-center py-36">
        
            <div id="nextPageCursor" className="rounded-full w-[240px] h-[240px] fixed top-0 left-0 pointer-events-none hidden">
                {/* Image */}
                <Image
                    id="nextPageImage"
                    src={image}
                    alt={text}
                    className="w-[240px] h-[240px] object-cover rounded-full"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            {/* Scroll Container */}
            <div id="scroll-container" className="relative">
            
                {/* Page Navigation */}
                <div className="tt-page-nav relative mx-auto">
                    <a href={url} className="relative flex items-center text-center no-underline overflow-hidden group">
                        {/* Title */}
                        <div className="relative block left-1/2 text-4xl md:text-6xl lg:text-[clamp(42px,6vw,110px)] font-bold text-white opacity-40 whitespace-nowrap transform -translate-x-1/2 transition-transform duration-700 ease-[cubic-bezier(0.51,0.57,0.17,1)] group-hover:-translate-y-full font-helvetica uppercase">
                            {text}
                        </div>
                        {/* Hover Title */}
                        <div className="absolute left-1/2 w-full text-4xl md:text-6xl lg:text-[clamp(36px,6vw,110px)] font-bold text-white whitespace-nowrap transform -translate-x-1/2 translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.51,0.57,0.17,1)] group-hover:translate-y-0 font-helvetica uppercase">
                            <div className="relative overflow-hidden">
                                <div
                                    className="flex w-[200%] animate-marquee"
                                    style={{ animation: "marquee 7s linear infinite" }}
                                >
                                    <span className="flex-shrink-0 w-1/3 text-center">{hoverText}</span>
                                    <span className="mx-2 text-white">•</span>
                                    <span className="flex-shrink-0 w-1/3 text-center">{hoverText}</span>
                                    <span className="mx-2 text-white">•</span>
                                    <span className="flex-shrink-0 w-1/3 text-center">{hoverText}</span>
                                    <span className="mx-2 text-white">•</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <Script 
            text={text} 
            hoverText={hoverText} 
        />
    </>
  );
}

export default NextPage;