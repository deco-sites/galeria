import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { ComponentChildren, Fragment } from "preact";
import { BlogPost } from "../apps/deco/blog/types.ts";
import { useId } from "../sdk/useId.ts";
import { useSection as useSection } from "@deco/deco/hooks";
export interface CTA {
  text?: string;
}
/** @title {{{title}}} */
export interface Post {
  url?: string;
  title?: string;
  company?: string;
  image?: ImageWidget;
  date?: string;
  readingTime?: string;
  tags?: string[];
}
export interface Props {
  cta?: CTA;
  posts?: BlogPost[] | null;
  pagination?: {
    /**
     * @title First page
     * @description Leave it as 0 to start from the first page
     */
    page?: number;
    /** @title items per page */
    perPage?: number;
  };
}
function Container({ children }: {
  children: ComponentChildren;
}) {
  return (
    <section className="w-full bg-black">
      <div class="container pt-[80px] lg:mx-auto text-sm">
        <div class="space-y-8">{children}</div>
      </div>
    </section>
  );
}
export default function BlogPosts(
  {
    cta = { text: "Show more" },
    posts,
    pagination: { page = 0, perPage = 6 } = {},
  }: Props,
) {
  const from = perPage * page;
  const to = perPage * (page + 1);
  // It's boring to generate ids. Let's autogen them
  const postList = useId();
  // Get the HTMX link for this section
  const fetchMoreLink = useSection({
    // Renders this section with the next page
    props: {
      pagination: { perPage, page: page + 1 },
    },
  });
  function calculateReadingTime(words: number): string {
    const wordsPerMinute = 250;
    const estimatedTimeMinutes = words / wordsPerMinute;
    const roundedReadingTime = Math.round(estimatedTimeMinutes);
    return `${roundedReadingTime} min`;
  }
  const ContainerComponent = page === 0 ? Container : Fragment;
  return (
    <ContainerComponent>
      <>
        <section className="container !px-2 !md:px-0 max-w-[1282px]">
          <div class="w-full gap-8 grid grid-cols-1">
              {posts?.slice(from, to).map((post) => (
                  <a
                      href={`/trabalhos/${post.slug}`}
                      class="relative w-full h-64 md:h-[750px] overflow-hidden mb-[6vw]"
                  >
                      <Image
                          // width={380}
                          // height={274}
                          class="absolute inset-0 w-full h-full object-cover"
                          // sizes="(max-width: 640px) 100vw, 30vw"
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
                          {/* <div class="flex flex-wrap gap-2 mt-4">
                              {post.categories?.map((category) => (
                                  <div class="badge badge-lg badge-primary text-xs">
                                      {category.name}
                                  </div>
                              ))}
                          </div> */}
                      </div>
                  </a>
              ))}

              {posts && to < posts.length && (
                  <div class="flex justify-center w-full" id={postList}>
                      <button
                          hx-get={fetchMoreLink}
                          hx-swap="outerHTML"
                          hx-target={`#${postList}`}
                          aria-label={cta.text}
                          class="btn btn-primary"
                      >
                          <span class="inline [.htmx-request_&]:hidden">{cta.text}</span>
                          <span class="loading loading-spinner hidden [.htmx-request_&]:block" />
                      </button>
                  </div>
              )}
          </div>
        </section>
      </>
    </ContainerComponent>
  );
}
