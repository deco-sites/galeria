import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";
import Image from "apps/website/components/Image.tsx";

function CardJob({ post }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div id={post.slug} className="relative w-full h-64 md:h-[750px] overflow-hidden mb-[6vw]">
        <a href={`/trabalhos/${post.slug}`}>
          <Image
              class="absolute inset-0 w-full h-full object-cover"
              src={post.image || ""}
              alt={post.image}
              decoding="async"
              loading="lazy"
          />
          <div class="absolute inset-0 bg-black bg-opacity-20"></div>

          <div class="pl-[8%] pb-[8%] absolute inset-0 flex flex-col justify-end text-white">
              <div class="">
                  <h3 class="font-helvetica text-dynamic font-semibold text-white truncate md:hidden">{post.title}</h3>
                  <h3 class="font-helvetica text-dynamic font-semibold text-white hidden md:block">{post.title}</h3>
                  <div className="hidden mt-2">
                    <p class="text-base text-responsive">{post.company}</p>
                  </div>
              </div>
          </div>
        </a>
      </div>
      <Script post={post} />
    </>
  );
}

export default CardJob;