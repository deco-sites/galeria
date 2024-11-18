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
    
    <style>
        {`
        .anim-fadeinup {
            opacity: 0;
            transform: translateY(100px);
            transition: opacity 2.5s ease-out, transform 2.5s ease-out;
        }
        
        .anim-fadeinup.visible {
            opacity: 1;
            transform: translateY(0);
        }
            .tt-page-nav {
    position: relative;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
            .tt-pn-link {
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
}
    @media (min-width: 1025px) {
    .tt-pn-link:hover .tt-pn-hover-title {
        transform: translate3d(-50%, 0, 0);
        transition-delay: 0.1s;
    }
}
    @media (min-width: 1025px) {
    .tt-pn-link:hover .tt-pn-title {
        transform: translate3d(-50%, -100%, 0);
        transition-delay: 0.1s;
    }
}
    .font-h2 {
    font-family: Helvetica, sans-serif;
    /* font-size: 32px !important; */
    font-size: 4.5vw !important;
    font-weight: 700 !important;
    line-height: 1 !important;
    letter-spacing: -1.36px !important;
}
    .tt-pn-title {
    position: relative;
    display: block;
    left: 50%;
    font-size: clamp(42px, 6vw, 110px);
    font-weight: bold;
    font-weight: 500;
    color: #FFF;
    line-height: 1.6;
    opacity: .4;
    white-space: nowrap;
    transform: translate3d(-50%, 0, 0);
    transition: transform .6s cubic-bezier(0.51, 0.57, 0.17, 1);
    overflow: hidden;
    text-overflow: ellipsis;
}
    .tt-pn-hover-title {
    position: absolute;
    left: 50%;
    font-size: clamp(36px, 6vw, 110px);
    font-weight: bold;
    font-weight: 500;
    color: #FFF;
    line-height: 1.6;
    white-space: nowrap;
    transform: translate3d(-50%, 100%, 0);
    transition: transform .6s cubic-bezier(0.51, 0.57, 0.17, 1);
}
    .tt-page-nav .tt-pn-image {
    display: none;
}
    .tt-pn-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}
    @media (min-width: 1025px) {
    .tt-page-nav .tt-pn-link:hover .tt-pn-hover-title span {
        animation: marquee 3s linear infinite;
        animation-play-state: running;
    }
}
    @media (min-width: 1025px) {
    .tt-page-nav .tt-pn-hover-title span {
        display: inline-flex;
        align-items: center;
        padding-right: 5vw;
        animation: marquee 3s linear infinite;
        animation-play-state: paused;
    }
}
    /* Estilo do magic-cursor */
#magic-cursor.tt-pn-hover-on {
    transition: opacity 0.3s, width 0.3s, height 0.3s;
    opacity: 1;
    width: 20vw;
    height: 20vw;
}

/* Transições de elementos dentro do magic-cursor */
#magic-cursor {
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    pointer-events: none;
    z-index: 99999;
    opacity: 0;
}
    
#ball {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #FFF;
	pointer-events: none;
	border-style: solid;
	/*border-color: #FFF;*/
	border-radius: 50%;
	/* Note: border width handled through JS */
}

        `}
      </style>
      {/* <div id="nextPage" {...props} className="tt-page-nav tt-pn-scroll">
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
      </div> */}
      <div className="py-10">
      <div id="magic-cursor">
				<div id="ball"></div>
			</div>
        <div className="tt-page-nav tt-pn-scroll">
          <a href="pra-voce-chegar-la.html" className="tt-pn-link anim-fadeinup">
            <div className="tt-pn-title text-uppercase font-h2">Itaú</div>
            <div className="tt-pn-hover-title text-uppercase font-h2">UniclassName</div>
          </a> 

          <div className="tt-pn-subtitle anim-fadeinup">Próximo Trabalho</div>

          
          <div className="tt-pn-image">
          <Image
                  src={image || ""}
                  alt={text}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  decoding="async"
              />
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