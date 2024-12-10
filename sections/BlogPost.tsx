import { type BlogPost, BlogPostPage } from "../apps/deco/blog/types.ts";
import { Section } from "deco/blocks/section.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import BlogPostComponent from "../components/ui/BlogPost/index.tsx";

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
  company: '',
  year: ''
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

export default function BlogPost({ page }: Props) {

  const { title, image, content, year, company } = page?.post || DEFAULT_PROPS;

  return (
    <section className="bg-black">
        <div className="relative block h-screen overflow-y-hidden">
          <Image
              src={image || ""}
              width={100}
              className="w-full absolute top-0 left-0 object-cover"
            />
          <div class="bg-gradient-to-t from-black to-transparent h-64 w-full absolute bottom-0"></div>
          <div class="bg-black h-screen w-full absolute opacity-50"></div>
          <BlogPostComponent
            title={title}
            company={company}
            year={year}
          ></BlogPostComponent>
        </div>
        <div className="block anim-fadeinup">
          <div className="container !px-[15px] pt-[260px] grid gap-y-[30px] border-box">
            <p className="text-[26px] font-helvetica font-normal leading-tight-36 text-white opacity-7 px-[8%]">{title}</p>
            {content?.map((section) => (
              LoadComponent(section)
            ))}
          </div>
        </div>
    </section>
  );
}