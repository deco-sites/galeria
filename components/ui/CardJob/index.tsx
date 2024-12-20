import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";
import Image from "apps/website/components/Image.tsx";

function CardJob({ post }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      {post.image && (
        <div id={post.slug} className="relative w-full h-64 md:h-[750px] overflow-hidden mb-[6vw] group">
          <a href={`/trabalhos/${post.slug}`}>
            <Image
                id={'img-' + post.slug}
                class="absolute inset-0 w-full h-full object-cover opacity-0 transform scale-110 transition-all duration-1000"
                src={post.image || ""}
                alt={post.image}
                decoding="async"
                loading="lazy"
            />
            <div class="absolute inset-0 bg-black bg-opacity-20"></div>

            <div class="pl-[8%] pb-[5%] absolute inset-0 flex flex-col justify-end text-white">
                <div class="transform translate-y-[10px] transition-all group-hover:translate-y-0">
                    <h3 class="font-helvetica text-dynamic font-semibold text-white truncate md:hidden">{post.title}</h3>
                    <h3 class="font-helvetica text-dynamic font-semibold text-white hidden md:block">{post.title}</h3>
                    <div className="opacity-0 duration-300 group-hover:opacity-100 pt-[20px]">
                      <p class="text-base text-responsive">{post.company}</p>
                    </div>
                </div>
            </div>
          </a>
        </div>
      )}
      <Script post={post} />
    </>
  );
}

export default CardJob;