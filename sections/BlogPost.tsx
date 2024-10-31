import { type BlogPost, BlogPostPage } from "../apps/deco/blog/types.ts";
import { Section } from "deco/blocks/section.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
interface Props {
  /**
   * @description The description of name.
   */
  page?: BlogPostPage | null;
}

const PARAGRAPH_STYLES = "[&_p]:leading-[150%] [&_*]:mb-4";
const HEADING_STYLES =
  "[&>h1]:text-4xl [&>h1]:my-6 [&>h1]:font-bold [&>h2]:text-3xl [&>h2]:my-6 [&>h2]:font-bold [&>h3]:text-2xl [&>h3]:my-6 [&>h3]:font-bold [&>h4]:text-xl [&>h4]:my-6 [&>h4]:font-bold [&>h5]:text-lg [&>h5]:my-6 [&>h5]:font-bold [&>h6]:text-base [&>h6]:my-6 [&>h6]:font-bold";
const CODE_BLOCK_STYLES =
  "[&>pre]:bg-gray-100 [&>pre]:text-gray-800 [&>pre]:p-4 [&>pre]:font-mono [&>pre]:text-sm [&>pre]:border [&>pre]:rounded-md [&>pre]:overflow-x-auto [&>code]:block [&>code]:w-full";
const IMAGE_STYLES = "[&_img]:rounded-2xl [&_img]:w-full [&_img]:my-12";
const BLOCKQUOTE_STYLES =
  "[&>blockquote]:my-6 [&>blockquote]:border-l-2 [&>blockquote]:border-black [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:pl-6";

const CONTENT_STYLES =
  `max-w-3xl mx-auto ${PARAGRAPH_STYLES} ${HEADING_STYLES} ${CODE_BLOCK_STYLES} ${IMAGE_STYLES} ${BLOCKQUOTE_STYLES}`;

const DEFAULT_AVATAR =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e";

const DEFAULT_PROPS: BlogPost = {
  title: "Blog title heading will go here",
  categories: [],
  image:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9",
  slug: "blog-post",
  content: [],
};

// Implemente a seção
function LoadComponent(
  { Component, props } : Section
) {
  return (
    <div>
      <Component {...props} />
    </div>
  );
}

function SocialIcons() {
  return (
    <div class="flex gap-2">
      <div class="bg-gray-200 rounded-full p-1">
        <Icon id="Link" size={24} />
      </div>
      <div class="bg-gray-200 rounded-full p-1">
        <Icon id="LinkedinOutline" size={24} />
      </div>
      <div class="bg-gray-200 rounded-full p-1">
        <Icon id="TwitterOutline" size={24} />
      </div>
      <div class="rounded-full bg-gray-200 p-1">
        <Icon id="FacebookOutline" size={24} />
      </div>
    </div>
  );
}

export default function BlogPost({ page }: Props) {

  const { title, image, content } = page?.post || DEFAULT_PROPS;

  return (
    <section>
      <div className="w-full flex flex-col gap-20 container mx-auto px-4 md:px-0 py-12 lg:py-28">
        <div className="w-full flex flex-col gap-12 max-w-3xl lg:mx-auto">
          <h1 className="text-5xl font-bold">{title}</h1>
        </div>
        <Image
          className="w-full object-cover aspect-video max-h-[600px] rounded-2xl"
          width={600}
          src={image || ""}
        />
        <div>
          {content?.map((section) => (
            LoadComponent(section)
          ))}
        </div>
        <div class="flex flex-col gap-10 max-w-3xl w-full mx-auto">
          <div class="space-y-4">
            <p class="text-lg font-bold">Share this post</p>
            <div class="flex flex-col gap-8 md:flex-row justify-between">
              <SocialIcons />
              <div class="flex gap-2 text-white text-xs">
                <p class="flex items-center bg-zinc-700 py-2 px-4 rounded-full">
                  Tag #1
                </p>
                <p class="flex items-center bg-zinc-700 py-2 px-4 rounded-full">
                  Tag #2
                </p>
                <p class="flex items-center bg-zinc-700 py-2 px-4 rounded-full">
                  Tag #3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
