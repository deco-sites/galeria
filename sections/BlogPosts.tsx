import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { ComponentChildren, Fragment } from "preact";
import { BlogPost } from "../apps/deco/blog/types.ts";
import { useId } from "../sdk/useId.ts";
import { useSection as useSection } from "@deco/deco/hooks";
import CardJob from '../components/ui/CardJob/index.tsx';
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
        <section className="container !px-2 !md:px-0 max-w-[1266px]">
          <div class="w-full gap-8 grid grid-cols-1">
              {posts?.slice(from, to).map((post) => (
                <CardJob post={post}></CardJob>
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
