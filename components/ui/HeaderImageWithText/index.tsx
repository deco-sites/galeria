import type { JSX } from "preact";
import Image from "apps/website/components/Image.tsx";
import Script, { type Props } from "./script.tsx";

function HeaderImageWithText({ 
  image,
  title,
  description
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <section className="relative w-full flex justify-center h-screen">
          <div className="relative inset-0 w-full h-full">
              {/* Imagem para Desktop */}
              {image && (
                  <Image
                    src={image}
                    title={title}
                    className="hidden md:block w-full h-full object-cover"
                    />
              )}
          </div>

          <div className="absolute top-[5%] flex flex-col justify-center items-center">
              <div className="!pt-[31vh] !pb-[80px] !px-[4%] mb-[30px] flex justify-center items-center">
                  <div className="max-w-[70%]">
                      <h2 id="headerImageWithText-title" className="opacity-0 duration-1000 translate-y-12 text-lg font-helvetica font-medium leading-tight-28 text-gray-light font-bold text-center mb-3">{title}</h2>
                      <p id="headerImageWithText-description" className="opacity-0 duration-1000 translate-y-12 text-[6vw] font-helvetica font-bold leading-tight-0.95 tracking-tight-2 text-white text-center">{description}</p>
                  </div>
              </div>
          </div>
      </section>
      <Script />
    </>
  );
}

export default HeaderImageWithText;