import { BlogPost } from "../types.ts";
import { CSS } from "../static/css.ts";
import { Section } from "deco/blocks/section.ts";

export interface Props {
  post: BlogPost | null;
}

// Implemente a seção
function LoadComponent(
  { Component, props } : Section
) {
  return (
    <Component {...props} />
  );
}

export default function Template({ post }: Props) {
  if (!post) return null;

  const {
    title = "Campanha",
    content = [],
    image,
    alt,
  } = post;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div class="deco-post-preview">
        <h1>{title}</h1>
        {image && (
          <img
            class="w-full rounded-2xl bg-cover"
            src={image}
            alt={alt ?? title}
          />
        )}
        <div>
          {content?.map((section) => (
            LoadComponent(section)
          ))}
        </div>
      </div>
    </>
  );
}
